import React from "react";
import './Register.css';
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

function Register() {
    return (
        <>
            <Navbar />
            <div className="reg-bg">
                <div className='wrapper-reg'>
                    <form action="">
                        <h1>Register</h1>
                        <div className="input-box">
                            <div className="input-field">
                                <input type="text" placeholder='First Name' required />
                            </div>
                            <div className="input-field">
                                <input type="text" placeholder='Last Name' required />
                            </div>
                            <div className="input-field">
                                <input type="date" placeholder='Date of Birth' required />
                            </div>
                            <div className="input-field">
                                <div className="gender">
                                    <label htmlFor="gender">Gender</label>
                                    <input type="radio" /> Male
                                    <input type="radio" /> Female
                                </div>
                            </div>
                            <div className="input-field">
                                <input type="text" placeholder='Mobile Number' required />
                            </div>
                            <div className="input-field">
                                <input type="text" placeholder='E-mail ID' required />
                                <i class="fa-solid fa-envelope icon"></i>
                            </div>
                            <div className="input-field">
                                <input type="text" placeholder='Username' required />
                                <i class="fa-solid fa-user icon"></i>
                            </div>
                            <div className="input-field">
                                <input type="password" placeholder='Password' required />
                                <i class="fa-solid fa-key icon"></i>
                            </div>
                        </div>

                        <button type="submit" className="button-2">Register</button>

                        <div className="register-link">
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Register