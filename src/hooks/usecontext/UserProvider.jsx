import { UserContext } from "./UseContext";

export const UserProvider = ({ children }) => {
    const myName = "Santosh Bole";
    const myAge = 38;

    return (
        <UserContext.Provider value={{ myName:myName, myAge:myAge }}>
            {children}
        </UserContext.Provider>
    );
};