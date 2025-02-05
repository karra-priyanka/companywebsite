import React from 'react';
import './Work.css'; 
import Business from '../assets/images/business1.jpg'

const Work = () => {
  return (
    <div className="contair row ">
      <div className="banner col-sm-12 col-md-4 col-lg-3">
        <h2 className="bannerText">How we work with clients</h2>
      </div>

      <div className="contentContainer row">
        {/* Left Side: Image */}
        <div className='col-sm-12 col-md-4 col-lg-4'>
          <img
            src={Business}
            alt="Working with clients"
            className="image"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="aboutContent col-sm-12  col-md-6 col-lg-6 mt-2">
          <p className='text-dark'>
            Increasing customer demands and AI-driven market innovations are reshaping industries.
            Self-optimizing systems are now essential for staying ahead.
          </p>
          <p className='text-dark'>
            The post-digital revolution continues to gain momentum, making the need for rapid
            business transformation more critical than ever.
          </p>
          <p className='text-dark'>
            We stand by our clients, wherever they are in their transformation journey, working
            across industries to drive meaningful change and create enduring value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;

