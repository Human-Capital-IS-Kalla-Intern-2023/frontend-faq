import SearchResultCard from '../../components/cards/SearchResultCard';
import logoKalla from '../../assets/img/logo/singel-logo-kalla_52x48.webp';
import { Link } from 'react-router-dom';
const SearchResult = () => {
  return (
    <>
      <Link to={'/home'}>
        <div className="flex py-1 shadow-lg md:py-3">
          <div className="flex items-center justify-center text-center">
            <img
              src={logoKalla}
              className="h-11 w-12 md:h-12 ml-5 rounded-full md:w-[52px]"
              width={52}
              height={48}
              alt="logo kalla"
              loading="lazy"
            />
          </div>
          <h1 className="md:flex block p-[14px] justify-center items-center md:text-xl text-base">
            Pusat Bantuan
          </h1>
        </div>
      </Link>
      <SearchResultCard></SearchResultCard>
    </>
  );
};

export default SearchResult;
