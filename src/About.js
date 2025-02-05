import React from 'react';
import Aphotosect from './components/Aphotosect';
import Work from './components/Work';
import Colloborations from './components/Colloborations';
import Partnercompany from './components/Partnercompany';
import '../src/About.css'
function About() {
  return (
    <div className=" d-flex row" style={{backgroundColor:" #f5feff"}}>
      <Aphotosect />
      <Work />
      <Colloborations />
      <Partnercompany />
    </div>
  );
}

export default About;
