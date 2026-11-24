import { UserProvider } from "./UserContext";
import { ThemeProvider } from "./ThemeContext";

export const GlobalProvider = ({children}) => {
    return(
        <UserProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </UserProvider>
    )
}