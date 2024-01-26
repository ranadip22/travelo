import React, { useState } from "react";
import "./hero.css";
import Navbar from "../navbar/Navbar";

function Hero() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY > 300) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className="hero">
      <Navbar />
      <div className="text-1">Explore the world</div>
      <br></br>
      <div className="text-2">A modern website for travel</div>
      <form className="search">
        <input className="form-1" type="text" placeholder="Where To" />
        <input className="form-1" type="text" placeholder="Booking Type" />
        <input className="form-1" type="date" placeholder="Date" />
        <input className="form-1" type="text" placeholder="Guest" />
        <button className="search-btn" type="submit">
          <i class="fa-solid fa-magnifying-glass fa-2xl" />
        </button>
      </form>
    </div>
  );
}

export default Hero;
