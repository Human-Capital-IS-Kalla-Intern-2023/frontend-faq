import { InputFieldProps } from './FieldType';

export interface DeleteModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onDelete?: () => void;
  deleteData?: string | number;
}

export interface FormData {
  [key: string]: string | number | null | undefined | never[];
}

export interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  inputFields: InputFieldProps[];
  onSubmit: (formData: FormData, idToEdit: any) => Promise<void>;
  idToEdit: any;
  initialFormData: FormData;
}

export interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Record<string, any> | null;
  inputField: InputFieldProps[];
}
