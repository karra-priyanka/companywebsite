import React from "react";
import "../components/service.css"


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
        "OUR TEAM OF SKILLED DEVELOPERS CREATES CUSTOM SOFTWARE SOLUTIONS THAT ORDER TO EACH CLIENTS'S UNIQUE NEEDS , ENSURING SCALABILITY AND EFFICIENCY ",
    },
    {
      title: "TECHOLOGY CONSULTING ",
      description: "WE OFFER EXPERT GUIDANCE TO HELP BUSINESS NAVIGATE THE EVER-EVOLVING TECHNOLOGICAL LANDSCAPE ,ENSURING THEY STAY AHEAD OF THE CURVE",
    },
    { title: "INNOVATIVE SOLUTIONS ",
         description: "WE ARE PASSINATE ABOUT PUSHING THE BOUNDARIES OF WHAT'S POSSIBLE, AND DEVELOPIND, INNOVATIVE PRODUCTS AND SERVICES THAT REDEFINE INDUSTRIES " },
    {
      title: "IT SUPPORT & MAINTENANCE",
      description: "WE PROVIDE RELIABLE AND EFFICIENT IT SUPPORT SERVICES, ENSURING THAT OUR CLIENT'S SYSTEMS RUN SMOOTHLY AND SECURELY",
    },
  ];

  // Function to get unique padding class based on the card index
  const getParagraphPaddingClass = (index) => {
    switch (index) {
      case 0:
        return "padding-large"; // Large padding for content card 1
      case 1:
        return "padding-small"; // Small padding for content card 2
      case 2:
        return "padding-medium"; // Medium padding for content card 3
      case 3:
        return "padding-extra"; // Extra padding for content card 4
      default:
        return "";
    }
  };

  return (
    <div className="App">
        <div className="text"> <p><a href="#" >Home /</a>Contact</p></div>
      <div className="conter">
        {images.map((image, index) => (
          <div className="row" key={index}>
            {/* For even indexed rows, image comes first */}
            {index % 2 === 0 ? (
              <>
                <div className="compact-card image-card">
                  <img src={image.src} alt={image.alt} className="card-image" />
                </div>
                <div className="compact-card content-card">
                  <h3 className="card-title">{contentCards[index].title}</h3>
                  <p className={getParagraphPaddingClass(index)}>
                    {contentCards[index].description}
                  </p>
                </div>
              </>
            ) : (
              // For odd indexed rows, content comes first
              <>
                <div className="compact-card content-card">
                  <h3 className="card-title">{contentCards[index].title}</h3>
                  <p className={getParagraphPaddingClass(index)}>
                    {contentCards[index].description}
                  </p>
                </div>
                <div className="compact-card image-card">
                  <img src={image.src} alt={image.alt} className="card-image" />
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
