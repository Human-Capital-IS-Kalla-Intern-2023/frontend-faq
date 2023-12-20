export interface CustomAlertProps {
  title: string;
  text: string;
  timer?: number;
}

export interface ConfirmationAlertProps {
  title: string;
  text?: string;
  html?: any;
  onConfirm: () => void;
  timer?: number;
  confirmButtonText?: string;
}

export interface ConfirmationAlert {
  title: string;
  text: string;
  detail?: string;
  onConfirm: () => void;
}
