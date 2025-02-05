import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Team.css";
import satya from "../assets/images/satya2.svg";
import raja from "../assets/images/raja1.svg";
import Jagadeesh from "../assets/images/jagadeesh1.svg";
import narasimhulu from "../assets/images/narasimhulu2.svg";
import Raju from "../assets/images/raju1.svg";
import sridhar from "../assets/images/sridhar1.svg";
import Jayaram from "../assets/images/jayaram1.svg";
import manasa from "../assets/images/mansa4.svg";
import logo from "../assets/images/logo1.svg";
import SRNRLOGO from'../assets/images/SRNR_LOGO.png';

const Team = () => {
  const teamMembers = [
    { name: "Narasimhulu S", role: "Founder/CEO", img: narasimhulu },
    { name: "Murugan Jagadeesa Kumar Iyar", role: "Co-Founder", img: Jagadeesh},
    { name: "Sridhar PS", role: "CEO/Founder", img: sridhar },
    { name: "Rajesh Murgeshan N", role: "Director", img: raja },
    { name: "Jayarama Reddy L", role: "Director", img: Jayaram },
    { name: "Salman Raju B", role: "Director", img: Raju },
    { name: "Satya Narayana M", role: "Director", img: satya },
    { name: "Manasa Kancharla", role: "HR", img: manasa },
  ];

  return (
    <div className="team-carousel">
      <div className="text"><h2 style={{textDecoration:"none"}}>Our Team</h2></div>
      <Swiper
      modules={[Pagination, Autoplay]}
        slidesPerView={3} 
        centeredSlides={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
          
        }}
        onSwiper={(swiper) => console.log(swiper)}
        loop
        className="mySwiper"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="team-card">
              <div className="back">
                <div className="logo-container" style={{height:"10px"}}>
                  <img src={SRNRLOGO} alt="logo" className="logo"/>
                </div>
              <div className="image-container">
                <img src={member.img} alt={member.name} />
              </div>
              </div>
              <h3>{member.name}</h3>
              <p>Role</p>
              <h4>{member.role}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
