import React from 'react';
import HeaderBar from './components/HeaderBar';
import Navbar from './components/Navbar';
import C1 from './components/C1';
import Define from './components/Define';
import Ourservices from './components/Ourservices';
import OurTeam from './components/OurTeam';
import Footer from './components/Footer';
import Team from './components/Team';
function Home() {
  return (
    <div className="container-fluid">
      <div><C1 /></div>
      <div><Define /></div>
      <div><Ourservices /></div>
      <div><OurTeam/></div>
      <div><Team /></div>
    </div>
  );
}

export default Home;
