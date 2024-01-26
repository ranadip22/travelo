import React from 'react';
import './Login.css';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="login-bg">
                <div className='wrapper'>
                    <form action="/dashboard">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder='Username' required />
                            <i class="fa-solid fa-user icon"></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder='Password' required />
                            <i class="fa-solid fa-key icon"></i>
                        </div>

                        <div className="remeber-forgot">
                            <label><input type="checkbox" />Remeber me</label>
                            <Link to="/forgot">Forgot password?</Link>
                        </div>

                        <button type="submit" className='button-1'>Login</button>

                        <div className="register-link">
                            <p>Don't have an account? <Link to="/register">Register</Link></p>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login