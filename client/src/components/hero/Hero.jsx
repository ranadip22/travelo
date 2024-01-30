import React, { useState } from "react";
import "./hero.css";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [formData, setFormData] = useState({
    whereTo: "",
    bookingType: "",
    date: "",
    guest: "",
  });

  const navigate = useNavigate(); // Call useNavigate at the top level

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/search', { state: formData }); // Use the navigate function
  };
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY > 300) {
      setColor(true);
    } else {
      setColor(false);
    }
  }
  window.addEventListener("scroll", changeColor);
  return (
    <div className="hero">
      <Navbar />
      <div className="text-1">Explore the world</div>
      <br></br>
      <div className="text-2">A modern website for travel</div>
      <form className="search" onSubmit={handleSubmit} action="/search" method="get">
        <input
          className="form-1"
          type="text"
          name="whereTo"
          placeholder="Where To"
          value={formData.whereTo}
          onChange={handleChange}
        />
        <input
          className="form-1"
          type="text"
          name="bookingType"
          placeholder="Booking Type"
          value={formData.bookingType}
          onChange={handleChange}
        />
        <input
          className="form-1"
          type="date"
          name="date"
          placeholder="Date"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          className="form-1"
          type="text"
          name="guest"
          placeholder="Guest"
          value={formData.guest}
          onChange={handleChange}
        />
        <button className="search-btn" type="submit">
          <i className="fa-solid fa-magnifying-glass fa-2xl" />
        </button>
      </form>
    </div>
  )
}

export default Hero