import React from 'react';

interface TextAreaFieldProps {
  id: string;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  id,
  name,
  placeholder,
  onChange,
}) => (
  <textarea
    id={id}
    name={name}
    placeholder={placeholder}
    className="w-full px-3 py-2 border rounded"
    onChange={onChange}
  />
);

export default TextAreaField;
