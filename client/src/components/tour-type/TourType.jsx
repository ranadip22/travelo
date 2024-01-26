import React from "react";
import './TourType.css'

function TourType() {
    return (
        <section id="tours">
            <div className="p-1">Tour Type<br />
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur. Arcu tellus varius non etiam. Id egestas nulla nunc proin.</div>
            </div>
            <div className="gallery">
                <div className="img">
                    <img src="./assets/0ee13449bd26edd10a8119a9cdfd0578.png" alt="" />
                </div>
                <div className="img">
                    <img src="./assets/05a97ad883c99cea7848cd04bc181fa0.png" alt="" />
                </div>
                <div className="img">
                    <img src="./assets/3fd0793ebae46d626986e59940148fca.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default TourType