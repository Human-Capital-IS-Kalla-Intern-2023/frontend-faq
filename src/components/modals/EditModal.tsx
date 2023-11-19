import { useState, useEffect, useRef } from 'react';
import ReactLoading from 'react-loading';
import Select from 'react-select';

import { CloseButtonIcon } from '../../assets/icons/icon';

interface FormData {
  [key: string]: any;
}

const EditModal = ({
  isOpen,
  onClose,
  title,
  inputFields,
  onSubmit,
  idToEdit,
  initialFormData,
}: any) => {
  const [formData, setFormData] = useState<FormData>({});
  const [isLoading, setIsLoading] = useState(false);
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else if (name === 'locations_id') {
      setFormData((prevData) => ({
        ...prevData,
        locations_id: value,
      }));
    } else {
      let parsedValue = value;
      if (name === 'id_main_position') {
        parsedValue = parseInt(value, 10) || null;
      }

      if (name === 'id_additional_position') {
        const selectedOptions = Array.isArray(value)
          ? value.map((option) => option.value)
          : [parseInt(value, 10) || null];

        // Hapus posisi tambahan yang dipilih sebelumnya dari formData
        const updatedAdditionalPositions = formData[
          'id_additional_position'
        ].filter((position: any) => !selectedOptions.includes(position));

        setFormData((prevData) => ({
          ...prevData,
          [name]: selectedOptions,
          id_additional_position: updatedAdditionalPositions,
        }));
      }

      setFormData((prevData) => ({
        ...prevData,
        [name]: Array.isArray(value)
          ? value.map((option) => option.value)
          : parsedValue,
      }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await onSubmit(formData, idToEdit);
      onClose();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      const initialData: FormData = {};
      inputFields.forEach((field: any) => {
        if (field.type === 'select' && field.isMulti) {
          // Handle multi-select fields
          initialData[field.name] = initialFormData[field.name] || [];
        } else if (field.type === 'checkbox') {
          // Initialize checkboxes based on initialFormData
          initialData[field.name] = initialFormData[field.name] === 1 ? 1 : 0;
        } else {
          initialData[field.name] = initialFormData[field.name] || '';
        }
      });

      if ('company_name' in initialFormData) {
        initialData['company_name'] = initialFormData['company_name'];
      }

      if ('is_hide' in initialFormData) {
        initialData['is_hide'] = initialFormData['is_hide'] === 1 ? 1 : 0;
      }

      if ('is_active' in initialFormData) {
        initialData['is_active'] = initialFormData['is_active'] === 1 ? 1 : 0;
      }

      if ('is_edit' in initialFormData) {
        initialData['is_edit'] = initialFormData['is_edit'] === 1 ? 1 : 0;
      }

      if ('salary_name' in initialFormData) {
        initialData['salary_name'] = initialFormData['salary_name'];
      }

      // Check 'id_additional_position' if it exists in initialFormData
      if ('additional_position' in initialFormData) {
        initialData['id_additional_position'] = initialFormData[
          'additional_position'
        ].map((position: any) => position.id_additional_position);
      } else {
        // Handle the case when 'additional_position' is not present
        initialData['id_additional_position'] = [];
      }

      setFormData(initialData);
    }
  }, [isOpen, initialFormData, inputFields]);

  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50 overlay">
      <div className="relative w-11/12 p-6 bg-white rounded shadow-lg lg:w-3/6 overlay">
        <div
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-5 focus:outline-none"
        >
          <CloseButtonIcon className="w-10 h-10 p-1 duration-200 rounded-full overlay hover:bg-primary hover:text-white" />
        </div>
        <div className="relative mt-8 mb-5 text-center">
          <span className="relative z-10 px-6 py-2 text-lg text-white border rounded-full lg:px-8 lg:text-2xl bg-primary border-primaryColor">
            {title}
          </span>
          <div className="absolute top-1/2 text-black bg-black left-0 transform -translate-y-1/2 w-full h-0.5 bg-primaryColor z-0"></div>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 mt-8">
          {inputFields.map((field: any, index: number) => (
            <div
              key={field.id}
              className={
                inputFields.length === 1
                  ? 'col-span-2'
                  : inputFields.length === 2
                  ? 'col-span-2'
                  : index === 0 && inputFields.length >= 3
                  ? 'col-span-2'
                  : ''
              }
            >
              <label
                className="flex justify-start mb-2 text-base font-medium"
                htmlFor={field.id}
              >
                {field.label}
              </label>
              {field.type === 'select' ? (
                field.isMulti ? (
                  <Select
                    key={field.name}
                    id={field.id}
                    name={field.name}
                    isMulti={field.isMulti}
                    value={formData[field.name]?.map(
                      (selectedValue: any) =>
                        field.options.find(
                          (option: any) => option.value === selectedValue
                        ) || null
                    )}
                    className="w-full"
                    options={field.options}
                    onChange={(selectedOptions) =>
                      handleChange({
                        target: { name: field.name, value: selectedOptions },
                      })
                    }
                  />
                ) : (
                  <Select
                    id={field.id}
                    name={field.name}
                    className="w-full capitalize border rounded text-start"
                    options={field.options}
                    onChange={(selectedOptions) =>
                      handleChange({
                        target: { name: field.name, value: selectedOptions },
                      })
                    }
                  />
                )
              ) : field.type === 'checkbox' ? (
                <label
                  className={`relative inline-flex w-full  cursor-pointer mt-2`}
                >
                  <input
                    type="checkbox"
                    id={field.id}
                    name={field.name}
                    onChange={handleChange}
                    ref={index === 0 ? firstInputRef : null}
                    className="sr-only peer"
                    checked={formData[field.name] || false}
                  />
                  <div
                    className={`w-11 h-6 bg-red-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
                  ></div>
                </label>
              ) : (
                <input
                  type={field.type || 'text'}
                  id={field.id}
                  name={field.name}
                  placeholder={`Masukkan ${field.label}`}
                  className={`w-full px-3 py-2 border rounded`}
                  onChange={handleChange}
                  ref={index === 0 ? firstInputRef : null}
                  value={formData[field.name] || ''}
                />
              )}
            </div>
          ))}
          <button
            aria-label="Update"
            type="submit"
            className={`col-span-2 px-4 py-2 text-lg text-white duration-200 border rounded hover:bg-secondary hover:text-pureBlack hover:border-pureBlack ${
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
