import { CloseButtonIcon } from '../../assets/icons/Icon';

const FooterCard = () => {
  return (
    <div className="fixed bottom-1 right-0 p-2">
      <div className="flex justify-between rounded-md  pt-2 py-2 px-3 mx-auto max-w-screen-md">
        <div className="flex py-4 bg-white shadow-xl border border-slate-300 px-3 rounded-md">
          <div className="">
            <p className="px-2 flex text-sm pb-4">
              Apakah Ini Membantu?
              <div className="px-2">
                <CloseButtonIcon className=""></CloseButtonIcon>
              </div>
            </p>
            <div className="flex px-7 gap-4">
              <button className="text-sm px-5 py-2 rounded-md bg-slate-200">
                Like 👍
              </button>
              <button className="text-sm px-5 py-2 rounded-md bg-slate-200">
                Dislike 👎
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
