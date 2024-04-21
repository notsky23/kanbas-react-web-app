import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User } from "./client"
import * as client from "./client";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Signin() {
    const [credentials, setCredentials] = useState<User>({
        _id: "",
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        dob: null,
        role: "USER"
    });
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/Kanbas/Account/Profile");
    };
    const signup = () => {
        navigate("/Kanbas/Account/Signup");
    };

    // State for toggling password visibility
    const [showPassword, setShowPassword] = useState(false);
    // State for toggling hover effect on password visibility icon
    const [hover, setHover] = useState(false);

    return (
        <div className="container p-3 md-4">
            <h1 className="mb-4">Sign in</h1>
            <div className="mb-3">
                <label className="form-label" htmlFor="username" >Username</label>
                <input
                    className="form-control"
                    id="username"
                    placeholder="Enter Username"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value})}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="password" >Password</label>
                <div className="input-group">
                    <input
                        className="form-control"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        value={credentials.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value})}
                        style={{ paddingRight: "40px" }} />
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
                            zIndex: 5, // Ensure the icon is clickable and on top
                            color: hover ? 'gray' : 'inherit' // Change color on hover
                        }}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                </div>
            </div>
            <div className="my-5 me-3">
                <button className="btn btn-secondary w-100" onClick={signin}>Sign in</button>
            </div>
            <hr />
            <div className="mt-4">
                {/* <button className="btn btn-secondary mt-5" onClick={signup} >Signup</button> */}
                <Link to="/Kanbas/Account/Signup" >New User? Sign up</Link>
            </div>
            
        </div>
    );
}