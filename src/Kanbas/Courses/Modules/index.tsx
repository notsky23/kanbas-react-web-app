import ModuleList from "./List";
import { FaEllipsisV } from "react-icons/fa";

function Modules() {
  return (
    <div className="me-5">
        <div className="d-flex justify-content-end">
            <button className="me-2">Collapse All</button>
            <button className="me-2">View Progress</button>
            <select className="me-2" style={{ width: "auto", backgroundColor: "lightgray", color: "black" }}>
                <option>Publish All</option>
                <option>Unpublish All</option>
                <option>Unpublish All</option>
            </select>
            <button className="me-2" style={{ backgroundColor: "red", color: "white" }}>+ Module</button>
            <button><FaEllipsisV /></button>
        </div>
        <hr />

        <div>
        <h2>Modules</h2>
        <ModuleList />
        </div>
    </div>
  );
}
export default Modules;