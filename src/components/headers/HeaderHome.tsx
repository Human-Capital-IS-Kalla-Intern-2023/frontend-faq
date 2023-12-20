import logoKalla from '../../assets/img/logo/singel-logo-kalla_52x48.webp';
import ButtonLogout from '../../components/buttons/ButtonLogout';
import { TokenHelperUser } from '../../helpers/TokenHelpers';
const HeaderHome = () => {
  return (
    <>
      <div className="flex py-1 shadow-lg md:py-3">
        <div className="flex items-center justify-between w-full text-center">
          <div className="flex items-center justify-center text-center">
            <img
              src={logoKalla}
              className="h-11 w-12 md:h-12 ml-5 rounded-full md:w-[52px]"
              width={52}
              height={48}
              alt="logo kalla"
              loading="lazy"
            />
            <h1 className="flex p-[14px] justify-center items-center lg:text-xl text-lg">
              Pusat Bantuan
            </h1>
          </div>
          <div className="mr-5">
            <ButtonLogout
              title=""
              bg="bg-slate-200 flex justify-center items-center text-base"
              className="px-2 py-1"
              linkNavigate="/"
              remove_token_name="access_token"
              token_helper={TokenHelperUser()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderHome;
