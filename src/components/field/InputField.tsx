import React from 'react';

interface InputFieldProps {
  id: string;
  name: string;
  type: string;
  value?: string;
  autoComplete?: string;
  placeholder: string;
  required?: boolean;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  type,
  value,
  autoComplete,
  required,
  placeholder,
  className,
  onChange,
}) => (
  <input
    type={type || 'text'}
    id={id}
    name={name}
    value={value}
    required={required}
    autoComplete={autoComplete}
    placeholder={placeholder}
    className={`w-full px-3 py-2 border rounded ${className}`}
    onChange={onChange}
  />
);

export default InputField;
