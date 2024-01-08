import React, {useState} from "react";
import "./Navbar.css";

const  Navbar = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const toggleMobileMenu =() => {
  //   setMobileMenuOpen(!mobileMenuOpen);
  // };

  return (
     <nav className="navbar">
    <div
      className='menu-toggle'
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
    <div className="navbar-links">
      <div className="navbar-title">
        <a href="/">Home</a>
      </div>
      <div className="navbar-title"> 
        <a href="/aboutus">About Us</a>
      </div>
      <div className="navbar-title">
        <a href="#projects">Projects</a>
      </div>
      <div className="navbar-title">
       <a href="#skills">Skills</a>
      </div>
    </div>
  </nav>
);
};

export default Navbar;
