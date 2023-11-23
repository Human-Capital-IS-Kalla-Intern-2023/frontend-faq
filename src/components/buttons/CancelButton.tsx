import React from 'react';

interface CancelButtonProps {
  onClick: () => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({ onClick }) => {
  return (
    <button
      aria-label="Cancel"
      className="px-1 py-2 mr-2 duration-300 bg-transparent rounded-md lg:text-lg text-pureBlack lg:px-4 lg:py-2 lg:mr-4 bg-stone-300 hover:text-pureBlack hover:bg-slate-400 lg:hover:scale-[1.03]"
      onClick={onClick}
    >
      Cancel
    </button>
  );
};

export default CancelButton;
