import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { SearchIcon, DropdownIcon } from '../../assets/icons/Icon';
// import ReactHtmlParser from 'react-html-parser';

import { TopicDataType } from '../../state/types/TopicType';

interface QuestionCardProps {
  onSearch?: any;
  data?: TopicDataType;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ onSearch, data }) => {
  console.log(data);
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // const handleLike = () => {
  //   setLikes(likes + 1);
  // };

  // const handleDislike = () => {
  //   setDislikes(dislikes + 1);
  // };

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
        <div className="flex justify-between bg-white shadow-[0_3px_10px_-3px_rgb(0,0,0,0.1)]">
          <h1 className="flex p-[14px] font-sans text-2xl font-semibold">
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
                  className="block w-full px-2 py-2 pr-4 text-black rounded-full cursor-pointer placeholder-gray focus:outline-none focus:placeholder-pureBlack bg-[#F0F2F5] pl-14 text-sm"
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
        </div>
      </div>
      <div className="w-[95%] pt-10 pl-16 overflow-x-auto ">
        <h1 className="px-6 text-2xl font-bold mb-5">{data?.name}</h1>
        <div className="items-start content-start justify-start ">
          <div className="grid mx-auto divide-y divide-neutral-200">
            <div className="px-6">
              {data?.questions.map((question) => (
                <div
                  key={question.id}
                  className="py-5 border-b border-slate-300"
                >
                  <details className="group">
                    <summary
                      className={`flex items-center justify-between hover:text-green-700 font-medium list-none cursor-pointer ${
                        isSelected ? 'text-green-700 font-semibold' : ''
                      }`}
                      onClick={handleClick}
                    >
                      <span className="text-[17px]">{question.question}</span>
                      <span className="transition group-open:rotate-180">
                        <DropdownIcon />
                      </span>
                    </summary>
                    <p
                      className="mt-3 text-neutral-600 group-open:animate-fadeIn"
                      dangerouslySetInnerHTML={{ __html: question.answer }}
                    ></p>
                    <div className="py-3">
                      <div className="flex justify-between rounded-md bg-slate-200 pt-2 py-2 px-3">
                        <div className="flex py-4 bg-white shadow-lg px-3 rounded-md">
                          <div className="">
                            <p className="px-2 text-sm pb-4">
                              Apakah Artikel Ini Membantu Anda?
                            </p>
                            <div className="flex px-8 gap-4">
                              <button className="text-sm px-5 py-2 rounded-md bg-slate-200">
                                Like 👍
                              </button>
                              <button className="text-sm px-5 py-2 rounded-md bg-slate-200">
                                Dislike 👎
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className=" px-1 py-8">
                          <div className="flex">
                            <button className="px-3 py-2 text-white rounded-full bg-primary group-open:animate-fadeIn">
                              Lihat Penuh
                            </button>{' '}
                          </div>
                        </div>
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
