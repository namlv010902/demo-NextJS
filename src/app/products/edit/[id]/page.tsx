"use client";

import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams, useRouter } from 'next/navigation';
import ProductForm from '../../components/ProductForm';
import useQueryProduct from '../../hooks/useDetailProduct';
import useUpdateProduct from '../../hooks/useUpdateProduct';
import { IFormInputs, schemaProduct } from '@/app/types/products';


const EditProductPage = () => {
  const { register, handleSubmit, formState: { errors },control ,setValue,watch} = useForm<IFormInputs>({
    defaultValues:{
     name:"",
     price:0,
     image:"",
    },
    resolver: yupResolver(schemaProduct),
  });
  const {mutate} = useUpdateProduct()
  const router = useRouter()
  const {id} = useParams()
  const {data,status} = useQueryProduct(id as string)

  useEffect(()=>{
    if(status=="success"){
      setValue("name",data?.name)
      setValue("price",data?.price)
      setValue("image",data?.image)
      setValue("id",id as string)
    }
  },[id, data,status,setValue]) 
  
  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log('Form Data:', data);
    mutate(data,{
      onSuccess:()=>{
        alert("success")
        router.push("/products")
      },

      onError:()=>{
        console.log("error")
      }
    })
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
     <ProductForm 
     control={control}
     onSubmit={handleSubmit(onSubmit)}
     errors={errors}
     register={register}
     />
    </div>
  );
};

export default EditProductPage;
