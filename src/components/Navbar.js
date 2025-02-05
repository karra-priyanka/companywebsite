import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="srnrlogo.png" alt="SNR IT Solutions Logo" className="logo" />
        <span>SRNR IT SOLUTIONS</span>
      </div>
     
          <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/career" >Career</Link></li>
          <li><Link to="/blog">Employee's Blog</Link></li>
          <li><Link to="/Faq">FAQ's</Link></li>
          <li><Link to="/contact">ContactUs</Link></li>
        </ul> 
      
    </nav>
  );
}

export default Navbar;
