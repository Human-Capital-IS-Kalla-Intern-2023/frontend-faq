import { useEffect, useState } from 'react';
import { SearchIcon, PlusIcon, CategoryIcon } from '../../assets/icons/icon';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';

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

const HomeUserCard: React.FC<HomeUserCardProps> = ({
  addButtonText,
  title,
  inputFields,
  onSubmit,
  onSearch,
  onNavigate,
}) => {
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
  });

  return (
    <section className="py-2 antialiased sm:py-2 overlay">
      <div className="w-full pl-6">
        <div className="relative bg-white shadow-lg">
          <div className="overflow-x-auto w-full">
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
                    className="absolute inset-y-0 right-0 flex items-center px-4 duration-300 border rounded-none rounded-r-lg bg-white hover:bg-primary "
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

      {/* Grid 8 item dibagi menjadi 4 kolom */}
      <div className="grid grid-cols-4 items-center justify-center w-full min-h-full pt-2 p-6 gap-4 gap-y-16">
        <div className="flex flex-row flex-wrap items-center justify-center w-full  px-9 py-3 lg:p-2 pt-4 bg-white rounded-md shadow-lg overflow-hidden whitespace-nowrap">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-3">
                <CategoryIcon className="lg:w-10 lg:h-10 w-8 h-8" />
              </div>
              <div className="pb-2 text-sm lg:text-base font-bold whitespace-normal break-all">
                Pengaturan Akun
              </div>
            </div>
          </div>
          <div className="w-11/12 overflow-hidden">
            <div className="flex items-center justify-center text-md lg:text-lg font-bold whitespace-normal break-all">
              fjghhgwhegowghwoehgowehgoweurwuehweehgwhewhf
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center w-full px-9 py-3 pt-4 bg-white rounded-md shadow-lg">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-1">
                <CategoryIcon className="lg:w-10 lg:h-10 w-8 h-8" />
              </div>
              <div className="pb-2 text-sm lg:text-base font-bold">
                Business Unit
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center pb-2 text-xs lg:text-sm font-bold">
              Total
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center w-full px-9 py-3 pt-4 bg-white rounded-md shadow-lg ">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-1">
                <CategoryIcon className="lg:w-11 lg:h-11 w-9 h-9" />
              </div>
              <div className="pb-2 text-sm lg:text-base font-bold">
                Directorate
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center text-xs lg:text-sm font-bold">
              Total
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center w-full px-9 py-3 lg:p-2 pt-4 bg-white rounded-md shadow-lg">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-1">
                <CategoryIcon className="lg:w-10 lg:h-10 w-8 h-8" />
              </div>
              <div className="p-2 text-xs lg:text-base font-bold">Division</div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center text-xs lg:text-sm font-bold">
              Total
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center w-full p-2 bg-white rounded-md shadow-lg ">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-2">
                <CategoryIcon className="lg:w-10 lg:h-10 w-8 h-8" />
              </div>
              <div className="pb-2 text-sm lg:text-base font-bold">Section</div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center text-xs lg:text-sm font-bold">
              Total
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center w-full p-2 bg-white rounded-md shadow-lg">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-2">
                <CategoryIcon className="lg:w-10 lg:h-10 w-8 h-8" />
              </div>
              <div className="pb-2 text-sm lg:text-base font-bold">Section</div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center text-xs lg:text-sm font-bold">
              Total
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center w-full p-2 bg-white rounded-md shadow-lg">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-2">
                <CategoryIcon className="lg:w-10 lg:h-10 w-8 h-8" />
              </div>
              <div className="pb-2 text-sm lg:text-base font-bold">Section</div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center text-xs lg:text-sm font-bold">
              Total
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center w-full p-2 bg-white rounded-md shadow-lg ">
          <div className="flex justify-center w-full">
            <div>
              <div className="flex items-center justify-center p-2">
                <CategoryIcon className="lg:w-10 lg:h-10 w-8 h-8" />
              </div>
              <div className="pb-2 text-sm lg:text-base font-bold">Section</div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center text-xs lg:text-sm font-bold">
              Total
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeUserCard;
