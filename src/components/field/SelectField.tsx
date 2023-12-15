import React, { useState } from 'react';
import Select from 'react-select';
import { useEffect } from 'react';

// Import Props
import { SelectFieldProps } from '../../state/types/FieldType';

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  name,
  isMulti,
  options,
  value,
  onChange,
  showImageInputCheckbox = false,
  defaultValue,
  imageFieldName,
  ariaLabel,
}) => {
  const [useImageInput, setUseImageInput] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleCheckboxChange = () => {
    setUseImageInput(!useImageInput);
  };

  const handleChange = (selectedOptions: any) => {
    if (!useImageInput) {
      setSelectedValue(selectedOptions);
      onChange({ target: { name, value: selectedOptions } });
    }
  };

  const handleImageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];

      onChange({ target: { name: imageFieldName, value: file } });
    }
  };

  useEffect(() => {
    // Update selected value when defaultValue changes
    setSelectedValue(defaultValue);
  }, [defaultValue]);

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
          value={selectedValue ? selectedValue : value}
          defaultValue={defaultValue}
          aria-label={ariaLabel}
          className={`w-full my-2 ${isMulti ? '' : 'capitalize'}`}
          options={options}
          onChange={handleChange}
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
