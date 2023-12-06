import React, { useRef, useState } from 'react';
import { SearchIcon } from '../../assets/icons/Icon';
import { Link, useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { TruncateText } from '../../helpers/TruncateText';

import Question from '../../pages/user/Question';
import { TopicProps } from '../../state/types/TopicType';
import IconRenderer from '../../helpers/IconRenders';
import logoKalla from '../../assets/img/logo/singel-logo-kalla.webp';

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

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    setShowDropdown(true);
  };
  const handleDropdownItemClick = (slug: string) => {
    navigate(`/faq/question/detail/${slug}`);
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
    <section className="lg:py-4 lg:mx-16 antialiased sm:py-1 overlay overflow-y-auto">
      <div className="w-full px-4 lg:px-6 pt-2 lg:pt-3 md:w-1/2 ">
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
              className="block w-full px-3 py-3 lg:py-4 pr-4 text-black cursor-pointer placeholder-gray focus:outline-none focus:placeholder-black bg-slate-100 rounded-xl pl-14 text-sm lg:text-md"
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
              <SearchIcon className="w-[28px] h-[23px] lg:w-[30px] lg:h-[25px] text-gray cursor-pointer " />
            </button>
            {showDropdown && (
              <div className="absolute top-14 w-full h-[425px]  overflow-y-auto bg-white border rounded-md shadow-lg cursor-pointer">
                {data?.map((topic) => (
                  <div
                    key={topic.id}
                    className="p-4 flex items-center"
                    onClick={() => handleDropdownItemClick(topic.slug)}
                  >
                    <img className="w-8 h-8 lg:w-10 lg:h-10 ">{topic.icon}</img>
                    <div className="pl-3">{topic.name}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </form>
      </div>
      <h2 className=" w-full px-4 lg:px-6 lg:pt-3 text-md lg:text-lg mt-6 lg:mt-9">
        Topik Populer
      </h2>
      <div className="grid items-center justify-center w-full min-h-full grid-cols-2 lg:grid-cols-4 gap-4 p-4 pt-3 lg:pt-4 gap-y-4">
        {data?.map((topic) => (
          <Link
            to={`/faq/question/${topic.slug}`}
            className="w-full"
            key={topic.slug}
          >
            <div className="p-2 px-4 lg:px-6 py-4 lg:py-10 pt-6 overflow-hidden rounded-lg shadow-lg w-40 h-40 lg:w-64 lg:h-60 bg-[#F0F2F5] hover:bg-[#E8EAED]">
              <div className="flex items-center justify-center p-3">
                {topic.image && (
                  <img
                    src={logoKalla}
                    alt={topic.name}
                    className="lg:w-16 lg:h-10 w-12 h-8"
                    loading="eager"
                  />
                )}
                {!topic.image && topic.icon && (
                  <>
                    <IconRenderer
                      value={topic.icon}
                      className="lg:w-16 lg:h-10 w-12 h-8"
                    />
                  </>
                  // <img
                  //   src={topic.icon}
                  //   alt={topic.name}
                  //   className="w-8 h-8 lg:w-10 lg:h-10"
                  //   loading="eager"
                  // />
                )}
              </div>
              <div className="flex flex-col items-start justify-center mt-3">
                <div className="pb-2 text-sm font-medium text-black break-all whitespace-normal lg:text-base">
                  {topic.name}
                </div>
                <div className="overflow-hidden text-xs lg:text-[13px] hidden lg:block text-gray">
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
