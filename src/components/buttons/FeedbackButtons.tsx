// FeedbackButtons.tsx
import React from 'react';

interface FeedbackButtonsProps {
  onLikeClick: () => void;
  onDislikeClick: () => void;
}

const FeedbackButtons: React.FC<FeedbackButtonsProps> = ({
  onLikeClick,
  onDislikeClick,
}) => {
  return (
    <div className="flex justify-between w-full mt-2 space-x-2">
      <button
        onClick={onLikeClick}
        className="w-full text-sm px-5 py-2 rounded-md bg-[#E4E6EB] hover:bg-[#D8DADF]"
      >
        Ya 👍
      </button>
      <button
        onClick={onDislikeClick}
        className="text-sm w-full px-5 py-2 rounded-md bg-[#E4E6EB] hover:bg-[#D8DADF]"
      >
        Tidak 👎
      </button>
    </div>
  );
};

export default FeedbackButtons;
