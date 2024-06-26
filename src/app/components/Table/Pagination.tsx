import React from 'react';

interface PaginationProps {
  perPage: number
  totalPage: number;
  currentPage: number;
  setPage: (page: number) => void
  onPageChange: (page: number) => void;
  setPerPage: (value: any) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPage, currentPage, onPageChange, setPerPage, perPage, setPage }) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
    window.scrollTo(0, 0);

  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      onPageChange(currentPage + 1);
    }
    window.scrollTo(0, 0);

  };
  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(Number(event.target.value));
    setPage(1)
  };
  const paginateSize = [5, 10, 20, 50]

  return (
    <nav aria-label="Page navigation" className='flex items-center justify-center'>
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <button
            onClick={handlePreviousPage}
            className={`flex items-center justify-center px-3 h-8 leading-tight ${currentPage === 1
              ? 'text-gray-400 bg-gray-200 cursor-not-allowed'
              : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              }`}
            disabled={currentPage === 1}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>
        {Array.from({ length: totalPage }, (_, index) => (
          <li key={index}>
            <p
              onClick={() => onPageChange(index + 1)}
              className={`flex items-center cursor-pointer justify-center px-3 h-8 leading-tight ${currentPage === index + 1
                ? 'text-blue-600 bg-blue-50 border-blue-300'
                : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                }`}
            >
              {index + 1}
            </p>
          </li>
        ))}
        <li>
          <button
            onClick={handleNextPage}
            className={`flex items-center justify-center px-3 h-8 leading-tight ${currentPage === totalPage
              ? 'text-gray-400 bg-gray-200 cursor-not-allowed'
              : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              }`}
            disabled={currentPage === totalPage}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
      <div className="ml-4">
        <label htmlFor="perPage" className="mr-2 text-sm text-gray-500">Items per page:</label>
        <select
          id="perPage"
          value={perPage}
          onChange={handlePerPageChange}
          className="text-sm border-gray-300 rounded-md py-2 px-2 cursor-pointer"
        >
        {paginateSize?.map((item:number)=>(
          <option className='py-4 px-4 cursor-pointer' key={item} value={item}>{item}</option>
        ))}
        </select>
      </div>
    </nav>
  );
};

export default Pagination;
