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
  const { handleSubmit, control, setValue, } = useForm<IFormInputs>({
    defaultValues: {
      content: "",
      title: "",
      image: "",
      categoryId: undefined,
    },
    resolver: yupResolver(schemaProduct),
  });
  const { mutate } = useUpdateProduct()
  const router = useRouter()
  const { id } = useParams()
  const { data, status } = useQueryProduct(id as string)


  useEffect(() => {
    if (status == "success" && data) {
      const fieldsToSet = ['content', 'title', 'image', 'id', 'categoryId'];
      fieldsToSet.forEach((field: any) => {
        setValue(field, data[field]);
      });
    }
  }, [id, data, status, setValue])

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log('Form Data:', data);
    mutate(data, {
      onSuccess: () => {
        alert("success")
        router.push("/products")
      },

      onError: () => {
        console.log("error")
      }
    })
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Edit Product</h1>
      <ProductForm
        control={control}
        onSubmit={handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default EditProductPage;
