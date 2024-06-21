import { Product } from "../types/products"
import { instance } from "./instance"
import { NextRequest, NextResponse } from 'next/server'


const getListProducts=()=>{
    
    return instance.get("products")
}
const getProduct=async(id:string)=>{
    const response = await instance.get("products/"+id)
    return response?.data

}
const deleteProduct=(id:string)=>{
    return instance.delete("products/"+id)
}
const createProduct=(data:Product)=>{
    return instance.post("products/",data)
}
const editProduct=async(data:Product)=>{
    const {id,...dataReq} = data
    console.log(data);
    
    const response = await instance.patch("products/"+id,dataReq)
    return response?.data
}
export {
    getListProducts,
    getProduct,
    createProduct,
    editProduct,
    deleteProduct
}