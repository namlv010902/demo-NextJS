import { getKeyValueCategory } from "@/app/api/catergory"
import { useQuery } from "@tanstack/react-query"

const useQueryCategories = () => {
    const data = useQuery({
        queryKey: ['categories'],
        queryFn: getKeyValueCategory,
    })
    return data
}
export default useQueryCategories