import { WarningIcon } from '../../../assets/icons/icon';
const DeleteModal = ({ isOpen, onClose, onDelete, deleteData }: any) => {
  const handleDelete = () => {
    onDelete();
    onClose();
  };
  const handleOverlayClick = (e: any) => {
    if (e.target.classList.contains('overlay')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overlay"
      onClick={handleOverlayClick}
    >
      <div className="w-1/3 p-6 bg-white rounded shadow-lg">
        <div className="mb-4 ">
          <WarningIcon className="w-20 h-20 mx-auto text-red-800" />
        </div>
        <h2 className="mb-4 text-[22px] font-black text-center ">
          Delete Confirmation
        </h2>
        <div className="text-lg text-center text-black">
          Are you sure you want to delete <br />
          <span className="font-semibold">"{deleteData}"</span> ?
        </div>
        <div className="flex justify-end mt-8">
          <button
            aria-label="Cancel"
            onClick={onClose}
            className="w-full px-4 py-2 mr-4  text-base overlay text-black rounded bg-[#EAEAEC]  hover:bg-slate-300  duration-200"
          >
            Cancel
          </button>
          <button
            aria-label="Delete"
            onClick={handleDelete}
            className="w-full px-4 py-2 text-base text-white bg-red-800 rounded hover:bg-[#AD1010]"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
