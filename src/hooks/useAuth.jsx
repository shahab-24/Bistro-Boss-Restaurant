import { createContext, useContext } from "react";

export const AuthContext = createContext(null)
const useAuth = () => {
	const context = useContext(AuthContext)
	return context;

}

export default useAuth;