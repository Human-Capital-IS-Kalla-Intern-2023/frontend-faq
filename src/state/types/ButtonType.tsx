export interface CancelButtonProps {
  title?: string;
  onClick: () => void;
}

export interface CloseButtonProps {
  onClick: () => void;
}

export interface LoginButtonProps {
  email: string;
  passwordInput: string;
}

export interface SubmitButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  isLoading?: boolean;
}
