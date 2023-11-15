// Library & Package Import
import { useState, useEffect, useRef } from 'react';
import ReactLoading from 'react-loading';
import Select from 'react-select';

// Import Assets
import { CloseButtonIcon } from '../../../assets/icons/icon';

// Interface
interface FormData {
  [key: string]: string | number | boolean | null | undefined;
}

const AddModal = ({ isOpen, onClose, title, inputFields, onSubmit }: any) => {
  const initialFormData: FormData = {};
  inputFields.forEach((field: any) => {
    if (field.type === 'checkbox') {
      initialFormData[field.name] = 1;
    }
  });

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const [inputField] = useState(inputFields);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked ? 1 : 0,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: Array.isArray(value)
          ? value.map((option) => option.value)
          : null,
      }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      await onSubmit(formData);
      onClose();
      localStorage.removeItem('formData');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOverlayClick = (e: any) => {
    if (e.target.classList.contains('overlay')) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      if (firstInputRef.current) {
        firstInputRef.current.focus();
      } else if (selectRef.current) {
        selectRef.current.focus();
      }
    }
  }, [isOpen]);

  return (
    <div>
      <div
        className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50 overlay "
        onClick={handleOverlayClick}
      >
        <div className="relative w-full p-6 bg-white rounded shadow-lg md:w-3/6 overlay">
          <div
            onClick={onClose}
            className="absolute cursor-pointer top-4 right-5 focus:outline-none"
          >
            <CloseButtonIcon className="w-10 h-10 p-1 duration-200 rounded-full overlay hover:bg-primary hover:text-white" />
          </div>
          <div className="relative mt-8 mb-5 text-center">
            <span className="relative z-10 px-8 py-2 text-2xl text-white border rounded-full bg-primary border-primaryColor">
              {title}
            </span>
            <div className="absolute top-1/2 text-black bg-black left-0 transform -translate-y-1/2 w-full h-0.5 bg-primaryColor z-0"></div>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 mt-8">
            {inputField.map((field: any, index: number) => (
              <div
                key={field.id}
                className={
                  inputField.length === 1
                    ? 'col-span-2'
                    : inputField.length === 2
                    ? 'col-span-2'
                    : index === 0 && inputField.length >= 3
                    ? 'col-span-2'
                    : ''
                }
              >
                <label
                  className="flex justify-start mb-2 font-medium"
                  htmlFor={field.id}
                >
                  {field.label}
                </label>
                {field.type === 'select' ? (
                  field.isMulti ? (
                    <Select
                      id={field.id}
                      name={field.name}
                      isMulti
                      className="w-full"
                      options={field.options}
                      onChange={(selectedOptions) =>
                        handleChange({
                          target: { name: field.name, value: selectedOptions },
                        })
                      }
                    />
                  ) : (
                    <select
                      id={field.id}
                      name={field.name}
                      className={`w-full px-3 py-2 border rounded ${
                        field.name === 'salary_id' && !formData.company_id
                          ? 'bg-[#d3d3d3] text-gray cursor-not-allowed'
                          : ''
                      }`}
                      onChange={handleChange}
                      ref={index === 0 ? selectRef : null}
                      disabled={
                        field.name === 'salary_id' && !formData.company_id
                      }
                      title={
                        field.name === 'salary_id' && !formData.company_id
                          ? 'Please select a company first before choosing a salary'
                          : ''
                      }
                    >
                      <option value="">Select {field.label}</option>
                      {field.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )
                ) : field.type === 'checkbox' ? (
                  <input
                    type="checkbox"
                    id={field.id}
                    name={field.name}
                    onChange={handleChange}
                    ref={index === 0 ? firstInputRef : null}
                    defaultChecked={
                      formData[field.name as keyof FormData] === 1
                    }
                  />
                ) : (
                  <input
                    type={field.type || 'text'}
                    id={field.id}
                    name={field.name}
                    placeholder={`Input ${field.label}`}
                    className="w-full px-3 py-2 border rounded"
                    onChange={handleChange}
                    ref={index === 0 ? firstInputRef : null}
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              aria-label="submit data"
              className={`col-span-2 px-4 py-2 text-lg text-white duration-200 border rounded hover:bg-green-600 hover:text-white  ${
                isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-800'
              }`}
              disabled={isLoading}
            >
              {isLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <ReactLoading
                    type="spin"
                    color="green"
                    height={50}
                    width={50}
                  />
                </div>
              )}
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
