import React from "react";
import "./Ourservices.css"; // Import your CSS file
import Screen from "../assets/images/Icon 1 (1).svg"
import Stock from "../assets/images/icon 2.svg"
import Headset from "../assets/images/icon 4 (1).svg"
import Profile from "../assets/images/icon 3 (1).svg"
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

const Ourservices = () => {
  const IconsStyle={
    color:"#FFFFFF",
    height:"50px",
  }
  
    return (
    <div className="containe">
      <div className="head">
        <h2 style={{textDecoration:"none"}}>Our Services</h2>
      </div>
      <div className="services">
        <a href="/services" style={{textDecoration:"none",color:"white"}}><div className="service">
        <img src={Screen} alt=""  style={IconsStyle}/>
        <p>Technology Consulting</p>
      </div></a>
      
      <a href="/services" style={{textDecoration:"none",color:"white"}}>
        <div className="service">
          <img src={Stock} alt=""  style={IconsStyle}/>
          <p>Software Development</p>
        </div></a>
        <a href="/services" style={{textDecoration:"none",color:"white"}}>
        <div className="service">
       <img src={Profile} alt="" style={IconsStyle}/>
          <p>Innovative Solutions</p>
        </div></a>
        <a href="/services" style={{textDecoration:"none",color:"white"}}>
        <div className="service">
        <img src={Headset} alt=""  style={IconsStyle}/>
          <p>IT Support & Maintenance</p>
        </div></a>
      </div>
    </div>
  );
};

export default Ourservices;


