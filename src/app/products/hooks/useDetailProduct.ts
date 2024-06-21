import { getProduct } from "@/app/api/products"
import { useQuery } from "@tanstack/react-query"

const useQueryProduct=(id:string)=>{
    const data = useQuery({
        queryKey:[id],
        queryFn:()=>getProduct(id),
    })
    return data
}
export default useQueryProduct