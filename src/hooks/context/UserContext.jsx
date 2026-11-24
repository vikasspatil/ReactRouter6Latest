import {createContext, useState} from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "Shlok V. Patil",
        email: "shlokvp@gmail.com",
        age: 15
    });
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}