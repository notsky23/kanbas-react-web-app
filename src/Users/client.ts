import axios from "axios";
axios.defaults.withCredentials = true;

export const BASE_API = process.env.REACT_APP_API_BASE?.replace(/\/+$/, "");
export const USERS_API = `${BASE_API}/api/users`;

export interface User {
    _id: string,
    username: string,
    password: string,
    firstName: string;
    lastName: string;
    email: string;
    dob: Date | null;
    role: string;
};

export const signup = async (user: any) => {
    const response = await axios.post(`${USERS_API}/signup`, user);
    return response.data;
};
export const signin = async (credentials: User) => {
    const response = await axios.post(`${USERS_API}/signin`, credentials);
    return response.data;
};
export const signout = async () => {
    const response = await axios.post(`${USERS_API}/signout`);
    return response.data;
}
export const profile = async () => {
    const response = await axios.post(`${USERS_API}/profile`);
    return response.data;
};

// Create a new user
export const createUser = async (user: User) => {
    const { _id, ...userWithoutId } = user;
    const userDataToSend = _id ? user : userWithoutId;
    const response = await axios.post(`${USERS_API}`, userDataToSend);
    return response.data;
}

// Retrieve all users
export const findAllUsers = async () => {
    const response = await axios.get(`${USERS_API}`);
    return response.data;
};

// Retrieve a user by ID
export const findUserById = async (id: string | null) => {
    // const response = await axios.get(`${USERS_API}/${id}`);
    // return response.data;

    if (!id) {
        throw new Error("No user ID provided");
    }
    try {
        const response = await axios.get(`${USERS_API}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw error;
    }
}

// Retrieve a user by role
export const findUsersByRole = async (role: string) => {
    const response = await axios.get(`${USERS_API}?role=${role}`);
    return response.data;
}

// Update a user
export const updateUser = async (user: any) => {
    try {
        const response = await axios.put(`${USERS_API}/${user._id}`, user);
        return response.data;
    } catch (error) {
        console.error('Failed to update user:', error);
        throw error;  // Re-throw the error if you want to handle it in the component
    }
};

// Delete a user
export const deleteUser = async (user: User) => {
    const response = await axios.delete(`${USERS_API}/${user._id}`);
    return response.data;
}