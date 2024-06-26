"use client";

import React, { useEffect, useState } from 'react';
import Toolbar from '../components/Toolbar/Toolbar';
import ProductList from './ProductList';
import { ColumnsToolbar } from '../components/Toolbar/type';
import { useAuth } from '../context';
import { ROLE } from '@/constant';
import { useRouter } from 'next/navigation';


const Products = () => {
  const [searchValue, setSearchValue] = useState<string | null>()
  const { user } = useAuth()
  const router = useRouter()
  useEffect(() => {
    if (user && user?.role != ROLE.ADMIN) {
      router.push('/403')

    }
  }, [user])
  const handleSearch = (value: string) => {
    console.log('Search:', value);
    setSearchValue(value);
  };
  const columns: ColumnsToolbar =
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
      <ProductList searchValue={searchValue} />
    </div>
  );
};

export default Products;
