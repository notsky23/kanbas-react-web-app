import axios from "axios";
axios.defaults.withCredentials = true;

export const BASE_API = process.env.REACT_APP_API_BASE?.replace(/\/+$/, "");
export const COURSES_API = `${BASE_API}/api/courses`;

export interface Course {
    _id: string,
    name: string,
    number: string,
    section: string,
    startDate: Date,
    endDate: Date,
    semester: string,
    sem: string,
    image: string
};

// Create a new course
export const createCourse = async (course: Course) => {
    const { _id, ...courseWithoutId } = course;
    const courseDataToSend = _id ? course : courseWithoutId;
    const response = await axios.post(`${COURSES_API}`, courseDataToSend);
    return response.data;
}

// Retrieve all courses
export const findAllCourses = async () => {
    const response = await axios.get(`${COURSES_API}`);
    return response.data;
};

// Retrieve a course by ID
export const findCourseById = async (id: string | null) => {
    if (!id) {
        throw new Error("No course ID provided");
    }
    try {
        const response = await axios.get(`${COURSES_API}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch course:', error);
        throw error;
    }
}

// Retrieve a course by sem
export const findCoursesBySem = async (sem: string) => {
    const response = await axios.get(`${COURSES_API}?sem=${sem}`);
    return response.data;
}

// Update a course
export const updateCourse = async (courseId: string, courseData: any) => {
    try {
        const response = await axios.put(`${COURSES_API}/${courseId}`, courseData);
        return response.data;
    } catch (error) {
        console.error('Failed to update course:', error);
        throw error;  // Re-throw the error if you want to handle it in the component
    }
};

// Delete a course
export const deleteCourse = async (courseId: string) => {
    const response = await axios.delete(`${COURSES_API}/${courseId}`);
    return response.data;
}