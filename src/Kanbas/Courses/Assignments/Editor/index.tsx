import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
// import { assignments } from "../../../Database";
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
    addAssignment,
    updateAssignment,
    selectAssignment,
  } from "../reducer"
import { KanbasState } from "../../../store";

function AssignmentEditor() {
    const { courseId, assignmentId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Retrieve the list of assignments and the current assignment from Redux state
    const assignmentsList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
    const [assignment, setAssignment] = useState({
        title: 'New Title',
        description: 'New Description',
        points: 100,
        dueDate: '',
        availableFromDate: '',
        availableUntilDate: '',
    });

    // const handleSave = () => {
    //     console.log("Actually saving assignment TBD in later assignments");
    //     navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    // };

    // const [points, setPoints] = useState(assignment?.points || 100);
    // const handlePointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setPoints(parseInt(e.target.value, 10 || 0));
    // };

    // Load existing assignment for editing
    useEffect(() => {
        if (assignmentId) {
            const existingAssignment = assignmentsList.find(a => a._id === assignmentId);
            if (existingAssignment) {
                setAssignment(existingAssignment);
            }
        } else {
            // Reset to default values when creating a new assignment
            setAssignment({
                title: '',
                description: '',
                points: 100,
                dueDate: '',
                availableFromDate: '',
                availableUntilDate: '',
            });
        }
    }, [assignmentId, assignmentsList]);

    // Handle form field changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setAssignment(prev => ({
            ...prev,
            [name]: name === 'points' ? parseInt(value, 10) || 0 : value,
        }));
    };

    // Save the assignment
    const handleSave = () => {
        if (assignmentId === 'New') {
            // Create new assignment
            // Generate a new unique ID for the assignment or let the reducer handle it
            dispatch(addAssignment({
                ...assignment,
                course: courseId, // Ensure the course ID is included
                _id: new Date().getTime().toString(), // Example of generating a unique ID
            }));
        } else {
            // Update existing assignment
            dispatch(updateAssignment({
                ...assignment,
                _id: assignmentId, // Ensure the correct ID is passed for the update
            }));
        }
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div className="flex-grow-1 pe-2 pe-md-3">
            <div className="d-flex justify-content-end">
                <button className="btn btn-light text-success" style={{ height: "2em" }}><FaCheckCircle /> Published</button>
                <button className="btn btn-light border rounded" style={{ height: "2em", border: "1px solid dimgray" }}><FaEllipsisV /> </button>
            </div>

            <hr />

            <h3>Assignment Name</h3>
            <input
                name="title"
                value={assignment.title}
                onChange={handleChange}
                className="form-control mb-3"
            />
            <textarea
                name="description"
                value={assignment.description}
                onChange={handleChange}
                className="form-control mt-3"
                style={{ maxWidth: "100%", height: "150px" }}
                >
            </textarea>

            <div className="container-fluid m-3">
                <div className="row my-4">
                    <div className="col col-3 d-flex justify-content-end align-items-center">
                        <label htmlFor="points">Points</label>
                    </div>
                    <div className="col col-7">
                        <input
                            id="points"
                            name="points"
                            type="number"
                            min="0"
                            max="100"
                            value={assignment?.points} onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>

                {/* <div className="row my-4"> 
                    <div className="col col-3 d-flex justify-content-end align-items-center">
                        <label htmlFor="assignmentGroup">Assignment Group</label>
                    </div>
                    <div className="col col-7">
                        <select id="assignmentGroup" className="form-control">
                            <option>ASSIGNMENT</option>
                            <option>QUIZ</option>
                            <option>EXAM</option>
                            <option>PROJECT</option>
                        </select>
                    </div>
                </div> */}

                {/* <div className="row my-4"> 
                    <div className="col col-3 d-flex justify-content-end align-items-center">
                        <label htmlFor="displayGrade">Display Grade As</label>
                    </div>
                    <div className="col col-7">
                        <select id="displayGrade" className="form-control">
                            <option>Percentage</option>
                            <option>Absolute</option>
                        </select>
                    </div>
                </div> */}

                {/* <div className="row my-4"> 
                    <div className="col col-3 d-flex justify-content-end align-items-center">
                    </div>
                    <div className="col col-7">
                    <div className="form-check d-flex align-items-center" style={{ marginLeft: "-20px" }}>
                        <input type="checkbox" id="countAsGrade" /> &emsp;
                        <label htmlFor="countAsGrade">Do not count this assignment towards the final grade</label>
                    </div>
                    </div>
                </div> */}

                <div className="row my-4"> 
                    <div className="col col-3 d-flex justify-content-end pt-3">
                        <label htmlFor="assign">Assign</label>
                    </div>
                    <div className="col col-7">
                        <div className="card rounded-bottom-0">
                            <div className="card-body pb-5">
                                {/* <div className="mb-3">
                                    <label htmlFor="assign" className="ps-1 pt-4" style={{ fontWeight: "bold" }}>Assign to</label>
                                    <input id="assign" className="form-control me-3" />
                                </div> */}
                                <div className="mb-2">
                                    <label htmlFor="due" className="ps-1 pt-4" style={{ fontWeight: "bold" }}>Due</label>
                                    <input
                                        id="due"
                                        name="dueDate"
                                        type="date"
                                        value={assignment.dueDate}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="row mb-5">
                                    <div className="col-6">
                                        <label htmlFor="from" className="ps-1 pt-4" style={{ fontWeight: "bold" }}>Available from</label>
                                        <input
                                            id="from"
                                            name="availableFromDate"
                                            type="date"
                                            value={assignment.availableFromDate}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="until" className="ps-1 pt-4" style={{ fontWeight: "bold" }}>Until</label>
                                        <input
                                            id="until"
                                            name="availableUntilDate"
                                            type="date"
                                            value={assignment.availableUntilDate}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* <div>
                        <button className="btn btn-secondary border-secondary w-100 rounded-bottom-2 rounded-top-0"><FaPlus/> Add</button>
                    </div> */}
                    </div>
                </div>
            </div>

            <br /><br />
            <hr />
            <br />

            <div className="d-flex justify-content-between me-0 mb-3 pe-0" style={{ paddingLeft: "0" }}>
                <div className="form-check d-flex align-items-center">
                    <input type="checkbox" id="notify" /> &emsp;
                    <label htmlFor="notify">Notify users that this content has changed</label>
                </div>
                <div className="float-end">
                    <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                        Save
                    </button>
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger float-end">
                        Cancel
                    </Link>
                </div>
            </div>
            
        </div>
    );
}

export default AssignmentEditor;