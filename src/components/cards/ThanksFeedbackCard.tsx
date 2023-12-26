import { CloseButtonIcon } from '../../assets/icons/Icon';

const ThanksFeedbackCard = ({ handleCloseButtonClick }: any) => {
  return (
    <div className="flex items-center justify-center text-center">
      <div className="pl-1 pr-2 text-sm">Terima kasih atas feedback Anda!</div>
      <button
        className="flex justify-end pl-4"
        onClick={() => handleCloseButtonClick()}
      >
        <CloseButtonIcon className="w-8 h-[18px] hover:bg-slate-200 hover:text-red-600 rounded-full cursor-pointer" />
      </button>
    </div>
  );
};

export default ThanksFeedbackCard;
