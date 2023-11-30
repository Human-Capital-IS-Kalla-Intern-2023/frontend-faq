// Import Library And Package
import React from 'react';

// Import Asset
import { CloseButtonIcon } from '../../assets/icons/Icon';

// Import Type
import { CloseButtonProps } from '../../state/types/ButtonType';
const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute cursor-pointer top-4 right-5 focus:outline-none"
    >
      <CloseButtonIcon className="w-10 h-10 p-1 duration-200 rounded-full overlay hover:bg-primary hover:text-white" />
    </div>
  );
};

export default CloseButton;
