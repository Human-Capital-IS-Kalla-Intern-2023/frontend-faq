// Import Library And
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
// Import Component Component
import CancelButton from '../../../components/buttons/CancelButton';

// Import API's
import { getDetailFaqAdmin } from '../../../api/admin/FaqAdminAPI';

import { DropdownIcon } from '../../../assets/icons/Icon';

const DetailFaqAdmin = () => {
  const [faqAdminNameValue, setFaqAdminNameValue] = useState('');

  const [topicNames, setTopicNames] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // State variables for dropdown visibility
  const [showInformation, setShowInformation] = useState(true);
  const [showAnswer, setShowAnswer] = useState(true);

  const handleInformationDropdown = () => {
    setShowInformation(!showInformation);
  };

  const handleAnswerDropdown = () => {
    setShowAnswer(!showAnswer);
  };

  const [blogContent, setBlogContent] = useState('');

  const { QuestionSlug } = useParams();

  // Checkbox State
  const [leftActiveCheckbox, setLeftActiveCheckbox] = useState(true);

  const navigate = useNavigate();

  //* LOCAL STORAGE SECTION
  const saveDataToLocalStorage = (data: any) => {
    localStorage.setItem('faqAdminDetailData', JSON.stringify(data));
  };

  ///* NAVBAR SECTION
  // Handler Cancel Navbar Button
  const cancelHandler = async () => {
    localStorage.removeItem('faqAdminDetailData');

    navigate('/admin/faq');
  };
  const editNavigateHandler = async () => {
    localStorage.removeItem('faqAdminDetailData');

    navigate(`/admin/faq/edit/${QuestionSlug}`);
  };

  //* USE EFFECT SECTION
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getDetailFaqAdmin(QuestionSlug);
        const faqData = response.data;

        // Get the names of topics from faqData
        // const topicNames = faqData.topics
        //   .map((topic: any) => topic.name)
        //   .join(', ');

        // Set the topic name to state
        setTopicNames(faqData.topics);

        // Update other fields accordingly
        setFaqAdminNameValue(faqData.question);
        setLeftActiveCheckbox(faqData.is_status === 1);
        setBlogContent(faqData.answer);

        // Set the localStorage data
        const newData = {
          id: faqData.id,
          question: faqData.question,
          is_status: faqData.is_status,
          answer: faqData.answer,
        };
        saveDataToLocalStorage(newData);
      } catch (error) {
        console.error('Error fetching faq details:', error);
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
  }, [QuestionSlug]);

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
          Detail Frequently Asked Questions
        </h1>
        <div className="hidden text-xs font-medium lg:flex md:flex lg:text-sm">
          <CancelButton onClick={cancelHandler} title="BACK" />
          <button
            aria-label="Edit"
            className="px-1 py-2 mr-2 duration-300 rounded-md lg:text-lg  lg:px-4 lg:py-2 lg:mr-4 bg-slate-400 hover:text-white hover:bg-primary lg:hover:scale-[1.03]"
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
              <h1 className="py-4 pl-4 shadow-lg sm:text-base lg:text-[18px] ">
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
                  <div className="block w-full py-2 mt-1 text-[22px] bg-transparent ">
                    {faqAdminNameValue}
                  </div>
                </div>
                <div className="block mt-3 text-base font-medium">
                  Topic:
                  {topicNames.map((topic) => (
                    <span
                      key={topic.id}
                      className="px-3 py-[5px] ml-2 text-sm text-white capitalize rounded-full bg-primary"
                    >
                      {topic.name}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-base">
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
            <h1 className="py-4 pl-4 shadow-lg sm:text-base lg:text-[18px] ">
              ANSWER
            </h1>
            <div
              className="flex items-center justify-center mr-4"
              onClick={handleAnswerDropdown}
            >
              <DropdownIcon />
            </div>
          </div>
          {showAnswer && (
            <>
              <ReactQuill
                theme="snow"
                readOnly={true}
                value={blogContent}
                modules={{ toolbar: false }}
              />
            </>
          )}
        </div>
      </div>

      <div className="flex justify-end mx-4 my-3 text-xs font-medium md:hidden lg:text-sm">
        <CancelButton onClick={cancelHandler} />
        <button
          aria-label="Edit"
          className="px-1 py-2 mr-2 duration-300  rounded-md lg:text-lg text-pureBlack lg:px-4 lg:py-2 lg:mr-4 bg-stone-300 hover:text-pureBlack hover:bg-slate-400 lg:hover:scale-[1.03]"
          onClick={editNavigateHandler}
        >
          Edit
        </button>
      </div>
    </>
  );
};

export default DetailFaqAdmin;
