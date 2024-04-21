import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Profile() {
    const [profile, setProfile] = useState({
        _id: "",
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        role: "STUDENT"
    });
    const navigate = useNavigate();

    // Read/Retrieve the user's profile
    const fetchProfile = async () => {
        const account = await client.profile();
        // Set the date of birth in the correct format
        console.log(account);
        if (account.dob) {
            const formattedDate = new Date(account.dob).toISOString().split('T')[0]; // Converts to YYYY-MM-DD format
            account.dob = formattedDate;
        }
        setProfile(account);
    };
    useEffect(() => {fetchProfile();}, []);

    // Update the user's profile
    const saveProfile = async () => {
        try {
            await client.updateUser(profile);
            if (notify) {
                // alert('Profile updated successfully!'); // Simple alert to notify user
                toast.success('Profile updated successfully!');
            }
        } catch (error) {
            const message = (error as Error).message;
            if (notify) {
                // alert('Failed to update profile: ' + message); // Notify user of any errors
                toast.error('Failed to update profile: ' + message);
            }
        }
    };

    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/Account/Signin");
    };

    // State for toggling password visibility
    const [showPassword, setShowPassword] = useState(false);
    // State for toggling hover effect on password visibility icon
    const [hover, setHover] = useState(false);
    // State for displaying a toast notification
    const [notify, setNotify] = useState(false);

    return (
        <div className="container p-3 md-4">
            <ToastContainer />
            <div className="d-flex justify-content-between align-items-center">
                <h1>Profile</h1>
                <Link className="btn btn-warning" to="/Kanbas/Account/Admin/Users" >All Users</Link>
            </div>
            {profile && (
                <div>
                    {/* ID */}
                    {/* <div className="mb-3">
                        <label className="form-label" htmlFor="id" >User ID:</label>
                        <input
                            className="form-control"
                            id="id"
                            placeholder="Enter ID"
                            value={profile._id}
                            onChange={(e) => setProfile({ ...profile, _id: e.target.value})}
                            readOnly
                        />
                    </div> */}

                    {/* Username */}
                    <div className="mb-3">
                        <label className="form-label" htmlFor="username" >Username:</label>
                        <input
                            className="form-control"
                            id="username"
                            placeholder="Enter Username"
                            value={profile.username}
                            onChange={(e) => setProfile({ ...profile, username: e.target.value})}
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <label className="form-label" htmlFor="password">Password:</label>
                        <div className="input-group">
                            <input
                                className="form-control"
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Password"
                                value={profile.password}
                                onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                                style={{ paddingRight: "40px" }}
                            />
                            <div 
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                                onClick={() => setShowPassword(!showPassword)} 
                                className="btn btn-outline-secondary" 
                                style={{
                                    position: 'absolute',
                                    border: 'none',
                                    background: 'transparent',
                                    top: '50%', // Center vertically
                                    right: '10px', // Position from the right
                                    transform: 'translateY(-50%)', // Further adjust vertical centering
                                    cursor: 'pointer',
                                    zIndex: 2, // Ensure the icon is clickable and on top
                                    color: hover ? 'gray' : 'inherit' // Change color on hover
                                }}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </div>
                        </div>
                    </div>

                    {/* First and Last Name */}
                    <div className="mb-3">
                        <label className="form-label" htmlFor="firstName" >First Name:</label>
                        <input
                            className="form-control"
                            id="firstName"
                            placeholder="Enter First Name"
                            value={profile.firstName}
                            onChange={(e) => setProfile({ ...profile, firstName: e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="lastName" >Last Name:</label>
                        <input
                            className="form-control"
                            id="lastName"
                            placeholder="Enter Last Name"
                            value={profile.lastName}
                            onChange={(e) => setProfile({ ...profile, lastName: e.target.value})}
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email" >Email:</label>
                        <input
                            className="form-control"
                            id="email"
                            type="email"
                            placeholder="Enter Email"
                            value={profile.email}
                            onChange={(e) => setProfile({ ...profile, email: e.target.value})}
                        />
                    </div>

                    {/* Date of Birth */}
                    <div className="mb-3">
                        <label className="form-label" htmlFor="dob" >Date of Birth:</label>
                        <input
                            className="form-control"
                            id="dob"
                            type="date"
                            value={profile.dob}
                            onChange={(e) => setProfile({ ...profile, dob: e.target.value})}
                        />
                    </div>

                    {/* Role */}
                    <div className="mb-4">
                        <label className="form-label" htmlFor="role" >Role:</label>
                        <select
                            className="form-control"
                            id="role"
                            value={profile.role}
                            onChange={(e) => setProfile({...profile, role: e.target.value})}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </div>

                    {/* Sign out */}
                    <div className="mb-4">
                        <button
                            className="btn btn-danger w-100"
                            id="role"
                            onClick={signout}
                        >
                            Sign out
                        </button>
                    </div>

                    {/* Save Profile */}
                    <div className="d-flex justify-content-between me-0 mb-3 pe-0" style={{ paddingLeft: "0" }}>
                        <div className="form-check d-flex align-items-center">
                            <input
                                className="form-check-input border-secondary"
                                type="checkbox"
                                id="notify"
                                checked={notify}
                                onChange={(e) => setNotify(e.target.checked)}
                            />
                                &emsp;
                            <label className="form-text text-muted" htmlFor="notify">Notify users that this content has changed</label>
                        </div>
                        <div className="float-end">
                            <button
                                className="btn btn-success ms-2 float-end"
                                onClick={saveProfile}
                            >
                                Save
                            </button>
                            {/* <Link to={`/Kanbas/Account/Profile`} className="btn btn-danger float-end">
                                Cancel
                            </Link> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}