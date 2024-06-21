import { createProduct, getProduct } from "@/app/api/products"
import { useMutation } from "@tanstack/react-query"

const useMutationProduct=()=>{
    const data = useMutation({
        mutationFn:createProduct,
        onError:(error: any)=>console.error(error)
    })
    return data
}
export default useMutationProduct