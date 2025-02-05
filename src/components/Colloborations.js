import React from 'react';
import './Colloborations.css';

const Colloborations = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="header row">
        <h1 className='corevalue'>Our core values</h1>
        <p className='mx-auto'>
          Our values shape the culture of our organization and define the
          character of our company expectations.
        </p>
      </div>

      {/* Values Grid */}
      <div className="valuesGrid row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h3>Collaboration</h3>
          <div className='valueBox collaboration'>
            <p>
              Collaboration is the process of working together with others to
              achieve a common goal or complete a task. It involves sharing ideas,
              skills, and resources while fostering open communication and mutual
              respect among participants.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h3>Transparency</h3>
          <div className='valueBox transparency'>
            <p>
              Transparency refers to the practice of being open, honest, and clear
              about processes, decisions, and information. It involves sharing
              relevant details with stakeholders to build trust and foster
              accountability.
            </p>
          </div>
        </div>
        <div className=" col-sm-12 col-md-6 col-lg-6">
          <h3>Trust</h3>
          <div className='valueBox trust'>
            <p>
              Trust refers to the confidence that clients, users, and stakeholders
              have in an organization’s ability to deliver reliable, secure, and
              high-quality technology solutions or services. It is built over time
              through consistent actions, transparency, and delivering on promises.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 ">
          <h3>Integrity</h3>
          <div className='valueBox integrity mb-5'>
          <p>
            Integrity refers to the quality of being honest, ethical, and
            consistent in actions, decisions, and behavior, even when no one is
            watching. It is a core value that fosters trust and respect in
            personal and professional relationships.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colloborations;
