import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const AppLayout = () => {
    return (
        <div className="app-shell">
            <Header />
            <main className="page-content">
                <Outlet />
            </main>
        </div>
    )
}