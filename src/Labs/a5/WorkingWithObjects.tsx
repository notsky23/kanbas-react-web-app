import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"

  const [modules, setModules] = useState({
    id: 1, name: "New Module",
    description: "This is a new module",
    course: "Web Development",
  });
  const MODULE_URL = "http://localhost:4000/a5/module"

  const [fetchedAssignment, setFetchedAssignment] = useState({});
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setFetchedAssignment(response.data);
    setAssignment(response.data);
  }
  const updateTitle = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  }
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary col-12 me-3 mb-3" href="http://localhost:4000/a5/assignment">
        Get Assignment
      </a>
      <div className="d-flex justify-content-between mb-3">
        <a className="btn btn-success me-3" href="http://localhost:4000/a5/assignment/id">
          Get ID
        </a>
        <a className="btn btn-warning me-3" href="http://localhost:4000/a5/assignment/title">
          Get Title
        </a>
        <a className="btn btn-danger me-3" href="http://localhost:4000/a5/assignment/description">
          Get Description
        </a>
        <a className="btn btn-secondary me-3" href="http://localhost:4000/a5/assignment/due">
          Get Due Date
        </a>
        <a className="btn btn-info me-3" href="http://localhost:4000/a5/assignment/completed">
          Get Completed
        </a>
        <a className="btn btn-dark me-3" href="http://localhost:4000/a5/assignment/score">
          Get Score
        </a>
      </div>
      <br />

      <h4>Modifying Properties</h4>
      <div className="d-flex mb-3">
        <input
          className="form-control me-3"
          type="text"
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          value={assignment.title}
        />
        <a className="btn btn-primary text-nowrap me-3" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
          Update Title
        </a>
      </div>
      <div className="d-flex mb-3">
        <input
          className="form-control me-3"
          type="number"
          onChange={(e) => setAssignment({ ...assignment,
              score: Number(e.target.value) })}
          value={assignment.score}
          min={0}
          max={100}
        />
        <a className="btn btn-primary text-nowrap me-3" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
          Update Score
        </a>
      </div>
      <div className="d-flex justify-content-between">
        <div className="form-check">
          <input
            id="completedCB"
            className="form-check-input me-3"
            type="checkbox"
            onChange={(e) => setAssignment({ ...assignment,
                completed: e.target.checked })}
          />
          <label
            className="form-check-label" htmlFor="completedCB">
              Completed?
          </label>
        </div>
        <a className="btn btn-primary text-nowrap me-3" href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
          Update Completed
        </a>
      </div>
      <div className="my-3">
        <h4 className="mb-3">Modifying Properties Using Axios</h4>
        <div className="d-flex mb-3">
          <input
            className="form-control me-3"
            type="text"
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
            value={assignment.title}
          />
          {/* <a className="btn btn-primary text-nowrap me-3" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
            Update Title
          </a> */}
          <button className="btn btn-primary text-nowrap me-3" onClick={updateTitle}>
            Update Title to {assignment.title}
          </button>
        </div>
        <button className="form-control btn btn-success me-3 mb-3" onClick={fetchAssignment} >
          Fetch Assignment
        </button>
        <pre className="list-group-item">
          <h5>Assignment Details:</h5>
          {JSON.stringify(fetchedAssignment, null, 2)}
        </pre>
      </div>
      
      <br />

      <h4>Modules Object</h4>
      <a className="btn btn-primary col-12 me-3 mb-3" href="http://localhost:4000/a5/module">
        Get Module
      </a>
      <div className="d-flex justify-content-between mb-3">
        <a className="btn btn-success me-3" href="http://localhost:4000/a5/module/id">
          Get ID
        </a>
        <a className="btn btn-warning me-3" href="http://localhost:4000/a5/module/name">
          Get Name
        </a>
        <a className="btn btn-danger me-3" href="http://localhost:4000/a5/module/description">
          Get Description
        </a>
        <a className="btn btn-secondary me-3" href="http://localhost:4000/a5/module/course">
          Get Course
        </a>
      </div>
      <div className="d-flex">
        <input
          className="form-control me-3"
          type="text"
          onChange={(e) => setModules({ ...modules,
              name: e.target.value })}
          value={modules.name}
        />
        <a className="btn btn-primary text-nowrap me-3" href={`${MODULE_URL}/name/${modules.name}`}>
          Update Name
        </a>
      </div>

    </div>
  );
}

export default WorkingWithObjects;