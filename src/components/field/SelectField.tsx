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

  const handleImageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];

      onChange({ target: { name: imageFieldName, value: file } });
    }
  };

  // const isValidFileType = (file: File): boolean => {
  //   const allowedTypes = ['image/svg+xml', 'image/png'];
  //   return allowedTypes.includes(file.type);
  // };

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
          name="image"
          onChange={handleImageInputChange}
          accept="image/svg+xml,image/png"
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
