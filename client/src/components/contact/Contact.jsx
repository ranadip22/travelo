import React, { useState } from 'react';
import './contact.css'
import Navbar from '../navbar/Navbar';

function Contact() {
    const [isContainerChanged, setContainerChanged] = useState(false);

    const handleIconClick = () => {
        setContainerChanged(true);
    };

    const handleCloseBtnClick = () => {
        setContainerChanged(false);
    };

    return (
        <>
            <Navbar />
            <div className={`container ${isContainerChanged ? 'change' : ''}`}>
                <div className="loading">
                    <div className="loading-bg" />
                    <i className="fa-regular fa-envelope" onClick={handleIconClick} />
                </div>
                <div className="form-wrapper">
                    <button className="close-btn" onClick={handleCloseBtnClick}>X</button>
                    <form className="contact-form">
                        <h1 className="form-heading">Contact Us</h1>
                        <div className="input-groups">
                            <div className="input-group">
                                <label htmlFor="name" className="field-label">
                                    Name
                                </label>
                                <input type="text" className="field" placeholder="Enter Your Name" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="email" className="field-label">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className="field"
                                    placeholder="Enter Your Email Address"
                                />
                            </div>
                        </div>
                        <div className="textarea-group">
                            <label htmlFor="message" className="field-label">
                                Message
                            </label>
                            <textarea
                                className="field"
                                placeholder="Your Message here"
                                defaultValue={""}
                            />
                        </div>
                        <button type="button" className="submit-btn">
                            <span>Submit</span> <i className="fa-solid fa-arrow-right" />
                        </button>
                        <p>
                            For any question contact our 24/7 call center:
                            <span>8910851165</span>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact