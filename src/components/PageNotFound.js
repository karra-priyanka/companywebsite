import React from 'react';
import { Link } from 'react-router-dom';
import "./Notfound.css"; 

const PageNotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/Home" className="notfound-link">Go back to Home</Link>
    </div>
  );
};

export default PageNotFound; 