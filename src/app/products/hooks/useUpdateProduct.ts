import {  editProduct } from "@/app/api/products"
import { useMutation } from "@tanstack/react-query"

const useUpdateProduct=()=>{
    const data = useMutation({
        mutationFn:editProduct,
        onError:(error: any)=>console.error(error)
    })
    return data
}
export default useUpdateProduct