import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { SearchIcon, CloseButtonIcon } from '../../assets/icons/Icon';
import { faqLike, faqDislike } from '../../api/user/FaqUserAPI';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

interface DetailFaqCardProps {
  isFeatch?: boolean;
  data?: any;
}

const DetailFaqCard: React.FC<DetailFaqCardProps> = ({ isFeatch, data }) => {
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [closedQuestions, setClosedQuestions] = useState<boolean>(false);
  const [feedbackGiven, setFeedbackGiven] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check local storage for feedback status for the current slug
    const feedbackStatus = localStorage.getItem(`feedback_${data?.slug}`);
    setClosedQuestions(false);
    if (feedbackStatus) {
      setFeedbackGiven(true);
      setClosedQuestions(true);
    } else {
      setFeedbackGiven(false);
    }
  }, [data?.slug]);

  const handleCloseButtonClick = () => {
    setClosedQuestions(true);
  };

  const handlerLike = async (TopicSlug: any, QuestionSlug: any) => {
    try {
      const responseData = await faqLike(TopicSlug, QuestionSlug);
      if (responseData) {
        setFeedbackGiven(true);

        // Store feedback status in local storage
        localStorage.setItem(`feedback_${QuestionSlug}`, 'given');

        setTimeout(() => {
          handleCloseButtonClick();
        }, 4000);
      }
    } catch (error: any) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDislike = async (TopicSlug: any, QuestionSlug: any) => {
    try {
      const responseData = await faqDislike(TopicSlug, QuestionSlug);
      if (responseData) {
        setFeedbackGiven(true);

        // Store feedback status in local storage
        localStorage.setItem(`feedback_${QuestionSlug}`, 'given');

        setTimeout(() => {
          handleCloseButtonClick();
        }, 4000);
      }
    } catch (error: any) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (searchInput) {
      navigate(`/faq/search?title=${searchInput}`);
    } else {
      navigate(`/faq/search?title=`);
    }
  };

  return (
    <section className="antialiased overlay">
      <div className="w-full ">
        <div className="md:flex block justify-between bg-white shadow-[0_3px_10px_-3px_rgb(0,0,0,0.1)]">
          <Link to={'/home'}>
            <h1 className="md:flex block p-[14px] justify-center items-center md:text-xl text-base">
              Pusat Bantuan
            </h1>
          </Link>
          <div className="md:flex hidden flex-row md:justify-end md:mr-10 lg:mr-0 w-full p-[14px] md:w-1/2">
            <form className="flex items-center" onSubmit={handleSearch}>
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative flex items-center w-full">
                <input
                  type="text"
                  className="md:block hidden w-full px-2 py-2 lg:pr-4 text-black rounded-full cursor-pointer placeholder-gray focus:outline-none focus:placeholder-black bg-[#F0F2F5] pl-14 text-sm"
                  placeholder="Cari artikel bantuan..."
                  value={searchInput}
                  onChange={handleSearchInputChange}
                />
                <button
                  className="absolute left-0 items-center px-4 text-black duration-300 rounded-none md:flex "
                  onClick={handleSearch}
                  type="submit"
                  aria-label="Search Data"
                >
                  {isLoading && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                      <ReactLoading
                        type="spin"
                        color="green"
                        height={50}
                        width={50}
                      />
                    </div>
                  )}
                  <SearchIcon className="w-[25px] h-[20px] text-gray cursor-pointer hover:scale-[1.2] duration-300 " />
                </button>
              </div>
            </form>
          </div>
          <div className="block md:hidden">
            <Link to={'/faq/search'}>
              <div className="absolute items-center px-4 text-black duration-300 rounded-none top-4 right-8 md:flex ">
                <SearchIcon className="w-[25px] h-[20px] text-gray cursor-pointer hover:scale-[1.2] duration-300  " />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {!isFeatch ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      ) : data ? (
        <>
          <div className="w-[95%] pt-6 lg:pt-10 pl-6 pr-2 lg:pl-16 ">
            <div className="items-start content-start justify-start">
              <div className="flex items-center">
                <Link
                  to={`/home`}
                  className="text-[13px] hover:underline text-link"
                >
                  Home
                </Link>
                <span className="mx-2 text-slate-600">{' > '}</span>
                <Link
                  to={`/faq/question/${data.topics[0].slug}`}
                  className="text-[13px] hover:underline text-link"
                >
                  {data.topics[0].name}
                </Link>
              </div>
              <div className="w-full pt-2 overflow-x-auto">
                <div className="items-start content-start justify-start">
                  <div className="border-b border-slate-300">
                    <div className="py-2 pt-3 text-lg font-semibold lg:pt-5 lg:text-2xl lg:py-3">
                      {data.question}
                    </div>
                    <div className="text-[16px]  py-6 ">
                      <div className="">
                        <ReactQuill
                          theme="snow"
                          readOnly={true}
                          value={data?.answer}
                          modules={{ toolbar: false }}
                          className="custom-react-quill"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed right-0 p-1 bottom-1">
              {!closedQuestions && (
                <div className="flex rounded-md bg-[#F0F2F5] pt-2 py-1 lg:py-2 px-1 lg:px-3">
                  <div className={`flex py-2 lg:py-4 px-2 lg:px-3 rounded-md`}>
                    <div className="">
                      {feedbackGiven ? (
                        <div className="flex items-center justify-center text-center ">
                          <div className="pl-1 pr-2 text-sm ">
                            Terima kasih atas feedback Anda!
                          </div>
                          <button
                            className="flex justify-end pl-4 "
                            onClick={() => handleCloseButtonClick()}
                          >
                            <CloseButtonIcon className="w-8 h-[18px] hover:bg-slate-200 hover:text-red-600  rounded-full cursor-pointer" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center pb-1 text-center lg:pb-3">
                          <div className="pl-1 pr-2 text-xs lg:text-sm ">
                            Apakah Ini Membantu?
                          </div>
                          <button
                            className="flex justify-end pl-4 "
                            onClick={() => handleCloseButtonClick()}
                          >
                            <CloseButtonIcon className="w-8 h-[18px] hover:bg-slate-200 hover:text-red-600 rounded-full cursor-pointer" />
                          </button>
                        </div>
                      )}
                      {!feedbackGiven && (
                        <div className="flex justify-between w-full mt-2 space-x-2">
                          <button
                            onClick={() =>
                              handlerLike(data.topics[0].slug, data.slug)
                            }
                            className="w-full text-xs lg:text-sm px-1 lg:px-5 py-2 rounded-md bg-[#E4E6EB] hover:bg-[#D8DADF]"
                          >
                            Like 👍
                          </button>
                          <button
                            onClick={() =>
                              handleDislike(data.topics[0].slug, data.slug)
                            }
                            className="w-full text-xs lg:text-sm px-1 lg:px-5 py-2 rounded-md bg-[#E4E6EB] hover:bg-[#D8DADF]"
                          >
                            Dislike 👎
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-screen text-3xl text-center">
          Data Not Found
        </div>
      )}
    </section>
  );
};

export default DetailFaqCard;
