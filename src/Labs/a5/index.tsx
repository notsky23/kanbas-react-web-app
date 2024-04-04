import axios from "axios";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
  // const API_BASE = "https://kanbas-node-server-app-vvg4.onrender.com";
  const API_BASE = process.env.REACT_APP_API_BASE?.replace(/\/+$/, "");
  const WELCOME_API = `${API_BASE}/a5/welcome`;

    return (
      <div className="container list-group">
        <h1>Assignment 5</h1>
        {/* <a className="list-group-item list-group-item-action" href="http://localhost:4000/a5/welcome"> */}
        <a className="list-group-item list-group-item-action" href={`${API_BASE}/a5/welcome`}>
          Welcome
        </a> <br />
        <EncodingParametersInURLs /> <br />
        <WorkingWithObjects /> <br />
        <WorkingWithArrays /> <br />
      </div>
    );
}

export default Assignment5;