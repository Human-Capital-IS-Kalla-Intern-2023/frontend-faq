import { useEffect, useState } from 'react';
import { SearchIcon, TopicIcon } from '../../assets/icons/icon';
import { Link, useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';

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
interface HomeUserCardProps {
  addButtonText: string;
  title: string;
  filterOptions: FilterOption[];
  inputFields: InputField[];
  onSubmit?: any;
  onSearch?: any;
  onNavigate?: any;
  data?: any[];
}

const HomeUserCard: React.FC<HomeUserCardProps> = ({ onSearch }) => {
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
    <section className="py-4 antialiased sm:py-2 overlay">
      <div className="w-full px-6 pt-3 md:w-1/2">
        <form className="flex items-center" onSubmit={handleSearch}>
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <input
              type="text"
              className="block w-full p-2 text-black border rounded-lg text-md"
              placeholder="Search"
              value={searchInput}
              onChange={handleSearchInputChange}
            />

            <button
              className="absolute inset-y-0 right-0 flex items-center px-4 duration-300 bg-slate-200 border rounded-none rounded-r-lg hover:bg-primary "
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
              <SearchIcon className="w-[21px] h-[21px] cursor-pointer " />
            </button>
          </div>
        </form>
      </div>

      {/* Grid 8 item dibagi menjadi 4 kolom */}
      <div className="grid items-center justify-center w-full min-h-full grid-cols-4 gap-4 p-6 pt-4 gap-y-16">
        <div className="flex flex-row flex-wrap items-center justify-center w-full py-10  pt-4 overflow-hidden bg-slate-200 rounded-md shadow-lg px-6 p-2 whitespace-nowrap">
          <Link to="/faq/question" className="w-full">
            <div className="flex justify-center w-full">
              <div>
                <div className="flex items-center justify-center p-3">
                  <TopicIcon className="lg:w-10 lg:h-10 w-8 h-8" />
                </div>
                <div className="pb-2 text-sm font-bold break-all whitespace-normal lg:text-base">
                  Pengaturan Akun
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center text-xs font-bold lg:text-sm">
              Place Description Here
            </div>
          </Link>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center w-full py-10  pt-4 bg-slate-200 rounded-md shadow-lg px-9">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-1">
                <TopicIcon className="lg:w-10 lg:h-10 w-8 h-8" />
              </div>
              <div className="pb-2 text-sm font-bold lg:text-base">
                Business Unit
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center pb-2 text-xs font-bold lg:text-sm">
              Place Description Here
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center w-full py-10  pt-4 bg-slate-200 rounded-md shadow-lg px-9 ">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-1">
                <TopicIcon className="lg:w-11 lg:h-11 w-9 h-9" />
              </div>
              <div className="pb-2 text-sm font-bold lg:text-base">
                Directorate
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center text-xs font-bold lg:text-sm">
              Place Description Here
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center w-full py-10  pt-4 bg-slate-200 rounded-md shadow-lg px-9 ">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-1">
                <TopicIcon className="lg:w-11 lg:h-11 w-9 h-9" />
              </div>
              <div className="pb-2 text-sm font-bold lg:text-base">
                Directorate
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center text-xs font-bold lg:text-sm">
              Place Description Here
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center w-full py-10  pt-4 bg-slate-200 rounded-md shadow-lg px-9 ">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-1">
                <TopicIcon className="lg:w-11 lg:h-11 w-9 h-9" />
              </div>
              <div className="pb-2 text-sm font-bold lg:text-base">
                Directorate
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center text-xs font-bold lg:text-sm">
              Place Description Here
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center w-full py-10  pt-4 bg-slate-200 rounded-md shadow-lg px-9 ">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-1">
                <TopicIcon className="lg:w-11 lg:h-11 w-9 h-9" />
              </div>
              <div className="pb-2 text-sm font-bold lg:text-base">
                Directorate
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center text-xs font-bold lg:text-sm">
              Place Description Here
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center w-full py-10  pt-4 bg-slate-200 rounded-md shadow-lg px-9 ">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-1">
                <TopicIcon className="lg:w-11 lg:h-11 w-9 h-9" />
              </div>
              <div className="pb-2 text-sm font-bold lg:text-base">
                Directorate
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center text-xs font-bold lg:text-sm">
              Place Description Here
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center w-full py-10  pt-4 bg-slate-200 rounded-md shadow-lg px-9 ">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-1">
                <TopicIcon className="lg:w-11 lg:h-11 w-9 h-9" />
              </div>
              <div className="pb-2 text-sm font-bold lg:text-base">
                Directorate
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center text-xs font-bold lg:text-sm">
              Place Description Here
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeUserCard;
