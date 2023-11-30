import React from 'react';
import { SearchIcon } from '../../assets/icons/Icon';
import { Link, useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { TruncateText } from '../../helpers/TruncateText';

interface Topic {
  id: number;
  slug: string;
  name: string;
  description: string;
  image: string;
  icon: string | null;
}

interface HomeUserCardProps {
  onSearch?: any;
  data?: Topic[];
}

const HomeUserCard: React.FC<HomeUserCardProps> = ({ onSearch, data }) => {
  const [searchInput, setSearchInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

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

  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get('search');
    if (searchValue) {
      onSearch(searchValue);
      setSearchInput(searchValue);
    }
  }, [onSearch]);

  return (
    <section className="py-4 mx-16 antialiased sm:py-2 overlay">
      <div className="w-full px-6 pt-3 md:w-1/2">
        <h1 className="text-2xl font-[600] mb-3 mt-10">
          Apa yang bisa kami bantu?
        </h1>
        <form className="flex items-center" onSubmit={handleSearch}>
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative flex items-center w-full">
            <input
              type="text"
              className="block w-full px-3 py-4 pr-4 text-black cursor-pointer placeholder-gray focus:outline-none focus:placeholder-pureBlack bg-slate-100 rounded-xl pl-14 text-md"
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
              <SearchIcon className="w-[30px] h-[25px] text-gray cursor-pointer " />
            </button>
          </div>
        </form>
      </div>
      <h2 className="w-full px-6 pt-3 text-lg mt-9">Topik Populer</h2>
      <div className="grid items-center justify-center w-full min-h-full grid-cols-4 gap-4 p-6 pt-4 gap-y-4">
        {data?.map((topic) => (
          <Link
            to={`/faq/question/${topic.slug}`}
            className="w-full"
            key={topic.slug}
          >
            <div className="p-2 px-6 py-10 pt-4 overflow-hidden rounded-lg shadow-lg w-60 h-60 bg-[#F0F2F5] hover:bg-[#E8EAED]">
              <div className="flex items-center justify-center p-3">
                {topic.image && (
                  <img
                    src={topic.image}
                    alt={topic.name}
                    className="w-8 h-8 lg:w-10 lg:h-10"
                  />
                )}
                {!topic.image && topic.icon && (
                  <img
                    src={topic.icon}
                    alt={topic.name}
                    className="w-8 h-8 lg:w-10 lg:h-10"
                  />
                )}
              </div>
              <div className="flex flex-col items-start justify-center mt-3">
                <div className="pb-2 text-sm font-medium break-all whitespace-normal text-pureBlack lg:text-base">
                  {topic.name}
                </div>
                <div className="overflow-hidden text-xs lg:text-[13px] text-gray">
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
