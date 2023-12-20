export interface CancelButtonProps {
  title?: string;
  onClick: () => void;
}

export interface CloseButtonProps {
  onClick: () => void;
}

export interface SubmitButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  isLoading?: boolean;
}

export interface LoginButtonProps {
  email: string;
  passwordInput: string;
}

export interface ButtonLogoutProp {
  title: string;
  className: string;
  bg: string;
  linkNavigate: string;
  remove_token_name: string;
  token_helper: any;
}
