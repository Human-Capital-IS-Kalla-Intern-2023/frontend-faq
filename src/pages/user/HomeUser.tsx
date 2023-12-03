import ReactLoading from 'react-loading';
import { useEffect, useState } from 'react';
import HomeUserCard from '../../components/user/HomeUserCard';
import logoKalla from '../../assets/img/logo/singel-logo-kalla_52x48.webp';

import { getTopicUser } from '../../api/user/FaqUserAPI';

const HomeUser: React.FC = () => {
  // Loading
  const [isLoading, setIsLoading] = useState(false);
  const [faqUser, setTopicUser] = useState<any[]>([]);

  // GET all topic user data
  const fetchFaqAdmin = async () => {
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
    fetchFaqAdmin();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )}
      <div className="flex py-3 shadow-lg">
        <div className="flex items-center justify-center text-center">
          <img
            src={logoKalla}
            className="h-12 ml-5 rounded-full w-[52px]"
            width={52}
            height={48}
            alt="logo kalla"
            loading="lazy"
          />
        </div>
        <h1 className="flex p-[14px] justify-center items-center text-xl">
          Pusat Bantuan
        </h1>
      </div>
      <HomeUserCard data={faqUser} />
    </>
  );
};

export default HomeUser;
