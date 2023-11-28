import ReactLoading from 'react-loading';
import { useEffect, useState } from 'react';
import HomeUserCard from '../../components/user/HomeUserCard';
import logoKalla from '../../../public/logo-kalla.webp';

import { getTopicUser } from '../../api/user/TopicUserAPI';

const HomeUser: React.FC = () => {
  // Loading
  const [isLoading, setIsLoading] = useState(false);
  const [faqUser, setTopicUser] = useState<any[]>([]);

  // GET all topic user data
  const fetchFaqAdmin = async () => {
    setIsLoading(true);

    try {
      const reponseData = await getTopicUser();
      setTopicUser(reponseData.data);
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
          <img src={logoKalla} className="h-12 ml-5 rounded-full w-25" alt="" />
        </div>
        <h1 className="px-2 py-3 font-sans text-2xl font-semibold">
          Pusat Bantuan
        </h1>
      </div>
      <HomeUserCard data={faqUser} />
    </>
  );
};

export default HomeUser;
