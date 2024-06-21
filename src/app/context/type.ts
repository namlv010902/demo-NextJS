import { User } from "../types/auth";

type UserContextType = {
    user: User | null;
    loginUser: (userData: User) => void;
    logoutUser: () => void;
}
 export type{
    UserContextType
 }