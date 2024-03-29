import {Link, useLocation} from "react-router-dom";

function Nav() {
    const { pathname } = useLocation();
    const location = useLocation();

    return (
        <>
            {/* <pre>{JSON.stringify(location, null, 2)}</pre> */}
            <nav className="nav nav-pills mt-2">
                <Link to="/Labs" className={`nav-link ${pathname.includes("Labs") ? "active" : ""}`}>A3</Link>
                <Link to="/Kanbas" className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}>Kanbas</Link>
                <Link to="/hello" className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}>Hello</Link>
            </nav>
            <hr />
        </>
    )
}

export default Nav;