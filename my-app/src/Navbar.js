import { Link, useMatch, useResolvedPath } from "react-router-dom";


export default function Navbar () {
    return <div className="nav-body">
            <nav className="nav">
                    <CustomLink to="/" className="site-title">
                        
                        <span className="title-name">Byte.me</span>
                    </CustomLink>
                
                <ul className="nav-nav">
                    <li className="nav-item">
                        <CustomLink to="/">
                           
                            <span className="link-text">Home</span>
                        </CustomLink>
                    </li>

                    <li className="nav-item">
                        <CustomLink to="/Byte">
                            
                            <span className="link-text">Why Byte.me</span>
                        </CustomLink></li>

                    <li className="nav-item">
                        <CustomLink to="/Contact">
                             
                            <span className="link-text">Contact Us</span>
                        </CustomLink></li>

                    <li className="nav-item">
                        <a href="http://www.sebastianbrown.co" className="nav-link">
                         
                        <span className="link-text">My Website</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true});

    return (
        <li className={isActive === to ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
        </Link>
        </li>
    )
}