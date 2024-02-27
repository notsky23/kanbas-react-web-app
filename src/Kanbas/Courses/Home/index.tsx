import ModuleList from "../Modules/List";
import { FaEllipsisV } from "react-icons/fa";
import StatusNavigation from "./Status";

function Home() {
  return (
    <div className="d-flex justify-content-between">
      {/* Left side content */}
      <div className="flex-grow-1 me-4">
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

       {/* Right side content - Status Navigation */}
       <StatusNavigation />
    </div>
  );
}

export default Home;