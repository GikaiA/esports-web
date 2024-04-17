import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="menu-toggle" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`navbar-links ${mobileMenuOpen ? "active" : ""}`}>
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
          <p
            className={`navbar-title-link ${mobileMenuOpen ? "active" : ""}`}
            onClick={toggleDropdown}
          >
            Teams
          </p>
          <div className="dropdown">
            <a href="/teams/call-of-duty" className="dropdown-title">
              Call of Duty
            </a>
            <a href="/teams/overwatch" className="dropdown-title">
              Overwatch
            </a>
            <a href="/teams/league-of-legends" className="dropdown-title">
              League of Legends
            </a>
            <a href="/teams/csgo" className="dropdown-title">
              CSGO
            </a>
            <a href="/teams/valorant" className="dropdown-title">
              Valorant
            </a>
            <a href="/teams/rocket-league" className="dropdown-title">
              Rocket League
            </a>
            <a href="/teams/smash" className="dropdown-title">
              Smash Bros
            </a>
          </div>
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
