import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import 'react-quill/dist/quill.snow.css';

import ReactQuill from 'react-quill';
import {
  SearchIcon,
  DropdownIcon,
  CloseButtonIcon,
} from '../../assets/icons/Icon';
import { TopicProps } from '../../state/types/TopicType';
import { faqLike, faqDislike } from '../../api/user/FaqUserAPI';

interface QuestionCardProps {
  onSearch?: any;
  data?: TopicProps;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ onSearch, data }) => {
  const [selectedQuestionIds, setSelectedQuestionIds] = useState<number[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState<string[]>([]);
  const [closedQuestions, setClosedQuestions] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleClick = (questionId: number) => {
    setSelectedQuestionIds((prevIds) => {
      if (prevIds.includes(questionId)) {
        return prevIds.filter((id) => id !== questionId);
      } else {
        return [...prevIds, questionId];
      }
    });
  };

  const handleCloseButtonClick = (questionSlug: string) => {
    setClosedQuestions((prevClosedQuestions) => [
      ...prevClosedQuestions,
      questionSlug,
    ]);
  };

  const handlerLike = async (TopicSlug: any, QuestionSlug: any) => {
    try {
      const responseData = await faqLike(TopicSlug, QuestionSlug);
      if (responseData) {
        setFeedbackGiven((prevFeedback) => [...prevFeedback, QuestionSlug]);

        setTimeout(() => {
          handleCloseButtonClick(QuestionSlug);
        }, 2500);
      }
    } catch (error: any) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDislike = async (TopicSlug: any, QuestionSlug: any) => {
    try {
      const responseData = await faqDislike(TopicSlug, QuestionSlug);
      if (responseData) {
        setFeedbackGiven((prevFeedback) => [...prevFeedback, QuestionSlug]);

        setTimeout(() => {
          handleCloseButtonClick(QuestionSlug);
        }, 2500);
      }
    } catch (error: any) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    if (searchInput) {
      navigate(`/faq?search=${searchInput}`);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get('search');
    if (searchValue) {
      onSearch(searchValue);
      setSearchInput(searchValue);
    }
  }, [onSearch]);

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
                  <SearchIcon className="w-[25px] h-[20px] text-gray cursor-pointer " />
                </button>
              </div>
            </form>
          </div>

          <div className="block md:hidden">
            <Link to={'/faq'}>
              <div className="absolute items-center px-4 text-black duration-300 rounded-none top-4 right-8 md:flex ">
                <SearchIcon className="w-[25px] h-[20px] text-gray cursor-pointer " />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[95%] pt-6 lg:pt-10 lg:pl-16 min-h-[101vh]">
        <div className="items-start content-start justify-start ">
          <div className="grid mx-auto ">
            <div className="px-5 lg:px-7">
              <h1 className="text-xl mx-2 font-bold pb-3  border-b border-[#d1d5db] ">
                {data?.name}
              </h1>
              <p className="mx-2 mt-3 mb-8 text-[15px]">{data?.description}</p>
              {data?.questions.map((question) => (
                <div
                  key={question.id}
                  className={`py-2 shadow-[0_1px_0px_0px_rgba(0,0,0,0.1)] bg-transparent`}
                >
                  <details className="group ">
                    <summary
                      className={`flex items-center justify-between  hover:bg-[#E4E6E9] px-2 font-medium list-none cursor-pointer py-3 rounded-md ${
                        selectedQuestionIds.includes(question.id)
                          ? 'bg-slate-200 '
                          : ''
                      }`}
                      onClick={() => handleClick(question.id)}
                    >
                      <span className="text-base">{question.question}</span>
                      <span className="transition group-open:rotate-180">
                        <DropdownIcon />
                      </span>
                    </summary>
                    <div className="">
                      <ReactQuill
                        theme="snow"
                        readOnly={true}
                        value={question.answer}
                        modules={{ toolbar: false }}
                        className=""
                        style={{ fontSize: '14px', border: 'none' }}
                      />
                    </div>

                    <div className="py-3">
                      <div className="sm:flex block  justify-between rounded-md bg-[#F0F2F5] pt-2 py-2 md:space-x-0 space-x-2 px-3 mr-1">
                        <div
                          className={`flex py-4  px-3 rounded-md ${
                            closedQuestions.includes(question.slug)
                              ? 'bg-transparent '
                              : 'bg-white shadow-lg'
                          }`}
                        >
                          {closedQuestions.includes(question.slug) ? null : (
                            <div className="w-full md:w-fit">
                              {feedbackGiven.includes(question.slug) ? (
                                <div className="flex items-center justify-center text-center ">
                                  <div className="pl-1 pr-2 text-sm ">
                                    Terima kasih atas feedback Anda!
                                  </div>
                                  <button
                                    className="flex justify-end pl-4 "
                                    onClick={() =>
                                      handleCloseButtonClick(question.slug)
                                    }
                                  >
                                    <CloseButtonIcon className="w-8 h-[18px]  hover:bg-slate-200 rounded-full cursor-pointer" />
                                  </button>
                                </div>
                              ) : (
                                <div className="flex items-center justify-between pb-3 text-center md:justify-center">
                                  <div className="pl-1 pr-2 text-sm">
                                    Apakah Ini Membantu?
                                  </div>
                                  <button
                                    className="flex pl-4 "
                                    onClick={() =>
                                      handleCloseButtonClick(question.slug)
                                    }
                                  >
                                    <CloseButtonIcon className="w-8 h-[18px] hover:bg-slate-200 rounded-full cursor-pointer" />
                                  </button>
                                </div>
                              )}
                              {!feedbackGiven.includes(question.slug) && (
                                <div className="flex justify-between w-full mt-2 space-x-2">
                                  <button
                                    onClick={() =>
                                      handlerLike(data?.slug, question?.slug)
                                    }
                                    className="w-full text-sm px-5 py-2 rounded-md bg-[#E4E6EB] hover:bg-[#D8DADF]"
                                  >
                                    Ya 👍
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleDislike(data?.slug, question?.slug)
                                    }
                                    className="text-sm w-full px-5 py-2 rounded-md bg-[#E4E6EB] hover:bg-[#D8DADF]"
                                  >
                                    Tidak 👎
                                  </button>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        <Link
                          to={`/faq/question/${data.slug}/${question.slug}`}
                          className="flex items-end justify-center pb-1"
                        >
                          <div className="hover:bg-gray items-center text-center duration-200 md:py-[7px] md:w-auto w-full py-2 mt-3 text-white md:rounded-full rounded-2xl px-3 bg-primary group-open:animate-fadeIn md:text-[15px] text-sm">
                            Lihat Penuh
                          </div>
                        </Link>
                      </div>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionCard;
