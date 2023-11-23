import React from 'react';

interface InputFieldProps {
  id: string;
  name: string;
  type: string;
  value?: any;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  type,
  value,

  placeholder,
  onChange,
}) => (
  <input
    type={type || 'text'}
    id={id}
    name={name}
    value={value}
    placeholder={placeholder}
    className="w-full px-3 py-2 border rounded"
    onChange={onChange}
  />
);

export default InputField;
