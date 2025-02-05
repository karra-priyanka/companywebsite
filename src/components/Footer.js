import React from 'react';
import './Footer.css';
import Logo from '../assets/images/Png logo.png';
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="location">
      <div className="row">
        <div className="img1">
          <img src={Logo} className="img" alt="SRNR IT Solutions Logo" />
          <h3 className="title1">SRNR IT SOLUTIONS</h3>
        </div>
        <div className="mains">
          <div className="home">
            <a href="/" className="mt-1">Home</a>
            <a href="/about" className="mt-1">About</a>
            <a href="/services" className="mt-1">Services</a>
            <a href="/faqs" className="mt-1">FAQ's</a>
            <a href="/careers" className="mt-1">Careers</a>
            <a href="/blogs" className="mt-1">Blog's</a>
            
          </div>
          <div className="contact">
            <a href="/contactus" className="cont">Contact Us</a>
            <a href="/privacypolicy" className="pri">Privacy Policy</a>
            <a href="/termsandconditions" className="ter">Terms & Conditions</a>
          </div>
          <div className="address">
            <div className="mt-2 add1">
              <i className="fas fa-map-marker-alt mr-2" style={{marginTop:"6px"}}></i>
              Flat No: 102, Srinilaya Apartments, Opp: SR Nagar New Police Station, S.R. Nagar, Hyderabad-500038.
            </div>
            <div className="mt-2 add2">
              <i className="fas fa-phone"></i> (+91) 949-475-1795
            </div>
            <div className="mt-2 add3">
              <i className="fas fa-envelope" style={{marginTop:"6px"}}></i> srnritsolutions@gmail.com
            </div>
          </div>
          <div className="coll">
            <h3 className="new">Newsletter</h3>
            <p>We keep watch on how campaigns respond to the biggest challenges facing humanity.</p>
            <a href='mailto:srnritsolutions@gmail.com' className='btn btn-primary'>Send E-mail</a>
          </div>
        </div>
        <div className="row">
          <div className="arrow col-sm-12 ms-5">
            <div className="thick-line col-sm-12 col-md-11 col-lg-11" />
            <div className="arr1 col-sm-1 col-md-1 col-lg-1" id="#home">
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="a1" style={{ textDecoration:"none"}}>
                  <i className="bi bi-arrow-up-square-fill" style={{fontSize:"25px", color:"whitesmoke"}}></i>
              </a>
            </div>
          </div>
        </div>
        <div className="bottom row  mt-3 justify-content-center ">
          <div className="bot">
            <div className="copy  col-sm-12 col-md-9 col-lg-10">Legal &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<AiOutlineCopyrightCircle /> Copyrights <span style={{ color: "#4a7ef2" }}>SRNR IT SOLUTIONS</span> All Rights Reserved .</div>
            {/* <div className='social-icon  col-sm-12 col-md-2 col-lg-2'> */}
            <a href='https://www.linkedin.com/in/srnr-it-solutions-359855326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app  ' target='_blank'  className='social-icons'><ImLinkedin /></a>
            <a href='https://www.instagram.com/srnr_it_solutions/profilecard/?igsh=MWpra2swdGY2Z2NmNw== ' target='_blank' className='social-icons'><FaInstagramSquare /></a>
            {/* </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;