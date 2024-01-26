import React from "react";
import './Newsletter.css'

function Newsletter() {
    return (
        <section id="newsletter">
            <div className="bg-1">
                <div className="form-news">
                    <p className="header-news">Join the newsletter</p>
                    <p className="header-news-bg">To receive our best monthly deals</p>
                    <form action="" className="form">
                        <input type="email" className="email" placeholder="Enter your Email" />
                        <input type="submit" value="Subscribe" className="subscribe" />
                    </form>
                </div>
            </div>
            <div className="bg-2"></div>
        </section>
    )
}

export default Newsletter