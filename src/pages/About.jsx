import { Outlet } from "react-router-dom";

export const About = ({pagetitle}) => {
    return (
        <div>
            <h1 className="page-title">{pagetitle}</h1>
            {/* <Outlet /> */}
            <p>About Us data modification for use push method for GitHub.</p>
            <p>I have created a Git branch, and now I am testing whether it works correctly.</p>
        </div>        
    )
}
