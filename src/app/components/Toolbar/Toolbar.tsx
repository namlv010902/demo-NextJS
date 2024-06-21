"use client"
import React, { useState } from 'react';
import { useRouter } from "next/navigation"
import InputSearch from '../Form/InputSearch';
import Select from '../Form/Select';
import { ColumnsToolbar } from './type';
interface ToolbarProps {
  createPath?: string;
  createBtnText?: string;
  onSearch?: (searchTerm: string) => void;
  onFilterChange?: (filterOption: string) => void;
  columns: ColumnsToolbar
}

const Toolbar: React.FC<ToolbarProps> = ({ onSearch, createBtnText = "Add new", createPath, columns }) => {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter()

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    onSearch?.(event.target.value);
  };

  const { type} = columns
  return (
    <div className="flex justify-between items-center border-b border-gray-200 p-4 mb-4">
      {type == "search" &&
        <InputSearch
          searchValue={searchValue}
          onSearch={handleSearch}
          columns={columns}
        />}
      {type == "select" &&
        <Select />
      }
      {createBtnText && createPath && (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
          onClick={() => router.push(createPath)}
        >
          {createBtnText}
        </button>
      )}
      <hr />
    </div>
  );
};

export default Toolbar;
