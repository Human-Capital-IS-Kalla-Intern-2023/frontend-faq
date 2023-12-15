import { InputFieldProps } from './FieldType';

export interface DeleteModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onDelete?: () => void;
  deleteData?: string | number;
}

export interface FormData {
  [key: string]: any;
}

export interface EditModalProps {
  isOpen?: boolean;
  onClose?: any;
  title?: string;
  inputFields?: any[];
  onSubmit?: (formData: any, idToEdit: any) => void;
  idToEdit?: any;
  initialFormData?: FormData;
}

export interface DetailModalProps {
  isOpen?: boolean;
  onClose?: any;
  data?: Record<string, any> | null;
  inputField?: InputFieldProps[];
}
