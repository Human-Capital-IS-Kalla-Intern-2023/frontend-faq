import ReactLoading from 'react-loading';
import { useEffect, useState } from 'react';
import HomeUserCard from '../../components/cards/HomeUserCard';
import logoKalla from '../../assets/img/logo/singel-logo-kalla_52x48.webp';
import { getTopicUser } from '../../api/user/FaqUserAPI';
import ButtonLogout from '../../components/buttons/ButtonLogout';
import { TokenHelperUser } from '../../helpers/TokenHelpers';
import { useNavigate } from 'react-router-dom';

const HomeUser: React.FC = () => {
  // Loading
  const [isLoading, setIsLoading] = useState(false);
  const [faqUser, setTopicUser] = useState<any[]>([]);
  const navigate = useNavigate();

  // GET all topic user data
  const fetchFaqUser = async () => {
    setIsLoading(true);

    try {
      const responseData = await getTopicUser();
      setTopicUser(responseData.data);
    } catch (error: any) {
      console.error('Error fetch all topic user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqUser();
    const accessToken = TokenHelperUser();
    if (!accessToken) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )}
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
      <HomeUserCard data={faqUser} />
    </>
  );
};

export default HomeUser;
