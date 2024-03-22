import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPlus } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
// import { assignments } from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../store";
import {
    deleteAssignment,
  } from "./reducer"

function Assignments() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const assignments = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
  const assignmentList = assignments.filter((assignment) => assignment.course === courseId);
  const dispatch = useDispatch();

  // Dialog box to confirm deletion
  const handleDelete = (assignmentId: string) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this assignment?");
    if (isConfirmed) {
        dispatch(deleteAssignment(assignmentId));
    }
};

  return (
    <div className="me-5">

        <table style={{ width:"100%" }}>
            <tbody>
            <tr>
                <td className="w-25"><input className="form-control" placeholder="Search for Assignments" /></td>
                <td className="float-end p-2">
                    <div className="d-flex align-items-center justify-content-end">
                        <button className="btn btn-light" style={{ height: "calc(2.25rem + 2px)", whiteSpace: "nowrap", border: "1px solid #ced4da" }}><FaPlus /> Group</button>
                        <button
                            className="btn btn-danger"
                            style={{ height: "calc(2.25rem + 2px)", whiteSpace: "nowrap", border: "1px solid #ced4da" }}
                            onClick={() => navigate(`/Kanbas/Courses/${courseId}/Assignments/New`)}>
                                <FaPlus /> Assignment
                        </button>
                        <button className="btn btn-light" style={{ height: "calc(2.25rem + 2px)", whiteSpace: "nowrap", border: "1px solid #ced4da" }}><FaEllipsisV /></button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
        <hr />

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
                        <button
                            className="btn btn-danger px-2 me-3"
                            onClick={() => handleDelete(assignment._id)} style={{ cursor: 'pointer' }} >
                                Delete
                        </button>
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                    </span>
                </li>))}
            </ul>
            </li>
        </ul>
    </div>
);}

export default Assignments;