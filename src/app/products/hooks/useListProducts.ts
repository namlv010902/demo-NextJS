import { getListProducts } from "@/app/api/products"
import { useQuery } from "@tanstack/react-query"

const useQueryProducts = (query: any) => {
    const { page, perPage ,keyword} = query
    const data = useQuery({
        queryKey: ['products', page,perPage,keyword],
        queryFn: () => getListProducts(query),
    })
    return data
}
export default useQueryProducts