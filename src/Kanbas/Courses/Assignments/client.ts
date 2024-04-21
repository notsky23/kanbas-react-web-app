import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE?.replace(/\/+$/, "");

// const COURSES_API = "http://localhost:4000/api/courses";
// const COURSES_API = "https://kanbas-node-server-app-vvg4.onrender.com/api/courses";
const COURSES_API = `${API_BASE}/api/courses`;
// const ASSIGNMENTS_API = "http://localhost:4000/api/assignments";
// const ASSIGNMENTS_API = "https://kanbas-node-server-app-vvg4.onrender.com/api/assignments";
const ASSIGNMENTS_API = `${API_BASE}/api/assignments`;

// Create
export const createAssignment = async (courseId: string, assignment: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
    return response.data;
};

// Read/Retrieve
// Get all assignments
export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};
// Get a single assignment
export const findAssignmentById = async (courseId: string, assignmentId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/assignments/${assignmentId}`);
    return response.data;
};

// Update
export const updateAssignment = async (assignment: any) => {
    const response = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return response.status;
};

// Delete
export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.status;
};