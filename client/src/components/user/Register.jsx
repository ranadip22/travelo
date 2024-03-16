// import React from "react";
// import './Register.css';
// import Navbar from "../navbar/Navbar";
// import { Link } from "react-router-dom";

// function Register() {
//     return (
//         <>
//             <Navbar />
//             <div className="reg-bg">
//                 <div className='wrapper-reg'>
//                     <form action="">
//                         <h1>Register</h1>
//                         <div className="input-box">
//                             <div className="input-field">
//                                 <input type="text" placeholder='First Name' name='fname' required />
//                             </div>
//                             <div className="input-field">
//                                 <input type="text" placeholder='Last Name' name='lname' required />
//                             </div>
//                             <div className="input-field">
//                                 <input type="date" placeholder='Date of Birth' name='date' required />
//                             </div>
//                             <div className="input-field">
//                                 <div className="gender">
//                                     <label htmlFor="gender" name='gender'>Gender</label>
//                                     <input type="radio" /> Male
//                                     <input type="radio" /> Female
//                                 </div>
//                             </div>
//                             <div className="input-field">
//                                 <input type="text" placeholder='Mobile Number' name='phone' required />
//                             </div>
//                             <div className="input-field">
//                                 <input type="text" placeholder='E-mail ID' name='email' required />
//                                 <i class="fa-solid fa-envelope icon"></i>
//                             </div>
//                             <div className="input-field">
//                                 <input type="text" placeholder='Username' name='username' required />
//                                 <i class="fa-solid fa-user icon"></i>
//                             </div>
//                             <div className="input-field">
//                                 <input type="password" placeholder='Password' name='password' required />
//                                 <i class="fa-solid fa-key icon"></i>
//                             </div>
//                         </div>

//                         <button type="submit" className="button-2">Register</button>

//                         <div className="register-link">
//                             <p>Already have an account? <Link to="/login">Login</Link></p>
//                         </div>
//                     </form>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default Register

// Register.js

import React, { useState } from "react";
import "./Register.css";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        date: "",
        gender: "",
        phone: "",
        email: "",
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/register", formData);
            alert("User registered successfully");
            // Optionally, you can redirect to another page upon successful registration
        } catch (error) {
            alert(error.response.data.error || "An error occurred");
        }
    };
    return (
        <>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <div className="reg-bg">
                    <div className="wrapper-reg">
                        <form action="">
                            <h1>Register</h1>
                            <div className="input-box">
                                <div className="input-field">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        name="fname"
                                        required
                                        className="input"
                                        value={formData.fname}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input-field">
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        name="lname"
                                        required
                                        className="input"
                                        value={formData.lname}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input-field">
                                    <input
                                        type="date"
                                        placeholder="Date of Birth"
                                        name="date"
                                        required
                                        className="input"
                                        value={formData.date}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input-field">
                                    <div className="gender">
                                        <label htmlFor="gender" name="gender">
                                            Gender
                                        </label>
                                        <input type="radio" className="gender-input" onChange={handleChange} />{" "} Male
                                        <input type="radio" className="gender-input" onChange={handleChange} />{" "} Female
                                    </div>
                                </div>
                                <div className="input-field">
                                    <input
                                        type="text"
                                        placeholder="Mobile Number"
                                        name="phone"
                                        required
                                        className="input"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input-field">
                                    <input
                                        type="text"
                                        placeholder="E-mail ID"
                                        name="email"
                                        required
                                        className="input"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <i className="fa-solid fa-envelope icon"></i>
                                </div>
                                <div className="input-field">
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        required
                                        className="input"
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                    <i className="fa-solid fa-user icon"></i>
                                </div>
                                <div className="input-field">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        required
                                        className="input"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <i className="fa-solid fa-key icon"></i>
                                </div>
                            </div>

                            <button type="submit" className="button-2">
                                Register
                            </button>

                            <div className="register-link">
                                <p>
                                    Already have an account? <Link to="/login">Login</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Register;
