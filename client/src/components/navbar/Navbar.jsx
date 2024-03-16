import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY > 300) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)
  return (
    <div className={color ? 'navbar scrolled' : 'navbar'}>
      <div className="logo">
        <Link to="/" className='logo'>
          Tra<span className='logo-sub'>velo</span>
        </Link>
      </div>
      <div className="navbar-items">
        <Link className="navbar-item" to='/'>Home</Link>
        <Link className="navbar-item" to='/#packages'>Package</Link>
        <Link className="navbar-item" to='/#destination'>Destination</Link>
        <Link className="navbar-item" to='/about'>About Us</Link>
        <Link className="navbar-item" to='/contact'>Contact us</Link>
        <Link className="navbar-item" to='/login'>Login</Link>
      </div>
    </div>
  )
};

export default Navbar;