import { useEffect, useState } from 'react';
import { SearchIcon } from '../../assets/icons/Icon';
import ReactLoading from 'react-loading';
import { searchTopicUser } from '../../api/user/FaqUserAPI';
import IconRenderer from '../../helpers/IconRenders';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { NotFoundIcon } from '../../assets/icons/Icon';

const SearchResultCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const [searchParams] = useSearchParams();
  const searchInputFromUrl = searchParams.get('title');

  const [searchInput, setSearchInput] = useState(searchInputFromUrl || '');
  const navigate = useNavigate();

  const handleSearch = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await searchTopicUser(searchInput);

      if (result) {
        navigate(`?title=${searchInput}`);
        setSearchResult(result.data);
        setIsInitialLoad(false);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    setSearchInput(searchInputFromUrl || '');

    if (searchInputFromUrl) {
      const fetchSearchResults = async () => {
        setIsLoading(true);
        try {
          const result = await searchTopicUser(searchInputFromUrl);
          setSearchResult(result.data);
          setIsInitialLoad(false);
        } catch (error) {
          console.error('Error fetching search results:', error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchSearchResults();
    }
  }, [searchInputFromUrl]);

  return (
    <section className="flex items-center justify-center mt-10 overflow-y-auto antialiased text-center lg:py-4 lg:mx-16 sm:py-1 overlay">
      <div className="w-full px-4 pt-2 md:px-6 lg:pt-3 md:w-8/12">
        <form className="mb-3" onSubmit={handleSearch}>
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative flex items-center w-full">
            <input
              type="text"
              className="block w-full px-3 py-3 pr-4 text-base text-black rounded-full cursor-pointer lg:py-8 placeholder-gray focus:outline-none focus:placeholder-black bg-slate-100 md:rounded-xl pl-14 lg:text-md"
              placeholder="Cari artikel bantuan..."
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <button
              className="absolute left-0 flex items-center px-4 text-black duration-300 rounded-none "
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
              <SearchIcon className="w-[28px] h-[23px] lg:w-[30px] lg:h-[25px] text-gray cursor-pointer " />
            </button>
          </div>
        </form>

        {!isInitialLoad && searchInput && searchResult.length === 0 ? (
          <>
            <div className="mt-10">
              <div className="flex items-center justify-center w-full my-2 bg-white rounded-md cursor-pointer ">
                <NotFoundIcon className="w-20 h-20" />
              </div>
              <div className="mt-6 text-2xl font-bold text-red-700">
                Data Not Found !
              </div>
              <span className="text-sm text-gray mt-[3px]">
                Sorry, we couldn't find any matches for your search.
              </span>
            </div>
          </>
        ) : (
          <>
            {searchResult?.map((faq: any) => (
              <div key={faq.slug}>
                <Link to={`/faq/question/${faq.topics[0].name}/${faq.slug}`}>
                  <div className="w-full my-2 bg-white rounded-md cursor-pointer hover:bg-slate-200">
                    <div className="flex items-center p-4">
                      <div className="px-3 py-2 rounded-full bg-slate-200">
                        {faq.topics[0].image ? (
                          <img
                            src={faq.topics[0].image}
                            alt={`logo for ${faq.question}`}
                            className="w-7 h-7"
                          />
                        ) : (
                          <>
                            <IconRenderer
                              value={faq.topics[0].icon}
                              className="w-7 h-7"
                            />
                          </>
                        )}
                      </div>
                      <div className="items-start pl-3 text-start">
                        <div className="text-[15px] font-semibold">
                          {faq.question}
                        </div>
                        <span className="text-sm text-[14px]">
                          {faq.topics[0].name}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default SearchResultCard;
