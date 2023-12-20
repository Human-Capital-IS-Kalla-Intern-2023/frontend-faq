// Import Library And Package
import React from 'react';
import ReactLoading from 'react-loading';

// Import Type
import { SubmitButtonProps } from '../../state/types/ButtonType';

const SubmitButton: React.FC<SubmitButtonProps> = ({
  title,
  onClick,
  disabled,
  ariaLabel,
}) => {
  return (
    <button
      aria-label={ariaLabel}
      className="px-1 py-2 text-white duration-300 rounded-md lg:text-[17px] lg:px-4 lg:py-2 bg-primary hover:bg-green-600 lg:hover:scale-[1.03]"
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

const SubmitButton2: React.FC<SubmitButtonProps> = ({
  ariaLabel,
  title,
  isLoading,
  onClick,
}) => {
  return (
    <button
      aria-label={ariaLabel}
      type="submit"
      className={`col-span-2 px-4 py-2 text-lg text-white duration-200 border rounded hover:bg-secondary hover:text-black hover:border-black ${
        isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-800'
      }`}
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )}
      {title}
    </button>
  );
};

export { SubmitButton, SubmitButton2 };
