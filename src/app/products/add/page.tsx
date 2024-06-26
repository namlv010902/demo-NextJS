"use client";

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useMutationProduct from '../hooks/useCreateproduct';
import { useRouter } from 'next/navigation';
import ProductForm from '../components/ProductForm';
import { IFormInputs, schemaProduct } from '@/app/types/products';

const AddProductPage = () => {
  const { register, handleSubmit, formState: { errors }, control } = useForm<IFormInputs>({
    defaultValues: {
      title: "",
      content: "",
      image: "",
      categoryId: undefined

    },
    resolver: yupResolver(schemaProduct),
  });
  const { mutate } = useMutationProduct()
  const router = useRouter()
  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log('Form Data:', data);
    mutate(data, {
      onSuccess: () => {
        console.log("success")
        router.push("/products")
      },
      onError: () => {
        console.log("error")
      }
    })
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4  text-center" >Add New Product</h1>
      <ProductForm
        control={control}
        onSubmit={handleSubmit(onSubmit)}
      />

    </div>
  );
};

export default AddProductPage;
