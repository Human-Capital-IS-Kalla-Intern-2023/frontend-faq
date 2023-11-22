import React from 'react';

interface InputFieldProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  type,
  placeholder,
  onChange,
}) => (
  <input
    type={type || 'text'}
    id={id}
    name={name}
    placeholder={placeholder}
    className="w-full px-3 py-2 border rounded"
    onChange={onChange}
  />
);

export default InputField;
