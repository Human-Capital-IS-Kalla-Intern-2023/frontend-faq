import React from 'react';

interface TextAreaFieldProps {
  id: string;
  name: string;
  value?: any;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  id,
  name,
  value,
  placeholder,
  onChange,
}) => (
  <textarea
    id={id}
    name={name}
    value={value}
    placeholder={placeholder}
    className="w-full px-3 py-2 border rounded"
    onChange={onChange}
  />
);

export default TextAreaField;
