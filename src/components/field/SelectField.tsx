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
}

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  name,
  value,
  isMulti,
  options,
  onChange,
  showImageInputCheckbox = false,
}) => {
  const [useImageInput, setUseImageInput] = useState(false);

  const handleCheckboxChange = () => {
    setUseImageInput(!useImageInput);
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
          accept="image/*"
          onChange={(e) =>
            onChange({ target: { name, value: e.target.files } })
          }
          className="my-2 w-full border rounded p-[3px] block"
        />
      ) : (
        <Select
          id={id}
          name={name}
          isMulti={isMulti}
          value={value}
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
