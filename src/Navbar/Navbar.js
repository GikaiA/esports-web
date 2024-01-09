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
        <a href="#projects" className="navbar-title-link">Teams</a>
        <div className="dropdown">
          <p>Call of Duty</p>
          <p>Overwatch</p>  
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
