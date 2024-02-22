import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);

  return (
    <div className="me-5">

        <table style={{ width:"100%" }}>
            <tbody>
            <tr>
                <td className="w-25"><input className="form-control" placeholder="Search for Assignments" /></td>
                <td className="float-end p-2">
                    <div className="d-flex align-items-center justify-content-end">
                        <button className="btn btn-light" style={{ height: "calc(2.25rem + 2px)", whiteSpace: "nowrap", border: "1px solid #ced4da" }}><FaPlus /> Group</button>
                        <button className="btn btn-danger" style={{ height: "calc(2.25rem + 2px)", whiteSpace: "nowrap", border: "1px solid #ced4da" }}><FaPlus /> Assignment</button>
                        <button className="btn btn-light" style={{ height: "calc(2.25rem + 2px)", whiteSpace: "nowrap", border: "1px solid #ced4da" }}><FaEllipsisV /></button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
        <hr />

        {/* {<!-- Add buttons and other fields here -->} */}
        <ul className="list-group wd-modules">
            <li className="list-group-item">
            <div>
                <FaEllipsisV className="me-2" /> ASSIGNMENTS
                <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                </span>
            </div>
            <ul className="list-group">
                {assignmentList.map((assignment) => (
                <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                    <span className="float-end">
                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                </li>))}
            </ul>
            </li>
        </ul>
    </div>
);}

export default Assignments;