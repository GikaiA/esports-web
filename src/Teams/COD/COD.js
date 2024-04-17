import React from "react";
import "./COD.css";
import codlogo from "../COD/COD Logo.png";
import codhero from '../COD/MW3-hero.jpg'

function COD() {
  return (
    <div className="cod-section">
      <div className="hero">
       <img src={codhero} alt="cod-hero" className="cod-image"></img> 
       <div className="logo">
        <img src={codlogo} alt="cod-logo" className="cod-logo"></img>
       </div>
      </div>
      <div className="roster-section">
      </div>
    </div>
  );
}

export default COD;
