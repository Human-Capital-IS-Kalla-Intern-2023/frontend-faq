import QuestionCard from '../../components/faq/QuestionCard';
import ReactLoading from 'react-loading';
import { useEffect, useState } from 'react';
import { getListQuestionByTopic } from '../../api/user/FaqUserAPI';
import { useParams } from 'react-router-dom';
import { TopicDataType } from '../../state/types/TopicType';

const Question: React.FC = () => {
  const { TopicSlug } = useParams();

  // Loading
  const [isLoading, setIsLoading] = useState(false);
  const [listFaq, setListFaq] = useState<TopicDataType | undefined>(undefined);

  // GET all topic user data
  const fetchListFaqByTopic = async (TopicSlug: any) => {
    setIsLoading(true);

    try {
      const responseData = await getListQuestionByTopic(TopicSlug);
      setListFaq(responseData.data);
    } catch (error: any) {
      console.error('Error fetch all topic user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchListFaqByTopic(TopicSlug);
  }, [TopicSlug]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )}
      <QuestionCard data={listFaq} />
    </>
  );
};

export default Question;
