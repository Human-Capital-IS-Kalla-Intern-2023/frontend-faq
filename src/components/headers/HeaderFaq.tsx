import React from 'react';
import { Link } from 'react-router-dom';

import { TokenHelperUser } from '../../helpers/TokenHelpers';

import { SearchIcon } from '../../assets/icons/Icon';
import ButtonLogout from '../buttons/ButtonLogout';
import HeaderSearch from '../buttons/HeaderSearch';

interface HeaderFaqProps {}

const HeaderFaq: React.FC<HeaderFaqProps> = () => {
  return (
    <div className="w-full">
      <div className="md:flex block justify-between bg-white shadow-[0_3px_10px_-3px_rgb(0,0,0,0.1)]">
        <Link to={'/home'} className="flex items-center justify-center ">
          <h1 className="md:flex block p-[14px] justify-center items-center md:text-xl text-base">
            Pusat Bantuan
          </h1>
        </Link>
        <div className="md:flex hidden flex-row md:justify-end md:mr-10 lg:mr-0 w-full p-[14px] md:w-1/2">
          <HeaderSearch />
          <ButtonLogout
            title=""
            bg="bg-slate-200 flex justify-center items-center text-base mb-3  "
            className="px-1"
            linkNavigate="/"
            remove_token_name="access_token"
            token_helper={TokenHelperUser()}
          />
        </div>

        <div className="block md:hidden">
          <Link to={'/faq/search'}>
            <div className="absolute items-center px-4 text-black duration-300 rounded-none top-4 right-8 md:flex ">
              <SearchIcon className="w-[25px] h-[20px] text-gray cursor-pointer hover:scale-[1.2] duration-300 " />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderFaq;
