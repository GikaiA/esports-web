import React, {useState} from "react";
import "./Navbar.css";

const  Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu =() => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
     <nav className="navbar">
    <div
      className='menu-toggle' onClick={toggleMobileMenu}
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
    <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
      <div className="navbar-title">
        <a href="/" className="navbar-title-link">Home</a>
      </div>
      <div className="navbar-title"> 
        <a href="/aboutus" className="navbar-title-link">About Us</a>
      </div>
      <div className="navbar-title">
        <a href="" className="navbar-title-link">Teams</a>
        <div className="dropdown">
        <a href="/teams/call-of-duty">Call of Duty</a> 
          <a href="/teams/overwatch">Overwatch</a>  
          <a href="/teams/league-of-legends">League of Legends</a>
          <a href="/teams/csgo">CSGO</a>
          <a href="/teams/valorant">Valorant</a>
          <a href="/teams/rocket-league">Rocket League</a>
          <a href="/teams/smash">Smash Bros</a>
        </div>
      </div>
      <div className="navbar-title">
       <a href="#skills" className="navbar-title-link">Socials</a>
      </div>
    </div>
  </nav>
);
};

export default Navbar;
