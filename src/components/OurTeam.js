import React from "react";
import Java from "../assets/images/java.jpg";
import Python from "../assets/images/Python.jpg";
import Testing from "../assets/images/Testing.jpg";
import Marketing from "../assets/images/Marketing.jpg";
import Business from "../assets/images/Business.jpg";
import Frontend from "../assets/images/Frontend.jpg";
import UI from "../assets/images/UI.jpg";
import Devops from "../assets/images/Devops.jpg";
import "../components/OurTeam.css";
function OurTeam() {
  return (
    <div className="main">
      <div className="Our mt-5">
        <h4>Our Technologies</h4>
      </div>

      <div class="row d-flex justify-content-evenly align-items-center">
        <div class="gallery col-sm-3">
          <div className="flip-container">
            <div className="flipper">
              <div className="front">
               
                  <img
                    src={UI}
                    alt="UI"
                    width="300"
                    height="300"
                  ></img>
              
                <div class="desc">
                  <h6 className="text-center">UI/UX </h6>
                  <i className=" far bi bi-arrow-up-right-circle"></i>
                </div>
              </div>

              <div class="flip-card-back">
                <h2 className="text">UI/UX </h2>
                <p className="text" style={{marginTop:"-40px"}}>
                Designs user-friendly interfaces for websites and apps, conducts user research, and creates wireframes to enhance user satisfaction and engagement.  </p>
              </div>
            </div>
          </div>
        </div>

        <div class="gallery col-sm-3">
          <div className="flip-container">
            <div className="flipper">
              <div className="front">
                
                  <img
                    src={Frontend}
                    alt="Frontend"
                    width="300"
                    height="300"
                  ></img>
              
                <div class="desc">
                  <h6 className="text-center">Frontend </h6>
                  {/* Bottom-right icon */}
                  <i className=" far bi bi-arrow-up-right-circle"></i>
                </div>
              </div>

              <div class="flip-card-back">
                <h2 className="text">Frontend</h2>
                <p className="text" style={{marginTop:"-50px"}}>
                Creates responsive, interactive web interfaces using HTML, CSS, and JavaScript, ensuring seamless user experiences and aligning with business objectives. 
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="gallery col-sm-3">
          <div className="flip-container">
            <div className="flipper">
              <div className="front">
                
                  <img
                    src={Java}
                    alt="Java"
                    width="300"
                    height="300"
                  ></img>
               
                <div class="desc">
                  <h6 className="text-center"> Java </h6>
                  {/* Bottom-right icon */}
                  <i className=" far bi bi-arrow-up-right-circle"></i>
                </div>
              </div>
              <div class="flip-card-back">
                <h2 className="text">Java </h2>
                <p className="text"  style={{marginTop:"-30px"}}>
                Builds scalable, efficient Java applications, collaborating with teams to deliver reliable, high-performing solutions using frameworks like Spring and Hibernate.  
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="gallery col-sm-3">
          <div className="flip-container">
            <div className="flipper">
              <div className="front">
                
                  <img
                    src={Python}
                    alt="Python"
                    width="300"
                    height="30"
                  ></img>
              
                <div class="desc">
                  <h6 className="text-center">Python </h6>
                  {/* Bottom-right icon */}
                  <i className=" far bi bi-arrow-up-right-circle"></i>
                </div>
              </div>
              <div class="flip-card-back">
                <h2 className="text">Python </h2>
                <p className="text"  style={{marginTop:"-40px"}}>
                Develops diverse applications across web, data analysis, machine learning, and automation using Python’s rich ecosystem of libraries. Delivering high-performing solutions using frameworks like Django and Flask.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-evenly align-items-center">
        <div class="gallery">
          <div className="flip-container">
            <div className="flipper">
              <div className="front">
                
                  <img
                    src={Testing}
                    alt="Testing"
                    width="300"
                    height="300"
                    class="center"
                  ></img>
               

                <div class="desc" >
                  <h6 className="text-center">Software Testing</h6>
                  {/* Bottom-right icon */}
                  <i className=" far bi bi-arrow-up-right-circle"></i>
                </div>
                <div></div>
              </div>

              <div class="flip-card-back">
                <h2 className="text">Software Testing</h2>
                <p className="text"  style={{marginTop:"-30px"}}>
                Ensures the quality of Software applications through test plans, bug identification, and performance checks using manual and automated testing. 
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="gallery">
          <div className="flip-container">
            <div className="flipper">
              <div className="front">
              
                  <img
                    src={Devops}
                    alt="Devops"
                    width="200"
                    height="200"
                    class="center"
                  ></img>
                
                <div class="desc">
                  <h6 className="text-center">DevOps </h6>
                  {/* Bottom-right icon */}
                  <i className=" far bi bi-arrow-up-right-circle"></i>
                </div>
              </div>
              <div class="flip-card-back">
                <h2 className="text">DevOps</h2>
                <p className="text"  style={{marginTop:"-30px"}}>
                Bridges development and operations, implementing CI/CD, automating workflows, and optimizing infrastructure to ensure reliable software delivery. 
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="gallery">
          <div className="flip-container">
            <div className="flipper">
              <div className="front">
                
                  <img
                    src={Business}
                    alt="Business"
                    width="200"
                    height="200"
                    class="center"
                  ></img>
               
                <div class="desc">
                  <h6 className="text-center">Business Analyst</h6>
                  {/* Bottom-right icon */}
                  <i className=" far bi bi-arrow-up-right-circle"></i>
                </div>
              </div>
              <div class="flip-card-back">
                <h2 className="text">Business Analyst</h2>
                <p className="text"  style={{marginTop:"-30px"}}>
                Acts as a liaison between stakeholders and technical teams, analysing processes and providing insights to improve efficiency and align solutions with goals. 
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="gallery">
          <div className="flip-container">
            <div className="flipper">
              <div className="front">
                
                  <img
                    src={Marketing}
                    alt="Marketing"
                    width="200"
                    height="200"
                  ></img>
               
                <div class="desc">
                  <h6 className="text-center">Marketing</h6>
                  {/* Bottom-right icon */}
                  <i className=" far bi bi-arrow-up-right-circle"></i>
                </div>
              </div>
              <div class="flip-card-back">
                <h2 className="text">Marketing</h2>
                <p className="text"  style={{marginTop:"-30px"}}>
                Executes strategies to promote brand identity, generate leads, and drive engagement through market research, content creation, and campaign management. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;