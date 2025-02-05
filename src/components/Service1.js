import React from "react";
import "../components/service.css";
import "../components/Service1.css";


const Service1 = () => {
  const images = [
    { src: "service1.jpg", alt: "Image 1" },
    { src: "service2.jpg", alt: "Image 2" },
    { src: "service3.jpg", alt: "Image 3" },
    { src: "service4.jpg", alt: "Image 4" },
  ];

  const contentCards = [
    {
      title: "SOFTWARE DEVELOPMENT",
      description:
        "OUR TEAM OF SKILLED DEVELOPERS CREATES CUSTOM SOFTWARE SOLUTIONS TAILORED TO EACH CLIENTS UNIQUE NEEDS , ENSURING SCALABILITY AND EFFICIENCY ",
    },
    {
      title: "TECHNOLOGY CONSULTING ",
      description: "WE OFFER EXPERT GUIDANCE TO HELP BUSINESSES NAVIGATE THE EVER-EVOLVING TECHNOLOGICAL LANDSCAPE ,ENSURING THEY STAY AHEAD OF THE CURVE",
    },
    { title: "INNOVATIVE SOLUTIONS ",
         description: "WE ARE PASSIONATE ABOUT PUSHING THE BOUNDARIES OF WHAT'S POSSIBLE, AND DEVELOPING, INNOVATIVE PRODUCTS AND SERVICES THAT REDEFINE INDUSTRIES " },
    {
      title: "IT SUPPORT & MAINTENANCE",
      description: "WE PROVIDE RELIABLE AND EFFICIENT IT SUPPORT SERVICES, ENSURING THAT OUR CLIENT'S SYSTEMS RUN SMOOTHLY AND SECURELY",
    },
  ];

  const getParagraphPaddingClass = (index) => {
    switch (index) {
      case 0:
        return "padding-large"; 
      case 1:
        return "padding-small"; 
      case 2:
        return "padding-medium"; 
      case 3:
        return "padding-extra"; 
      default:
        return "";
    }
  };

  return (
    <div className="App">
        <div className="text"> <p><a href="/home" >Home /</a>Services</p></div>
      <div className="conter mx-auto">
        {images.map((image, index) => (
          <div className="row" key={index}>
            {index % 2 === 0 ? (
              <>
                <div className=" image-card col-md-4">
                  <img src={image.src} alt={image.alt} className="card-img" style={{borderRadius:"5%"}} />
                </div>
                <div className="compact-card content-card col-md-8 mt-5">
                  <h3 className="card-title" style={{color:'#EDAE35'}}>{contentCards[index].title}</h3>
                  <p className={getParagraphPaddingClass(index)}>
                    {contentCards[index].description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="compact-card content-card col-md-8 mt-5">
                  <h3 className="card-title" style={{color:'#ce86ab'}}>{contentCards[index].title}</h3>
                  <p className={getParagraphPaddingClass(index)}>
                    {contentCards[index].description}
                  </p>
                </div>
                <div className=" image-card col-md-4">
                  <img src={image.src} alt={image.alt} className="card-img" style={{borderRadius:"5%"}}/>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service1;