import { Navbar } from "./Navbar"

export const Header = () => {
    return (
        <header className="site-header">
            <div className="sidebar-brand">
                <span className="brand-mark" aria-hidden="true">R</span>
                <span className="brand-copy">
                    <span className="brand-title">React Router</span>
                    <span className="brand-caption">Learning workspace</span>
                </span>
            </div>
            <Navbar />
        </header>
    )
}