import { Navbar } from "./Navbar";
import { useContext } from "react";
import { UserContext } from "../../hooks/context/UserContext";
import { ThemeContext } from "../../hooks/context/ThemeContext";

export const Header = () => {
    const {user, setUser} = useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <header className="site-header">
            <div className="sidebar-brand">
                <span className="brand-mark" aria-hidden="true">R</span>
                <span className="brand-copy">
                    <span className="brand-title">{user.name}</span>
                    <span className="brand-caption">Learning workspace</span>                    
                </span>
            </div>
            <Navbar />
            <span>
                <button onClick={() => setUser({
                    ...user,
                    name: "Santosh Jadhav"
                })}>User</button>
                <button onClick={() => setTheme(
                    theme === "light" ? "dark" : "light"
                )}>SetTheme</button>
            </span>
        </header>
    )
}