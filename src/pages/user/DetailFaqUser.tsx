import { useState, useEffect } from 'react';
// import ReactLoading from 'react-loading';

import DetailFaqCard from '../../components/detail/DetailFaqCard';
import { useParams } from 'react-router-dom';
import { getDetailQuestion } from '../../api/user/FaqUserAPI';

const DetailFaqUser: React.FC = () => {
  const { TopicSlug, QuestionDetailSlug } = useParams();
  // const [isLoading, setIsLoading] = useState(false);

  const [detailFaq, setDetailFaq] = useState<any | undefined>(undefined);

  // GET all topic user data
  const fetchListFaqByTopic = async (
    TopicSlug: any,
    QuestionDetailSlug: any
  ) => {
    // setIsLoading(true);

    try {
      const responseData = await getDetailQuestion(
        TopicSlug,
        QuestionDetailSlug
      );
      setDetailFaq(responseData.data[0]);
    } catch (error: any) {
      console.error('Error fetch all topic user:', error);
    } finally {
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchListFaqByTopic(TopicSlug, QuestionDetailSlug);
  }, [QuestionDetailSlug, TopicSlug]);

  return (
    <>
      {/* {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )} */}
      <DetailFaqCard data={detailFaq} />
    </>
  );
};

export default DetailFaqUser;
