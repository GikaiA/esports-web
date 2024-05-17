import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import owlsesportslogo from "../images/owls-esports.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-toggle" onClick={toggleMenu}>
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
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
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
          <a
            href="/streams"
            className='navbar-title-link '
          >
            Streams
          </a>
        </div>
          <a href="/joinus" className="navbar-title-link">
            <button className="join-button">
              Join Us
            </button>
          </a>
        </div>
    </nav>
  );
};

export default Navbar;
