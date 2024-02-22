import { FaBan, FaCheckCircle, FaCopy, FaSignOutAlt, FaHome, FaTv, FaBullhorn, FaBell, FaCalendarAlt, FaRegCalendarCheck  } from "react-icons/fa";
import { LuBarChart3 } from "react-icons/lu";
import "../index.css";

function preventNavigation(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
}

function StatusNavigation() {
    return(
        <div id="right-column" className="flex-grow-0 p-2 me-2 d-none d-xl-block" style={{ width: "250px"}}>
            <h4>Course Status</h4>
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 0 }} >
                <tbody>
                    <tr>
                        <td style={{ padding: 0 }}>
                            <button style={{ width: "100%", height: "2em", color: "dimgray", whiteSpace: "nowrap", border: "1px solid lightgray"}}>
                                <FaBan className="fa-rotate-90 text-secondary" /> Unpublish
                            </button>
                        </td>
                        <td style={{ padding: 0 }}>
                            <button style={{ width: "100%", height: "2em", backgroundColor: "rgb(116, 181, 116)", color: "white",
                                whiteSpace: "nowrap", border: "1px solid lightgray" }}>
                                <FaCheckCircle className="text-white" /> Published
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        
            <br />
        
            <ul className="list-group" style={{ marginTop: "-10px" }}>
                <li className="list-group-item " style={{ backgroundColor: "lightgray" }}>
                    <a href="#" onClick={preventNavigation} style={{ display: "block", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis",
                    whiteSpace: "nowrap"}} title="Import Existing Content" >
                        <FaCopy /> Import Existing Content
                    </a>
                </li>
                <li className="list-group-item " style={{ backgroundColor: "lightgray" }}>
                    <a href="#" onClick={preventNavigation} style={{display: "block", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis",
                    whiteSpace: "nowrap" }} title="Import From Commons" >
                        <FaSignOutAlt /> Import From Commons
                    </a>
                </li>
                <li className="list-group-item " style={{ backgroundColor: "lightgray" }} >
                    <a href="#" onClick={preventNavigation} style={{ display: "block", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis",
                    whiteSpace: "nowrap" }} title="Choose Home Page">
                        <FaHome /> Choose Home Page
                    </a>
                </li>
                <li className="list-group-item " style={{ backgroundColor: "lightgray" }}>
                    <a href="#" onClick={preventNavigation} style={{ display: "block", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis",
                    whiteSpace: "nowrap" }} title="View Course Stream">
                        <FaTv /> View Course Stream
                    </a>
                </li>
                <li className="list-group-item " style={{ backgroundColor: "lightgray" }}>
                    <a href="#" onClick={preventNavigation} style={{ display: "block", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis",
                    whiteSpace: "nowrap" }} title="New Announcement">
                        <FaBullhorn /> New Announcement
                    </a>
                </li>
                <li className="list-group-item " style={{ backgroundColor: "lightgray"}}>
                    <a href="#" onClick={preventNavigation} style={{ display: "block", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis",
                    whiteSpace: "nowrap" }} title="New Analytics">
                        <LuBarChart3 /> New Analytics
                    </a>
                </li>
                <li className="list-group-item " style={{ backgroundColor: "lightgray" }}>
                    <a href="#" onClick={preventNavigation} style={{ display: "block", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis",
                    whiteSpace: "nowrap" }} title="View Course Notifications">
                        <FaBell /> View Course Notifications
                    </a>
                </li>
            </ul>

            <br />

            <table style={{ width: "100%"}}>
                <tbody>
                    <tr>
                        <td style={{ textAlign: "center", paddingRight: "30px", whiteSpace: "nowrap", width: "50%" }}>
                            <h6 style={{ fontWeight: "bold" }}>Comming Up</h6>
                        </td>
                        <td className="wd-custom-link ps-3">
                            <a href="#" onClick={preventNavigation}>
                                <FaCalendarAlt /> View Calendar
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <hr />

            <ul className="list-group">
                <li className="list-group-item">
                    <a href="#" onClick={preventNavigation} className="wd-custom-link">
                        <h6><FaRegCalendarCheck /> Lecture</h6>
                        <p>CS4550.12631.202410 Sep 7 at 11:45am</p>
                    </a>
                </li>
                <li className="list-group-item">
                    <a href="#" onClick={preventNavigation} className="wd-custom-link">
                        <h6><FaRegCalendarCheck /> Lecture</h6>
                        <p>CS4550.12631.202410 Sep 11 at 11:45am</p>
                    </a>
                </li>
                <li className="list-group-item">
                    <a href="#" onClick={preventNavigation} className="wd-custom-link">
                        <h6><FaRegCalendarCheck /> Lecture</h6>
                        <p>CS5610 06 SP23 Lecture Sep 11 at 6pm</p>
                    </a>
                </li>
            </ul>
                        
        </div>
    )
}

export default StatusNavigation