import React from 'react';
import './Partnercompany.css'; // Import your CSS file
import Capgemini from '../assets/images/capegemini1.png'
import Aspire from "../assets/images/aspire1.png"
function Partnercompany () {
  return (
    <div className="partnercontainer" >
      <h1>Our Collaborators</h1>
      <div className="logos">
        <div className="logo-container">
          <img src={Capgemini} alt="Capgemini Logo" />
        </div>
        <div className="logo-container">
          <img src={Aspire} alt="Aspire Logo" />
        </div>
      </div>
    </div>
  );
}

export default Partnercompany;