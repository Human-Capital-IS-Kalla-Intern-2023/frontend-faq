import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { SearchIcon } from '../../assets/icons/icon';
// import { faMusic } from '../../assets/icons/categoriIcon';

interface FilterOption {
  id: string;
  label: string;
}

interface InputField {
  id: string;
  label: string;
  name: string;
  type?: string;
}
interface DetailFaqCardProps {
  addButtonText: string;
  title: string;
  filterOptions: FilterOption[];
  inputFields: InputField[];
  onSubmit?: any;
  onSearch?: any;
  onNavigate?: any;
  data?: any[];
}

const DetailFaqCard: React.FC<DetailFaqCardProps> = ({ onSearch }) => {
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
        <div className="flex justify-between bg-white shadow-md">
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
        <div className="w-full pt-2 px-4 overflow-x-auto">
          <div className="items-start content-start justify-start">
            <div className="flex items-center">
              <Link
                to="/pengaturan-akun"
                className="text-sm text-blue-600 hover:underline"
              >
                Pengaturan Akun
              </Link>
              <span className="text-slate-600 mx-2">{' > '}</span>
              <Link
                to="/lupa-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Lupa Password
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full pt-2 px-4 overflow-x-auto">
          <div className="items-start content-start justify-start">
            <div className="border-b border-slate-300">
              <div className="pt-5 text-lg py-3 font-semibold">
                Lupa Password
              </div>
            </div>
            <div className="text-base py-6">ghdgkhsdkhskd</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailFaqCard;
