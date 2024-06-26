import * as yup from 'yup';
import { Category } from './category';

export const schemaProduct = yup.object().shape({
  id: yup.string().nullable(),
  title: yup.string().required('Title is required'),
  content: yup.string().required('Content is required'),
  image: yup.string().required('Image is required'),
  categoryId: yup.number().required('Category is required')
});

type Product = {
  id: string;
  title: string;
  content: string;
  image: string;
  categoryId:number | undefined
  category:Category
}

type IFormInputs = {
  title: string;
  content: string;
  image: string;
  id: string;
  categoryId:number | undefined 
}

export type {
  Product,
  IFormInputs
}