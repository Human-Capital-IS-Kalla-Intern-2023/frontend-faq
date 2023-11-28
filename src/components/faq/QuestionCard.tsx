import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
interface QuestionCardProps {
  addButtonText: string;
  title: string;
  filterOptions: FilterOption[];
  inputFields: InputField[];
  onSubmit?: any;
  onSearch?: any;
  onNavigate?: any;
  data?: any[];
}

const QuestionCard: React.FC<QuestionCardProps> = ({ onSearch }) => {
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
    <section className="py-2 antialiased overlay">
      <div className="w-full ">
        <div className="flex justify-between bg-white shadow-md">
          <h1 className="flex px-6 py-4 text-2xl font-sans font-semibold">
            FAQ - Frequently Asked Questions
          </h1>
          <div className="w-full flex flex-row px-4 py-4 md:w-1/2 justify-end">
            <form className="flex items-center" onSubmit={handleSearch}>
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative pr-12 w-full">
                <input
                  type="text"
                  className="block w-full pl-6 p-2 text-black border rounded-lg text-md"
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
        <div className="pt-5 w-full overflow-x-auto shadow-md">
          <div className="items-start content-start justify-start bg-white">
            <div className="grid mx-auto mt-2 divide-y divide-neutral-200">
              <div className="px-6 pb-4">
                <div className="py-5 border-b  border-slate-300">
                  <details className="group">
                    <summary
                      className={`flex items-center justify-between hover:text-green-700 font-medium list-none cursor-pointer ${
                        isSelected ? 'text-green-700 font-semibold' : ''
                      }`}
                      onClick={handleClick}
                    >
                      <span> What is a SAAS platform?</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                      SAAS platform is a cloud-based software service that
                      allows users to access and use a variety of tools and
                      functionality.
                    </p>
                    <div className="flex justify-end">
                      <button className="px-2 py-1 mt-3 text-white rounded bg-primary group-open:animate-fadeIn">
                        Lihat Penuh
                      </button>
                    </div>
                  </details>
                </div>
                <div className="py-5 border-b border-slate-300">
                  <details className="group">
                    <summary className="flex items-center justify-between font-medium list-none cursor-pointer">
                      <span> How does billing work?</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                      We offers a variety of billing options, including monthly
                      and annual subscription plans, as well as pay-as-you-go
                      pricing for certain services. Payment is typically made
                      through a credit card or other secure online payment
                      method.
                    </p>
                  </details>
                </div>
                <div className="py-5 border-b border-slate-300">
                  <details className="group">
                    <summary className="flex items-center justify-between font-medium list-none cursor-pointer">
                      <span> Can I get a refund for my subscription?</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                      We offers a 30-day money-back guarantee for most of its
                      subscription plans. If you are not satisfied with your
                      subscription within the first 30 days, you can request a
                      full refund. Refunds for subscriptions that have been
                      active for longer than 30 days may be considered on a
                      case-by-case basis.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionCard;
