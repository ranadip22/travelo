import React from "react";
import './most-popular.css'

function MostPopular() {
    return (
        <section id="most-popular">
            <h1>Most Popular Tours</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Cursus et bibendum interdum vitae laoreet commodo libero.</p>
            <div className="grid-3">
                <div className="col">
                    <img src="./assets/3164a7e883052fb38d45abdc75a0c2f5.jpg" alt="" width={300} height={200} /><br />
                    <span className="head">Fun in Paris</span><br />
                    <div className="img-text">
                        Lorem ipsum dolor sit amet consectetur. Cursus et bibendum interdum vitae laoreet commodo libero.
                    </div>
                    <div className="label">15 days</div>
                </div>
                <div className="col">
                    <img src="./assets/6f4fd9d7e94dea80f2f08440e02b031d.jpg" alt="" width={300} height={200} /><br />
                    <span className="head">Australia</span>
                    <div className="img-text">
                        Lorem ipsum dolor sit amet consectetur. Cursus et bibendum interdum vitae laoreet commodo libero.
                    </div>
                    <div className="label">15 days</div>
                </div>
                <div className="col">
                    <img src="./assets/6f4fd9d7e94dea80f2f08440e02b031d.jpg" alt="" width={300} height={200} /><br />
                    <span className="head">London Tour</span>
                    <div className="img-text">
                        Lorem ipsum dolor sit amet consectetur. Cursus et bibendum interdum vitae laoreet commodo libero.
                    </div>
                    <div className="label">15 days</div>
                </div>
            </div>
        </section>
    )
}

export default MostPopular