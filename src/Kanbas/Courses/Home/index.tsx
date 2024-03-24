import ModuleList from "../Modules/List";
import { FaEllipsisV } from "react-icons/fa";
import StatusNavigation from "./Status";

function Home() {
  return (
    <div className="container-fluid ps-0 pe-1 pe-md-4">
      {/* Top content */}
      <div className="row pe-md-4">
        <div className="col-12 d-flex justify-content-end pe-4">
          <button className="me-2">Collapse All</button>
          {/* <button className="me-2">View Progress</button> */}
          <select className="me-2" style={{ width: "auto", backgroundColor: "lightgray", color: "black" }}>
              <option>Publish All</option>
              <option>Unpublish All</option>
              <option>Unpublish All</option>
          </select>
          {/* <button className="me-2" style={{ backgroundColor: "red", color: "white" }}>+ Module</button> */}
          <button><FaEllipsisV /></button>
        </div>
      </div>

      <hr />

      <div className="row pe-1">
        {/* Left side content - Main body */}
        <div className="col-xs-12 col-xl">
          <h2 className="mt-2 mb-4">Modules</h2>
          <ModuleList />
        </div>
        {/* Right side content - Status Navigation */}
        <div className="col-2 me-5">
          <StatusNavigation />
        </div>
      </div>
       
    </div>
  );
}

export default Home;