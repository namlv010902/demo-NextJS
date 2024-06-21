import * as yup from 'yup';

export const schemaProduct = yup.object().shape({
  id: yup.string().nullable(),
  name: yup.string().required('Name is required'),
  price: yup.number().required('Price is required').integer('Price must be an integer'),
  image: yup.string().required('Image is required'),
});

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
}

type IFormInputs ={
  name: string;
  price: number;
  image: string;
  id: string;
}

export type {
  Product,
  IFormInputs
}