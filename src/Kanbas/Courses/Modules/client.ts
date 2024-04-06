import axios from "axios";

// const COURSES_API = "http://localhost:4000/api/courses";
const COURSES_API = "https://kanbas-node-server-app-vvg4.onrender.com/api/courses";
// const MODULES_API = "http://localhost:4000/api/modules";
const MODULES_API = "https://kanbas-node-server-app-vvg4.onrender.com/api/modules";

// Create
export const createModule = async (courseId: any, module: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module);
    return response.data;
};

// Read/Retrieve
export const findModulesForCourse = async (courseId: any) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};

// Update
export const updateModule = async (courseId: any, module: any) => {
    const response = await axios.put(`${COURSES_API}/${courseId}/modules/${module._id}`, module);
    return response.data;
};  

// Delete
export const deleteModule = async (courseId: any, moduleId: any) => {
    const response = await axios.delete(`${COURSES_API}/${courseId}/modules/${moduleId}`);
    return response.data;
};
  