export interface InputFieldProps {
  id: string;
  name: string;
  type: string;
  label: string;
  isMulti?: boolean;
  options?: any[];
}

export interface SelectFieldProps {
  id: string;
  name: string;
  value?: any;
  isMulti?: boolean;
  options: any[];
  onChange: (selectedOptions: any) => void;
  showImageInputCheckbox?: boolean;
  defaultValue?: any;
  imageFieldName?: string;
  ariaLabel: string;
  selectedValue?: any;
}

export interface InputFieldProps {
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

export interface TextAreaFieldProps {
  id: string;
  name: string;
  value?: any;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface CheckboxFieldProps {
  id: string;
  name: string;
  checked?: boolean;
  defaultCheck?: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
