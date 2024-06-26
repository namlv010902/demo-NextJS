import { Product } from "../types/products"
import { instance } from "./instance"
import { NextRequest, NextResponse } from 'next/server'


const getListProducts=async(query:any)=>{
    // console.log(query);
    
    const res =await instance.get("posts",{
        params:query
    })
    return res?.data
}
const getProduct=async(id:string)=>{
    const response = await instance.get("posts/"+id)
    return response?.data?.data

}
const deleteProduct=(id:string)=>{
    return instance.delete("posts/"+id)
}
const createProduct=(data:Product)=>{
    return instance.post("posts/",data)
}
const editProduct=async(data:Product)=>{
    const {id,...dataReq} = data
    
    const response = await instance.patch("posts/"+id,dataReq)
    return response?.data
}
export {
    getListProducts,
    getProduct,
    createProduct,
    editProduct,
    deleteProduct
}