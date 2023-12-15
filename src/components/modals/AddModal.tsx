// Library & Package Import
import { useState, useEffect, useRef } from 'react';

// Import Assets

// Import Components
import CheckboxField from '../field/CheckboxField';
import InputField from '../field/InputField';
import SelectField from '../field/SelectField';
import TextAreaField from '../field/TextAreaField';
import { SubmitButton2 } from '../buttons/SubmitButton';
import CloseButton from '../buttons/CloseButton';

// Import Enum
import { tagEnum } from '../../state/enum/TagEnum';
import { apiEnum } from '../../state/enum/ApiEnum';

// Import Type
import { FormData } from '../../state/types/ModalType';

const AddModal = ({ isOpen, onClose, title, inputFields, onSubmit }: any) => {
  const initialFormData: FormData = {};
  inputFields.forEach((field: any) => {
    if (field.type === tagEnum.CHECKBOX) {
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

    if (type === tagEnum.CHECKBOX) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked ? 1 : 0,
      }));
    } else if (name === apiEnum.ICON) {
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
          <CloseButton onClick={onClose} />
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
                  field.id === apiEnum.DESCRIPTION ||
                  (index === 0 && inputField.length >= 3)
                    ? 'col-span-2'
                    : ''
                }`}
              >
                <label
                  className="flex justify-start mb-2 font-medium capitalize"
                  htmlFor={field.id}
                >
                  {field.label}
                </label>

                {field.type === tagEnum.SELECT && (
                  <SelectField
                    id={field.id}
                    name={field.name}
                    isMulti={field.isMulti}
                    options={field.options}
                    onChange={handleChange}
                    showImageInputCheckbox={field.label === 'icon'}
                    imageFieldName={apiEnum.IMAGE}
                    ariaLabel={field.name}
                  />
                )}

                {field.type === tagEnum.CHECKBOX && (
                  <CheckboxField
                    id={field.id}
                    name={field.name}
                    checked={formData[field.name as keyof FormData] === 1}
                    onChange={handleChange}
                  />
                )}

                {field.type === tagEnum.TEXTAREA && (
                  <TextAreaField
                    id={field.id}
                    name={field.name}
                    placeholder={`Input ${field.label}`}
                    onChange={handleChange}
                  />
                )}

                {field.type === tagEnum.TEXT && (
                  <InputField
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    placeholder={`Input ${field.label}`}
                    onChange={handleChange}
                    label="add field"
                  />
                )}
              </div>
            ))}

            <SubmitButton2
              ariaLabel="submit data"
              isLoading={isLoading}
              title="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
