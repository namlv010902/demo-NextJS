import { User } from "../types/auth";

type AuthContextType = {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}
 export type{
    AuthContextType
 }