import { getListProducts } from "@/app/api/products"
import { useQuery } from "@tanstack/react-query"

const useQueryProducts=()=>{
    const data = useQuery({
        queryKey:['products'],
        queryFn:()=>getListProducts(),
    })
    return data
}
export default useQueryProducts