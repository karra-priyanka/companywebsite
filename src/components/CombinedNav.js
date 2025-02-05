import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Clogo from '../assets/images/Logo.png';
import '../components/Navbar1.css';

function CombinedNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="combined-nav">
      <div className="header-bar">
        <div className="header-info">
          <a href="#location">
          <div className="location">
            
            <span><CiLocationOn /></span>Location
          </div></a>
          <div className="phone">
            <span role="img" aria-label="telephone" ><CiPhone /></span> +91 9494751795
          </div>
          <div className=" email12 text-white">
            <span role="img" aria-label="envelope" ><MdOutlineEmail /></span><a href='mailto:srnritsolutions@gmail.com' style={{textDecoration:"none",color:"whitesmoke"}}>srnritsolutions@gmail.com</a>
          </div>
        </div>
        <div className="header-social">
          <a href="https://www.linkedin.com/in/srnr-it-solutions-359855326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app  " target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/srnr_it_solutions/profilecard/?igsh=MWpra2swdGY2Z2NmNw== " target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-logo">
            <div className="logo-container">
              <Link to="/" className="logo-container R1">
                <img src={Clogo} alt="SNR IT Solutions Logo" className="logo" />
                <span>SRNR IT SOLUTIONS</span>
              </Link>
            </div>
          </div>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto" onClick={closeMenu}> 
              <li className="nav-item div1">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item div1">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item div1">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item div1">
                <Link className="nav-link" to="/Faqs">FAQ's</Link>
              </li>
              <li className="nav-item div1">
                <Link className="nav-link" to="/careers">Careers</Link>
              </li>
              <li className="nav-item div1">
                <Link className="nav-link" to="/blogs">Blog's</Link>
              </li>
              <li className="nav-item div1">
                <Link className="nav-lin" to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default CombinedNav;