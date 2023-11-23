import React from 'react';

interface CheckboxFieldProps {
  id: string;
  name: string;
  checked?: boolean;
  defaultCheck?: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  id,
  name,
  checked,
  defaultCheck,
  onChange,
}) => (
  <label className={`relative inline-flex items-center cursor-pointer mt-2`}>
    <input
      type="checkbox"
      id={id}
      name={name}
      onChange={onChange}
      defaultChecked={defaultCheck}
      checked={checked}
      className="sr-only peer"
    />
    <div
      className={`w-11 h-6 bg-red-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
    ></div>
  </label>
);

export default CheckboxField;
