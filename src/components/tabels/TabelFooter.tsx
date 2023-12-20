// Import Assets
import { LeftArrowIcon, RightArrowIcon } from '../../assets/icons/Icon';

interface TabelFooterProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalDataCount: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
  onPageChange: (pageNumber: number) => void;
}

const TabelFooter: React.FC<TabelFooterProps> = ({
  currentPage,
  totalPages,
  itemsPerPage,
  totalDataCount,
  onPreviousPage,
  onNextPage,
  onPageChange,
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex =
    currentPage === totalPages ? totalDataCount : startIndex + itemsPerPage - 1;

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="py-1 antialiased sm:py-5">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
          <nav
            className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal">
              Showing{' '}
              <span className="font-semibold text-black">
                {startIndex} - {endIndex}{' '}
              </span>
              of{' '}
              <span className="font-semibold text-black">{totalDataCount}</span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              <li>
                <button
                  onClick={onPreviousPage}
                  aria-label="Previous"
                  className={`flex items-center border justify-center h-full py-1.5 px-3 ml-0  bg-white rounded-l-lg   hover:bg-primary    border-black hover:text-white ${
                    currentPage === 1 ? 'cursor-not-allowed text-gray-400' : ''
                  }`}
                  disabled={currentPage === 1}
                >
                  <span className="sr-only">Previous</span>
                  <LeftArrowIcon className="w-5 h-5" />
                </button>
              </li>
              {pageNumbers.map((pageNumber) => (
                <li key={pageNumber}>
                  <button
                    onClick={() => onPageChange(pageNumber)}
                    aria-label={`Go to page ${pageNumber}`}
                    className={`flex items-center justify-center px-3 py-2 text-sm leading-tight ${
                      pageNumber === currentPage
                        ? 'bg-primary-50 border-primary-300 bg-primary border-black border text-white'
                        : 'bg-white border hover:bg-primary border-black hover:text-white'
                    }`}
                  >
                    {pageNumber}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onNextPage}
                  aria-label="Next"
                  className={`flex items-center justify-center h-full py-1.5 px-3 leading-tight  bg-white rounded-r-lg border hover:bg-primary border-black hover:text-white ${
                    currentPage === totalPages
                      ? 'cursor-not-allowed text-gray-400'
                      : ''
                  }`}
                  disabled={currentPage === totalPages}
                >
                  <RightArrowIcon className="w-5 h-5" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default TabelFooter;
