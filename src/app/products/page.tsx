"use client";

import React, { useState } from 'react';
import Toolbar from '../components/Toolbar/Toolbar';
import ProductList from './ProductList';
import { ColumnsToolbar } from '../components/Toolbar/type';
import { useUser } from '../context/useContext';


const Products = () => {
  const [searchValue, setSearchValue] = useState("")
  const { user } = useUser();
  console.log("user", user);
  

  const handleSearch = (value: string) => {
    console.log('Search:', value);
    setSearchValue(value);
  };
  const columns:ColumnsToolbar =
    {
      field: 'name',
      type: 'search',
      placeholder: '検索',
      defaultValue: '',
    }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Toolbar
        columns={columns}
        onSearch={handleSearch}
        createPath="/products/add"
        createBtnText="Add new product"
      />
      <ProductList/>
    </div>
  );
};

export default Products;
