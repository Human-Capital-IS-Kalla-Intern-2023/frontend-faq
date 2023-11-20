import { useEffect, useState } from 'react';
import { SearchIcon } from '../../assets/icons/icon';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';

import {
  CategoryIcon,
  DashboardIcon,
  SettingIcon,
  FAQIcon,
  EditIcon,
} from '../../assets/icons/icon';

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
    <section className="py-2 antialiased sm:py-2 overlay">
      <div className="w-full pl-6">
        <div className="relative bg-white shadow-lg">
          <div className="w-full overflow-x-auto">
            <div className="w-full md:w-1/2">
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
                    className="absolute inset-y-0 right-0 flex items-center px-4 duration-300 bg-white border rounded-none rounded-r-lg hover:bg-primary "
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
          </div>
        </div>
      </div>

      {/* Topik Populer */}
      <div className="px-6 py-5 text-lg">Topik Populer</div>

      {/* Grid 8 item dibagi menjadi 4 kolom */}
      <div className="grid items-center justify-center w-full min-h-full grid-cols-4 gap-4 p-6 pt-2 gap-y-16">
        <div className="flex flex-row flex-wrap items-center justify-center w-full py-3 pt-4 overflow-hidden bg-white rounded-md shadow-lg px-9 lg:p-2 whitespace-nowrap">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-3">
                <SettingIcon className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="pb-2 text-sm font-bold break-all whitespace-normal lg:text-base">
                Pengaturan Akun
              </div>
            </div>
          </div>
          <div className="w-11/12 overflow-hidden">
            <div className="flex items-center justify-center font-bold break-all whitespace-normal text-md lg:text-lg">
              fjghhgwhegowghwoehgowehgoweurwuehweehgwhewhf
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center w-full py-3 pt-4 bg-white rounded-md shadow-lg px-9">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-1">
                <CategoryIcon className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="pb-2 text-sm font-bold lg:text-base">
                Business Unit
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center pb-2 text-xs font-bold lg:text-sm">
              Total
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center w-full py-3 pt-4 bg-white rounded-md shadow-lg px-9 ">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-1">
                <EditIcon className="lg:w-11 lg:h-11 w-9 h-9" />
              </div>
              <div className="pb-2 text-sm font-bold lg:text-base">
                Directorate
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center text-xs font-bold lg:text-sm">
              Total
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center w-full py-3 pt-4 bg-white rounded-md shadow-lg px-9 lg:p-2">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-1">
                <DashboardIcon className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="p-2 text-xs font-bold lg:text-base">Division</div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center text-xs font-bold lg:text-sm">
              Total
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center w-full p-2 bg-white rounded-md shadow-lg ">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-2">
                <FAQIcon className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="pb-2 text-sm font-bold lg:text-base">Section</div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center text-xs font-bold lg:text-sm">
              Total
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center w-full p-2 bg-white rounded-md shadow-lg">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-2">
                <FAQIcon className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="pb-2 text-sm font-bold lg:text-base">Section</div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center text-xs font-bold lg:text-sm">
              Total
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center w-full p-2 bg-white rounded-md shadow-lg">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-2">
                <FAQIcon className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="pb-2 text-sm font-bold lg:text-base">Section</div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center text-xs font-bold lg:text-sm">
              Total
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center w-full p-2 bg-white rounded-md shadow-lg ">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-2">
                <FAQIcon className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="pb-2 text-sm font-bold lg:text-base">Section</div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center text-xs font-bold lg:text-sm">
              Total
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeUserCard;
