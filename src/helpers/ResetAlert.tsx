export const ResetAlert = (
  setSuccessTitle: (title: string | null) => void,
  setSuccessMessage: (message: string | null) => void,
  setErrorTitle: (title: string | null) => void,
  setErrorMessage: (message: string | null) => void
) => {
  setTimeout(() => {
    setSuccessTitle(null);
    setSuccessMessage(null);
    setErrorTitle(null);
    setErrorMessage(null);
  }, 100);
};
