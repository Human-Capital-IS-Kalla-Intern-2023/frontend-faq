import React, { useState } from 'react';
import Select from 'react-select';

interface SelectFieldProps {
  id: string;
  name: string;
  value?: any;
  isMulti?: boolean;
  options: any[];
  onChange: (selectedOptions: any) => void;
  showImageInputCheckbox?: boolean;
  defaultValue?: any;
  imageFieldName?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  name,
  value,
  isMulti,
  options,
  onChange,
  showImageInputCheckbox = false,
  defaultValue,
  imageFieldName,
}) => {
  const [useImageInput, setUseImageInput] = useState(false);

  const handleCheckboxChange = () => {
    setUseImageInput(!useImageInput);
  };

  const handleImageInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];

      if (isValidFileType(file)) {
        const base64String = await convertFileToBase64(file);
        onChange({ target: { name: imageFieldName, value: base64String } });
      } else {
        alert('Invalid file type. Please select an SVG or PNG file.');
      }
    }
  };

  const isValidFileType = (file: File): boolean => {
    const allowedTypes = ['image/svg+xml', 'image/png'];
    return allowedTypes.includes(file.type);
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Failed to read file as base64.'));
        }
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      {showImageInputCheckbox && (
        <label className="">
          <input
            type="checkbox"
            checked={useImageInput}
            onChange={handleCheckboxChange}
            className=""
          />{' '}
          Upload New Icon
        </label>
      )}
      {useImageInput ? (
        <input
          type="file"
          name={name}
          id={id}
          accept="image/svg+xml,image/png"
          onChange={handleImageInputChange}
          className="my-2 w-full border rounded p-[3px] block"
        />
      ) : (
        <Select
          id={id}
          name={name}
          isMulti={isMulti}
          value={value}
          defaultValue={defaultValue}
          className={`w-full my-2 ${isMulti ? '' : 'capitalize'}`}
          options={options}
          onChange={(selectedOptions) =>
            onChange({ target: { name, value: selectedOptions } })
          }
          styles={{
            control: (provided) => ({
              ...provided,
              border: '1px solid black',
              outline: 'none',
              boxShadow: 'none',
            }),
          }}
        />
      )}
    </>
  );
};

export default SelectField;
