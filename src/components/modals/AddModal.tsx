// Library & Package Import
import { useState, useEffect, useRef } from 'react';
import ReactLoading from 'react-loading';

// Import Assets
import { CloseButtonIcon } from '../../assets/icons/icon';

// Import Components
import CheckboxField from '../field/CheckboxField';
import InputField from '../field/InputField';
import SelectField from '../field/SelectField';
import TextAreaField from '../field/TextAreaField';

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

  console.log(formData);
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked ? 1 : 0,
      }));
    } else if (name === 'icons_name') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value.value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: Array.isArray(value)
          ? value.map((option) => option.value)
          : value,
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
      const focusTarget = firstInputRef.current || selectRef.current;
      if (focusTarget) {
        focusTarget.focus();
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
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mt-8">
            {inputField.map((field: any, index: number) => (
              <div
                key={field.id}
                className={`${
                  inputField.length === 1 ||
                  inputField.length === 2 ||
                  field.id === 'topic_description' ||
                  (index === 0 && inputField.length >= 3)
                    ? 'col-span-2'
                    : ''
                }`}
              >
                <label
                  className="flex justify-start mb-2 font-medium"
                  htmlFor={field.id}
                >
                  {field.label}
                </label>

                {field.type === 'select' && (
                  <SelectField
                    id={field.id}
                    name={field.name}
                    isMulti={field.isMulti}
                    options={field.options}
                    onChange={handleChange}
                  />
                )}

                {field.type === 'checkbox' && (
                  <CheckboxField
                    id={field.id}
                    name={field.name}
                    checked={formData[field.name as keyof FormData] === 1}
                    onChange={handleChange}
                  />
                )}

                {(field.type === 'text-area' || field.type === 'textarea') && (
                  <TextAreaField
                    id={field.id}
                    name={field.name}
                    placeholder={`Input ${field.label}`}
                    onChange={handleChange}
                  />
                )}

                {field.type !== 'select' &&
                  field.type !== 'checkbox' &&
                  field.type !== 'text-area' &&
                  field.type !== 'textarea' && (
                    <InputField
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      placeholder={`Input ${field.label}`}
                      onChange={handleChange}
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
