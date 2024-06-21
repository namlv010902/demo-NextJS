import React, { useState } from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const handlePreviousPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <nav className="flex justify-center mt-4">
      <ul className="flex list-none rounded-md border border-gray-300 divide-x divide-gray-300">
        <li className={`${currentPage === 1 ? 'hidden' : 'block'}`}>
          <button
            onClick={handlePreviousPage}
            className="px-3 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none"
          >
            Previous
          </button>
        </li>
        <li>
          <span className="px-3 py-2 text-sm font-medium text-gray-700 bg-white">{currentPage}</span>
        </li>
        <li className={`${currentPage === totalPages ? 'hidden' : 'block'}`}>
          <button
            onClick={handleNextPage}
            className="px-3 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
