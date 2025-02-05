import React from 'react';
import './Aphotosect.css';
import { FaArrowRight } from "react-icons/fa";
import Guy from '../assets/images/guy.jpg'
import Photo from '../assets/images/photo  1.png'

const Aphotosect = () => {
  return (
    <div className='about-titles '>
      <div>
        <p className="m-3 con text-primary"> <a href="/home" className="homeContact" style={{textDecoration:"none",color:"black"}}>Home /</a>About</p>
      </div>
      <div >
        <h1>About</h1>
      </div>
      <div className="about-us-container row">
        <div className="image-wrapper col-sm-6 col-md-6  col-lg-3 single-image">
          <img src={Guy} alt="Team working" />
        </div>

        <div className="image-column col-sm-6 col-md-6 col-lg-3">
          <div className="image-wrapper">
            <img src={Photo} alt="Collaboration" className='Wrappers' />
          </div>
          <div className="image-wrapper1 card">
            <h1>150+</h1>
            <p>Employees</p>
          </div>
        </div>

        <div className="content-sectio col-sm-12 col-md-6 col-lg-6">
            <div className='p-text'>
              <p className='text-dark'>Welcome to <strong>SRNR IT Solutions Pvt Ltd </strong>
                where innovation meets passion and also a dynamic Company focused on delivering groundbreaking solutions that transform industries. Our team of entrepreneurs, technologists, and innovators work tirelessly to bring bold ideas to life and we embrace agility, adaptability, and a hunger for constant improvement.
              </p>
              <p className='text-dark'>
              We believe in challenging the status quo, taking risks, and pushing the boundaries of what's possible.
              </p>
              <p className='text-dark'>
              SRNR IT Solutions began with a vision to disrupt the information technology industry. Since then, we have grown from a small group of dedicated professionals into a rapidly scaling company. Despite our growth, we remain true to our entrepreneurial roots: staying fast, flexible and always customer-focused.
              </p>
            </div>
          <a href='/contactus' style={{textDecoration:"none",color:"#ffffff"}} className="know-more-btn text-center">Know More <FaArrowRight /> </a> 
        </div>
      </div>
    </div>
  );
};

export default Aphotosect;
