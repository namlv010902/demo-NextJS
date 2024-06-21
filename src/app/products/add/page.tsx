"use client";

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useMutationProduct from '../hooks/useCreateproduct';
import { useRouter } from 'next/navigation';
import ProductForm from '../components/ProductForm';
import { IFormInputs, schemaProduct } from '@/app/types/products';

const AddProductPage = () => {
  const { register, handleSubmit, formState: { errors },control } = useForm<IFormInputs>({
    defaultValues:{
     name:"",
     price:0,
     image:""
    },
    resolver: yupResolver(schemaProduct),
  });
  const {mutate} = useMutationProduct()
  const router = useRouter()
  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log('Form Data:', data);
    mutate(data,{
      onSuccess:()=>{
        console.log("success")
        router.push("/products")
      },
      onError:()=>{
        console.log("error")
      }
    })
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
     <ProductForm 
     control={control}
     onSubmit={handleSubmit(onSubmit)}
     errors={errors}
     register={register}
     />

    </div>
  );
};

export default AddProductPage;
