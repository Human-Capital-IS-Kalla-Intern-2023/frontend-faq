import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
// import FooterCard from '../../components/detail/FooterCard';
import { SearchIcon, CloseButtonIcon } from '../../assets/icons/Icon';
import { faqLike, faqDislike } from '../../api/user/FaqUserAPI';
// import { faMusic } from '../../assets/icons/categoriIcon';

interface DetailFaqCardProps {
  onSearch?: any;
  data?: any;
}

const DetailFaqCard: React.FC<DetailFaqCardProps> = ({ onSearch, data }) => {
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState<boolean>(false);
  const [closedQuestions, setClosedQuestions] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCloseButtonClick = () => {
    setClosedQuestions(true);
  };

  const handlerLike = async (TopicSlug: any, QuestionSlug: any) => {
    try {
      const responseData = await faqLike(TopicSlug, QuestionSlug);
      if (responseData) {
        setFeedbackGiven(true);

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

  const handleSearch = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onSearch(searchInput);
    } catch (error) {
      throw false;
    } finally {
      setIsLoading(false);

      if (searchInput) {
        navigate(`?search=${searchInput}`);
      } else {
        navigate('');
      }
    }
  };

  useEffect(() => {
    if (!data) {
      setIsLoading(true);
    }
    if (data) {
      setIsLoading(false);
    }
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get('search');
    if (searchValue) {
      onSearch(searchValue);
      setSearchInput(searchValue);
    }
  }, [data, onSearch]);

  return (
    <section className="antialiased overlay">
      <div className="w-full ">
        <div className="flex justify-between bg-white shadow-[0_3px_10px_-3px_rgb(0,0,0,0.1)]">
          <h1 className="flex p-[14px] justify-center items-center text-xl">
            Pusat Bantuan
          </h1>
          <div className="flex flex-row justify-end w-full p-[14px] md:w-1/2">
            <form className="flex items-center" onSubmit={handleSearch}>
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative flex items-center w-full">
                <input
                  type="text"
                  className="block w-full px-2 py-2 pr-4 text-black rounded-full cursor-pointer placeholder-gray focus:outline-none focus:placeholder-black bg-[#F0F2F5] pl-14 text-sm"
                  placeholder="Cari artikel bantuan..."
                  value={searchInput}
                  onChange={handleSearchInputChange}
                />
                <button
                  className="absolute left-0 flex items-center px-4 text-black duration-300 rounded-none "
                  onClick={handleSearch}
                  type="submit"
                  aria-label="Search Data"
                >
                  <SearchIcon className="w-[25px] h-[20px] text-gray cursor-pointer " />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      ) : data ? (
        <>
          <div className="w-[95%] pt-10 pl-16 ">
            <div className="items-start content-start justify-start">
              <div className="flex items-center">
                <Link
                  to={`/`}
                  className="text-[13px] hover:underline text-link"
                >
                  Home
                </Link>
                <span className="text-slate-600 mx-2">{' > '}</span>
                <Link
                  to={`faq/question/${data.topics[0].name}`}
                  className="text-[13px] hover:underline text-link"
                >
                  {data.topics[0].name}
                </Link>
              </div>
              <div className="w-full pt-2  overflow-x-auto">
                <div className="items-start content-start justify-start">
                  <div className="border-b border-slate-300">
                    <div className="pt-5 text-2xl py-3 font-semibold">
                      {data.question}
                    </div>
                  </div>
                  <div className="text-[16px]  py-6 leading-10">
                    {data?.answer}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-1 right-0 p-2">
            {closedQuestions ? null : (
              <div className="flex rounded-md bg-[#F0F2F5] pt-2 py-2 px-3">
                <div className={`flex py-4  px-3 rounded-md `}>
                  <div className="">
                    {feedbackGiven ? (
                      <div className="flex justify-center items-center text-center ">
                        <div className="pr-2 pl-1 text-sm ">
                          Terima kasih atas feedback Anda!
                        </div>
                        <button
                          className="pl-4 flex justify-end "
                          onClick={() => handleCloseButtonClick()}
                        >
                          <CloseButtonIcon className="w-8 h-[18px] hover:bg-slate-200 rounded-full cursor-pointer" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-center items-center text-center pb-3">
                        <div className="pr-2 pl-1 text-sm ">
                          Apakah Ini Membantu?
                        </div>
                        <button
                          className="pl-4 flex justify-end "
                          onClick={() => handleCloseButtonClick()}
                        >
                          <CloseButtonIcon className="w-8 h-[18px] hover:bg-slate-200 rounded-full cursor-pointer" />
                        </button>
                      </div>
                    )}
                    {!feedbackGiven && (
                      <div className="w-full flex justify-between space-x-2 mt-2">
                        <button
                          onClick={() =>
                            handlerLike(data.topics[0].slug, data.slug)
                          }
                          className="w-full text-sm px-5 py-2 rounded-md bg-[#E4E6EB] hover:bg-[#D8DADF]"
                        >
                          Like 👍
                        </button>
                        <button
                          onClick={() =>
                            handleDislike(data.topics[0].slug, data.slug)
                          }
                          className="text-sm w-full px-5 py-2 rounded-md bg-[#E4E6EB] hover:bg-[#D8DADF]"
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
        </>
      ) : (
        // Show "Data Not Found" if no data
        <div className="flex justify-center items-center text-center text-3xl h-screen">
          Data Not Found
        </div>
      )}
    </section>
  );
};

export default DetailFaqCard;
