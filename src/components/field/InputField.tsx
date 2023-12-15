import React from 'react';

// Import Props
import { InputFieldProps } from '../../state/types/FieldType';

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
