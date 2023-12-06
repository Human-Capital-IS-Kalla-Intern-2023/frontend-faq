import React, { useRef, useState } from 'react';
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
  onSearch?: any;
  data?: Topic[];
}

const HomeUserCard: React.FC<HomeUserCardProps> = ({ onSearch, data }) => {
  const [searchInput, setSearchInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const TOPIC_STORAGE_URL = import.meta.env.VITE_TOPIC_STORAGE_URL;

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    setShowDropdown(true);
  };
  const handleDropdownItemClick = (slug: string) => {
    navigate(`/faq/question/${slug}`);
    setShowDropdown(false);
  };

  const handleClickInput = () => {
    setShowDropdown(true);
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
        navigate('/help/list?search={searchInput}');
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
    const handleClickOutside = (e: MouseEvent) => {
      if (searchInputRef.current && e.target instanceof Node) {
        if (!searchInputRef.current.contains(e.target)) {
          setShowDropdown(true);
        }
      }
    };
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
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
              className="block w-full px-3 py-4 pr-4 text-black cursor-pointer placeholder-gray focus:outline-none focus:placeholder-black bg-slate-100 rounded-xl pl-14 text-md"
              placeholder="Cari artikel bantuan..."
              value={searchInput}
              onChange={handleSearchInputChange}
              onClick={handleClickInput}
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
            {showDropdown && (
              <div className="absolute top-14 w-full h-[425px]  overflow-y-auto bg-white  rounded-md shadow-lg cursor-pointer">
                {data?.map((topic: any) => (
                  <div
                    key={topic.id}
                    className="flex items-center p-4"
                    onClick={() => handleDropdownItemClick(topic.slug)}
                  >
                    {/* Adjust the rendering based on your result structure */}
                    <IconRenderer value={topic.icon} className="w-7 h-7" />
                    <div className="pl-3">{topic.name}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </form>
      </div>
      <h2 className="w-full px-6 pt-3 text-lg mt-9">Topik Populer</h2>
      <div className="grid items-center justify-center w-full min-h-full grid-cols-4 gap-10 px-8 py-4 ">
        {data?.map((topic) => (
          <Link
            to={`/faq/question/${topic.slug}`}
            className="w-full"
            key={topic.slug}
          >
            <div className=" px-6 py-10 pt-6 overflow-hidden rounded-lg shadow-lg w-70 h-72 bg-[#F0F2F5] hover:bg-[#E8EAED]">
              <div className="flex items-center justify-center p-3">
                {topic.image && (
                  <img
                    src={`${TOPIC_STORAGE_URL}/${topic.image}`}
                    alt={topic.name}
                    loading="eager"
                    className="w-20 h-20"
                  />
                )}
                {!topic.image && topic.icon && (
                  <>
                    <IconRenderer value={topic.icon} className="w-20 h-20" />
                  </>
                )}
              </div>
              <div className="flex flex-col items-start justify-center mt-3">
                <div className="pb-2 text-sm font-medium text-black break-all whitespace-normal lg:text-[17px]">
                  {topic.name}
                </div>
                <div className="overflow-hidden text-xs lg:text-[15px] text-gray">
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
