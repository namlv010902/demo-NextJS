import { deleteProduct } from "@/app/api/products"
import { useMutation } from "@tanstack/react-query"

const useMutationProductRm=()=>{
    const data = useMutation({
        mutationFn:deleteProduct,
        onError:(error: any)=>console.error(error)
    })
    return data
}
export default useMutationProductRm