import React from 'react';
import './Forget.css';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';

function Forgot() {
    return (
        <>
            <Navbar />
            <div className="login-bg">
                <div className='wrapper'>
                    <form action="/reset">
                        <h1>Forgot Password</h1>
                        <div className="input-box">
                            <input type="text" placeholder='E-Mail ID' required />
                            <i class="fa-solid fa-user icon"></i>
                        </div>

                        <button type="submit" className='button-1'>Reset</button>

                    </form>

                </div>
            </div>
        </>
    )
}

export default Forgot
