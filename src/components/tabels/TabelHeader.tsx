// Import Library & Package
import { useState, useEffect, useCallback } from 'react';
import AddModal from '../modals/AddModal';
// import CompensationAddCard from '../cards/compensation/CompensationAddCard';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';

// Import Assets
import { SearchIcon, PlusIcon } from '../../assets/icons/icon';

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
interface TabelHeaderProps {
  addButtonText: string;
  title: string;
  filterOptions: FilterOption[];
  inputFields: InputField[];
  onSubmit?: any;
  onSearch?: any;
  onNavigate?: any;
}

const TabelHeader: React.FC<TabelHeaderProps> = ({
  addButtonText,
  title,
  inputFields,
  onSubmit,
  onSearch,
  onNavigate,
}) => {
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  // const [CompensationModalOpen, SetCompensationModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const closeFilterDropdown = () => {
    setIsFilterDropdownOpen(false);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const isCompensationPage = location.pathname === '/salary/compensation';

  const openModal = () => {
    if (onNavigate) {
      navigate(onNavigate);
      setModalOpen(true);
    }
  };

  const closeModal = useCallback(() => {
    setModalOpen(false);
    // SetCompensationModalOpen(false);
    if (location.pathname.endsWith('/add')) {
      const newUrl = location.pathname.slice(0, -4);
      navigate(newUrl);
    }
  }, [location.pathname, navigate]);

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

  const handleOverlayClick = (e: any) => {
    if (e.target.classList.contains('overlay')) {
      closeModal();
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get('search');
    if (searchValue) {
      onSearch(searchValue);
      setSearchInput(searchValue);
    }

    // // compensation Modal
    // if (isCompensationPage && CompensationModalOpen) {
    //   SetCompensationModalOpen(true);
    // } else {
    //   SetCompensationModalOpen(false);
    // }

    if (location.pathname.endsWith('/add') && !onNavigate) {
      setModalOpen(true);
    }
    const handleEscapeKey = (event: any) => {
      if (event.key === 'Escape') {
        closeModal();
        // SetCompensationModalOpen(false);
      }
    };

    const handleScroll = () => {
      if (isFilterDropdownOpen) {
        closeFilterDropdown();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEscapeKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    closeModal,
    location.pathname,
    isFilterDropdownOpen,
    isCompensationPage,
    onNavigate,
  ]);

  return (
    <section
      className="py-3 antialiased sm:py-3 overlay "
      onClick={handleOverlayClick}
    >
      <div className="px-4 mx-auto">
        <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
          <div className="flex flex-col items-center justify-between p-3 space-y-3 rounded-md shadow-md md:flex-row md:space-y-0 md:space-x-4 bg-primary">
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
                    className="absolute inset-y-0 right-0 flex items-center px-4 duration-300 border rounded-none rounded-r-lg bg-secondary hover:bg-yellow "
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
            <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center">
              <Link
                to={onNavigate}
                onClick={openModal}
                className="flex items-center justify-center px-6 py-2 text-base font-medium uppercase duration-300 rounded-lg text-pureBlack bg-secondary focus:ring-4 bg-primary-600 hover:bg-yellow lg:hover:scale-[1.03]"
              >
                <PlusIcon className="h-3.5 w-3.5 mr-2" />
                {addButtonText}
              </Link>

              {modalOpen && (
                <AddModal
                  isOpen={modalOpen}
                  onClose={closeModal}
                  title={title}
                  inputFields={inputFields}
                  onSubmit={onSubmit}
                />
              )}
              {/* {isCompensationPage && !CompensationModalOpen && (
                <CompensationAddCard
                  isOpen={CompensationModalOpen}
                  onClose={closeModal}
                />
              )} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabelHeader;
