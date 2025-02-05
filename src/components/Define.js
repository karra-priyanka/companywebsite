import React,{useState,useEffect} from "react";
import "./Define.css"; // Importing the CSS file
import Define1 from '../assets/images/Define1.jpeg'
import Define2 from '../assets/images/Define2.jpeg'
import Define3 from '../assets/images/Define3.jpeg'
import { MdArrowOutward } from "react-icons/md";

const Define = () => {

  const images=[
    Define1,
    Define2,
    Define3,
  ]

  const [currentImage,setCurrentImage]=useState(0)

  useEffect(()=>{
    const interval=setInterval(()=>{
      setCurrentImage((preIndex)=>(preIndex + 1) % images.length);
    },2000)
    return ()=>clearInterval(interval);
  },[])

  return (
    <div className="define-container d-flex row mt-5">
      <div className="define-image-container col-sm-12 col-md-12 col-lg-6">
      <h1 className="define-title">What defines us?</h1>
        <img
          src={images[currentImage]} 
          alt="Person at a computer"
          className="define-image"
        />
      </div>

      <div className="define-text-container col-sm-12 col-md-12 mx-auto mt-5 col-lg-6">
        <p className="define-description">
          <span style={{color:"#407BFF",fontWeight:"bold"}}>SRNR IT Solutions Pvt Ltd</span> is one of the Software organization to develop better Software applications, Software development and Software consultancy. Beyond the type and size of your business, our certified and skilled developers are here to help you with solution to your business problems through advanced software solutions.
        </p>
        <p className="define-description">
        Our HR Team is prepared to assist you with competent Candidates for your expanding company. We also provide all HR policies and HR services, which help you identify the best HR solutions tailored to your needs.
        </p>
        <p className="define-description">
        We offer human resources expertise that is aware of business requirements, as well as can offer workforce and resource management in unorganized manufacturing industries in need. We can supply resource management while maintaining our security.
        </p>
        <a href="/contactus" className="define-buuton btn btn-primary"> Know More  <span>< MdArrowOutward /></span></a>
      </div>
    </div>
  );
};

export default Define;

