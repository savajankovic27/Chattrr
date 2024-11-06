import {createContext, useState, useContext} from 'react';

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

// wraps the application with the authentication user and set auth user values
export const AuthContextProvider = ({children}) =>{
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);
    return <AuthContext.Provider value={{authUser, setAuthUser}}>{children}</AuthContext.Provider>;
}
