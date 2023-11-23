import { useState, useEffect, useRef } from 'react';
import ReactLoading from 'react-loading';

// Import Components
import CheckboxField from '../field/CheckboxField';
import InputField from '../field/InputField';
import SelectField from '../field/SelectField';
import TextAreaField from '../field/TextAreaField';
import CloseButton from '../buttons/CloseButton';

// Imoport Assets

// Import Type
import { generalEnum } from '../../state/enum/generalEnum';
import { topicEnum } from '../../state/enum/topicEnum';
import { questionEnum } from '../../state/enum/questionEnum';
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

    if (type === generalEnum.CHECKBOX) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
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
        if (field.type === generalEnum.SELECT && field.isMulti) {
          initialData[field.name] = initialFormData[field.name] || [];
        } else if (field.type === generalEnum.CHECKBOX) {
          initialData[field.name] = initialFormData[field.name] === 1 ? 1 : 0;
        } else {
          initialData[field.name] = initialFormData[field.name] || '';
        }
      });

      if (topicEnum.TOPIC_STATUS in initialFormData) {
        initialData[topicEnum.TOPIC_STATUS] =
          initialFormData[topicEnum.TOPIC_STATUS] === 1 ? 1 : 0;
      }

      if (questionEnum.QUESTION_STATUS in initialFormData) {
        initialData[questionEnum.QUESTION_STATUS] =
          initialFormData[questionEnum.QUESTION_STATUS] === 1 ? 1 : 0;
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
    <div>
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50 overlay ">
        <div className="relative w-full p-6 bg-white rounded shadow-lg md:w-3/6 overlay">
          <CloseButton onClick={onClose} />
          <div className="relative mt-8 mb-5 text-center">
            <span className="relative z-10 px-8 py-2 text-2xl text-white border rounded-full bg-primary border-primaryColor">
              {title}
            </span>
            <div className="absolute top-1/2 text-black bg-black left-0 transform -translate-y-1/2 w-full h-0.5 bg-primaryColor z-0"></div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-4 mt-8 text-base text-left"
          >
            {inputFields.map((field: any, index: number) => (
              <div
                key={field.id}
                className={`${
                  inputFields.length === 1 ||
                  inputFields.length === 2 ||
                  field.id === 'topic_description' ||
                  (index === 0 && inputFields.length >= 3)
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

                {field.type === 'select' && (
                  <SelectField
                    id={field.id}
                    name={field.name}
                    isMulti={field.isMulti}
                    options={field.options}
                    onChange={handleChange}
                    showImageInputCheckbox={field.label === 'icon'}
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

                {(field.type === 'textarea' || field.type === 'textarea') && (
                  <TextAreaField
                    id={field.id}
                    name={field.name}
                    placeholder={`Input ${field.label}`}
                    onChange={handleChange}
                  />
                )}

                {field.type !== 'select' &&
                  field.type !== 'checkbox' &&
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
    </div>
  );
};

export default EditModal;
