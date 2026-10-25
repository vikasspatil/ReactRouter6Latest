import { NavLink } from "react-router-dom"

export const Navbar =()=>{
    return(
        <nav className="nav-links" aria-label="Main navigation">
            <NavLink to="/" end className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            {/* <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About</NavLink> */}
            {/* About Dropdown */}
            <div className="nav-dropdown">
                <NavLink
                to="/about"
                className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                }
                >
                About ▾
                </NavLink>

                <div className="dropdown-menu">
                    <NavLink to="/about/page1" className="dropdown-link">
                        Page 1
                    </NavLink>

                    <NavLink to="/about/page2" className="dropdown-link">
                        Page 2
                    </NavLink>
                </div>
            </div>
            <NavLink to="/useref" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>useRef</NavLink>
            <NavLink to="/usecontext" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Context</NavLink>
        </nav>
    )
}