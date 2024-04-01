import {Link, useLocation} from "react-router-dom";

function Nav() {
    const { pathname } = useLocation();
    const location = useLocation();

    return (
        <>
            {/* <pre>{JSON.stringify(location, null, 2)}</pre> */}
            <nav className="nav nav-pills mb-2">
                <Link to="/Labs/a3" className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}>A3</Link>
                <Link to="/Labs/a4" className={`nav-link ${pathname.includes("a4") ? "active" : ""}`}>A4</Link>
                <Link to="/Labs/a5" className={`nav-link ${pathname.includes("a5") ? "active" : ""}`}>A5</Link>
                <Link to="/Kanbas" className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}>Kanbas</Link>
                <Link to="/hello" className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}>Hello</Link>
            </nav>
            <hr />
        </>
    )
}

export default Nav;