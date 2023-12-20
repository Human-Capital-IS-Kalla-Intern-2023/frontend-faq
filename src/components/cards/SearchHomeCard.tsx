import React from 'react';
import { SearchIcon } from '../../assets/icons/Icon';
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';

const SearchHomeCard = () => {
  const [searchInput, setSearchInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (searchInput) {
      navigate(`/faq/search?title=${searchInput}`);
    } else {
      navigate(`/faq/search?title=`);
    }
  };

  return (
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
            min={1}
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
            <SearchIcon className="w-[28px] h-[23px] lg:w-[30px] lg:h-[25px] text-gray cursor-pointer hover:scale-[1.2] duration-300 " />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchHomeCard;
