// Import Library And
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// Import Component Component
import CancelButton from '../../../components/buttons/CancelButton';
import { colCellsWithoutTopic } from '../../../assets/data/FaqAdminData';
// Import API's
import { getDetailTopicAdmin } from '../../../api/admin/TopicAdminAPI';

import { DropdownIcon } from '../../../assets/icons/Icon';
import TabelBody from '../../../components/tabels/TabelBody';

interface TopicData {
  id: number;
  name: string;
  is_status: number;
  description: string;
  updated_at: string;
  user: {
    name: string;
  };
  questions: {
    id: number;
    user_id: number;
    question: string;
    slug: string;
    answer: string;
    is_status: number;
    created_at: string;
    updated_at: string;
    pivot: {
      topic_id: number;
      question_id: number;
      created_at: string;
      updated_at: string;
    };
  }[];
}

function formatDateTime(dateTimeString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    timeZone: 'Asia/Makassar',
  };

  const dateTime = new Date(dateTimeString);
  return dateTime.toLocaleString('id-ID', options);
}

const DetailTopicAdmin = () => {
  const { TopicSlug } = useParams();

  const [topicData, setTopicData] = useState<TopicData>({} as TopicData);
  const [isLoading, setIsLoading] = useState(false);

  // State variables for dropdown visibility
  const [showInformation, setShowInformation] = useState(true);
  const [showQuestion, setShowQuestion] = useState(true);

  const handleInformationDropdown = () => {
    setShowInformation(!showInformation);
  };

  const handleAnswerDropdown = () => {
    setShowQuestion(!showQuestion);
  };

  // Checkbox State
  const [leftActiveCheckbox, setLeftActiveCheckbox] = useState(true);

  const navigate = useNavigate();

  //* LOCAL STORAGE SECTION
  const saveDataToLocalStorage = (data: any) => {
    localStorage.setItem('topicAdminDetailData', JSON.stringify(data));
  };

  ///* NAVBAR SECTION
  // Handler Cancel Navbar Button
  const cancelHandler = async () => {
    localStorage.removeItem('topicAdminDetailData');

    navigate('/admin/topic');
  };
  const editNavigateHandler = async () => {
    localStorage.removeItem('topicAdminDetailData');

    navigate(`/admin/topic/edit/${TopicSlug}`);
  };

  //* USE EFFECT SECTION
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getDetailTopicAdmin(TopicSlug);
        const topicData = response.data[0];
        console.log(topicData);
        setTopicData(topicData);
        // Set the topic name to state

        // Update other fields accordingly
        setLeftActiveCheckbox(topicData.is_status === 1);

        // Set the localStorage data
        const newData = {
          id: topicData.id,
          question: topicData.question,
          is_status: topicData.is_status,
          answer: topicData.answer,
        };
        saveDataToLocalStorage(newData);
      } catch (error) {
        console.error('Error fetching topic details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch data only if the component is mounted
    let isMounted = true;
    if (isMounted) {
      fetchData();
    }

    // Cleanup function to set isMounted to false when the component is unmounted
    return () => {
      isMounted = false;
    };
  }, [TopicSlug]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )}
      <ToastContainer className="top-20" />
      {/* Header Design  */}
      <header className="flex items-center justify-between p-4 shadow-lg sm:p-5 ">
        <h1 className="p-2 text-base font-medium border-b-2 sm:text-lg md:text-xl lg:text-[22px] border-primary">
          Detail Topic
        </h1>
        <div className="hidden text-xs font-medium lg:flex md:flex lg:text-sm">
          <CancelButton onClick={cancelHandler} title="BACK" />
          <button
            aria-label="Edit"
            className="px-1 py-2 mr-2 duration-300 rounded-md lg:text-lg  lg:px-4 lg:py-2 lg:mr-4 text-white hover:text-black hover:bg-slate-400  bg-primary lg:hover:scale-[1.03]"
            onClick={editNavigateHandler}
          >
            EDIT
          </button>
        </div>
      </header>

      <div className="flex flex-col m-4">
        {/* Left Card Design */}
        <div className="w-full mb-4 bg-gray-100 shadow-allSideLow rounded-xl sm:mb-0">
          <div className="">
            <div
              className={`flex justify-between border-gray bg-slate-300 rounded-t-md ${
                showInformation ? '' : 'rounded-b-md'
              } transition-all duration-300 ease-in-out`}
            >
              <h1 className="py-4 pl-4  sm:text-base lg:text-[18px] ">
                INFORMATION
              </h1>

              <div
                className="flex items-center justify-center mr-4"
                onClick={handleInformationDropdown}
              >
                <DropdownIcon />
              </div>
            </div>
            {showInformation && (
              <div className="p-4">
                <div className="">
                  <div className="block w-full py-2  text-[22px] font-bold bg-transparent ">
                    {topicData?.name}
                  </div>
                </div>

                <div className="my-4">
                  Description: {topicData?.description}
                </div>
                <div className="my-4">Made By: {topicData?.user?.name}</div>
                <div className="my-4">
                  Last Update: {formatDateTime(topicData?.updated_at)}
                </div>

                <p className="my-4 text-base">
                  {' '}
                  Active:{' '}
                  <span className="ml-3 text-base">
                    {leftActiveCheckbox ? 'Yes' : 'No'}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Card Design */}
        <div className="w-full mt-10 overflow-auto rounded-md shadow-2xl">
          <div className="flex justify-between transition-all duration-300 ease-in-out border-gray bg-slate-300 rounded-t-md">
            <h1 className="py-4 pl-4  sm:text-base lg:text-[18px] ">ANSWER</h1>
            <div
              className="flex items-center justify-center mr-4"
              onClick={handleAnswerDropdown}
            >
              <DropdownIcon />
            </div>
          </div>
          {showQuestion && (
            <TabelBody
              colCells={colCellsWithoutTopic}
              data={topicData.questions}
            />
          )}
        </div>
      </div>

      <div className="flex justify-end mx-4 my-3 text-xs font-medium md:hidden lg:text-sm">
        <CancelButton onClick={cancelHandler} />
        <button
          aria-label="Edit"
          className="px-1 py-2 mr-2 duration-300  rounded-md lg:text-lg  lg:px-4 lg:py-2 lg:mr-4 hover:bg-stone-300 text-white hover:text-black bg-primary lg:hover:scale-[1.03]"
          onClick={editNavigateHandler}
        >
          Edit
        </button>
      </div>
    </>
  );
};

export default DetailTopicAdmin;
