import React from 'react';
import { SearchIcon } from '../../assets/icons/Icon';
import { Link, useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { TruncateText } from '../../helpers/TruncateText';
import IconRenderer from '../../helpers/IconRenders';
interface Topic {
  id: number;
  slug: string;
  name: string;
  description: string;
  image: string;
  icon: string | null;
  questions: string;
}

interface HomeUserCardProps {
  data?: Topic[];
}

const HomeUserCard: React.FC<HomeUserCardProps> = ({ data }) => {
  const [searchInput, setSearchInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const TOPIC_STORAGE_URL = import.meta.env.VITE_TOPIC_STORAGE_URL;

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

  return (
    <section className="overflow-y-auto antialiased lg:py-4 lg:mx-16 sm:py-1 overlay">
      <div className="w-full px-4 pt-2 lg:px-6 lg:pt-3 md:w-1/2 ">
        <h1 className="lg:text-2xl font-[600] mb-3 mt-3 lg:mt-10">
          Apa yang bisa kami bantu?
        </h1>
        <form className="flex items-center" onSubmit={handleSearch}>
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative flex items-center w-full">
            <input
              type="text"
              className="block w-full px-3 py-3 pr-4 text-sm text-black rounded-full cursor-pointer lg:py-4 placeholder-gray focus:outline-none focus:placeholder-black bg-slate-100 md:rounded-xl pl-14 lg:text-md"
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
              <SearchIcon className="w-[28px] h-[23px] lg:w-[30px] lg:h-[25px] text-gray cursor-pointer " />
            </button>
            {/* {showDropdown && (
              <div className="absolute top-14 w-full h-[425px]  overflow-y-auto bg-white  rounded-md shadow-lg cursor-pointer">
                {data?.map((topic: any) => (
                  <div
                    key={topic.id}
                    className="flex items-center p-4"
                    onClick={() => handleDropdownItemClick(topic.slug)}
                  >
                    <IconRenderer value={topic.icon} className="w-7 h-7" />

                    <div className="pl-3">{topic.name}</div>
                  </div>
                ))}
              </div>
            )} */}
          </div>
        </form>
      </div>
      <h2 className="w-full px-4 mt-6 lg:px-6 lg:pt-3 text-md lg:text-lg lg:mt-9">
        Topik Populer
      </h2>
      <div className="grid items-center justify-center w-full min-h-full grid-cols-2 gap-4 px-3 py-3 md:grid-cols-3 lg:grid-cols-4 md:gap-10 md:px-8 md:py-4 ">
        {data?.map((topic) => (
          <Link
            to={`/faq/question/${topic.slug}`}
            className="w-full"
            key={topic.slug}
          >
            <div className=" md:px-6 px-3 py-10 md:pt-6 pt-3 overflow-hidden rounded-lg shadow-lg w-70 md:h-72 w-42 h-36 bg-[#F0F2F5] hover:bg-[#E8EAED]">
              <div className="flex items-center justify-center p-1 md:p-3">
                {topic.image && (
                  <img
                    src={`${TOPIC_STORAGE_URL}/${topic.image}`}
                    alt={topic.name}
                    loading="eager"
                    className="w-10 h-10 md:w-20 md:h-20 "
                  />
                )}
                {!topic.image && topic.icon && (
                  <>
                    <IconRenderer
                      value={topic.icon}
                      className="w-10 h-10 md:w-20 md:h-20"
                    />
                  </>
                )}
              </div>
              <div className="flex flex-col items-start justify-center mt-3">
                <div className="pb-2 text-sm font-medium text-black break-all whitespace-normal lg:text-[17px]">
                  {topic.name}
                </div>
                <div className="overflow-hidden text-xs lg:text-[15px] text-gray md:block hidden">
                  {TruncateText(topic.description, 60)}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeUserCard;
