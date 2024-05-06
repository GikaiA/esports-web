import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import owlsesportslogo from "../images/owls-esports.png";

const Navbar = () => {
 

  return (
    <nav className="navbar">
      <div className="menu-toggle">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="home-section">
          <Link to="/">
            <img
              src={owlsesportslogo}
              alt="owls-esports-logo"
              className="main-logo"
            ></img>
          </Link>
        </div>
      <div className='navbar-links'>
        <div className="navbar-title">
          <a href="/" className="navbar-title-link">
            Home
          </a>
        </div>
        <div className="navbar-title">
          <a href="/aboutus" className="navbar-title-link">
            About Us
          </a>
        </div>
        <div className="navbar-title">
          <a
            href="/teams"
            className='navbar-title-link '
          >
            Teams
          </a>
        </div>
        <div className="navbar-title">
          <a href="/socials" className="navbar-title-link">
            Socials
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
