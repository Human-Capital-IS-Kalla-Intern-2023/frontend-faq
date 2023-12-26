import ReactLoading from 'react-loading';
import { useEffect, useState } from 'react';
import { getTopicUser } from '../../api/user/FaqUserAPI';
import { TokenHelperUser } from '../../helpers/TokenHelpers';
import { useNavigate } from 'react-router-dom';
import HeaderHome from '../../components/headers/HeaderHome';
import SearchHomeCard from '../../components/cards/SearchHomeCard';
import HomeTopicCard from '../../components/cards/HomeTopicCard';

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

      <HeaderHome />
      <section className="overflow-y-auto antialiased lg:py-4 lg:mx-16 sm:py-1 overlay">
        <SearchHomeCard />
        <HomeTopicCard data={faqUser} />
      </section>
    </>
  );
};

export default HomeUser;
