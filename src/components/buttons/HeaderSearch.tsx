import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';

import { SearchIcon } from '../../assets/icons/Icon';

const HeaderSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
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
    <form className="flex items-center mr-5" onSubmit={handleSearch}>
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
              <ReactLoading type="spin" color="green" height={50} width={50} />
            </div>
          )}
          <SearchIcon className="w-[25px] h-[20px] text-gray cursor-pointer hover:scale-[1.2] duration-300" />
        </button>
      </div>
    </form>
  );
};

export default HeaderSearch;
