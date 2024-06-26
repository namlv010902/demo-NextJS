import { useAuth } from "./app/context"
import { ROLE } from "./constant"

const authorization = () => {
    const {user} = useAuth()
    if(user?.role !== ROLE.ADMIN){
        return false
    }
    return true
}

export default authorization