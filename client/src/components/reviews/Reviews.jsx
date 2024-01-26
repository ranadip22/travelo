import React from "react";
import './Reviews.css'

function Reviews() {
    return (
        <section id="review-bg">
            <img src="./assets/c6b3aac1b7ced48c66175d5885f7b556.jpg" alt="" width={630} height={315} />
            <div className="review">
                <p className="review-head">
                    Top review
                    <p className="place">
                        Miami Beach
                    </p>
                </p>
                <p className="review-text">
                    My fiance and I had never been to Miami Beach, but wanted to plan a unique elopement trip to Florida. We had no idea where to start, and turned to some internet research to find the services of Zicasso. I cannot speak highly enough about our 3 week trip to this place.
                </p>
                <p className="cust-name">- Akash Yadav</p>
            </div>
        </section>
    )
}

export default Reviews