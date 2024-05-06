import React from "react";
import "./Homepage.css";
import mw3 from "../bgbutton/mw3-wallpaper.png";
import cs2 from "../bgbutton/cs2-wallpaper.jpg";
import lol from "../bgbutton/LOL-wallpaper.jpg";
import ow from "../bgbutton/ow-wallpaper.jpg";
import smash from "../bgbutton/smash-wallpaper.jpg";
import val from "../bgbutton/valorant-wallpaper.jpg";
import rocket from "../bgbutton/RL-wallpaper.jpg";
import apex from '../bgbutton/apex-wallpaper.jpg'
import r6 from '../bgbutton/r6-wallpaper.jpg'
import Split from "../Split/Split";
import Contact from "../Contact/Contact";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slideshow1 from "../images/slideshow1.jpg";
import slideshow2 from "../images/slideshow2.jpg";
import slideshow3 from "../images/slideshow3.jpg";
import slideshow4 from "../images/slideshow4.jpg";

function Homepage() {
  return (
    <div className="homepage">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
      >
        <img
          src={slideshow1}
          alt="slideshow-pic"
          className="slideshow-pic"
        ></img>
        <img
          src={slideshow2}
          alt="slideshow-pic"
          className="slideshow-pic"
        ></img>
        <img
          src={slideshow3}
          alt="slideshow-pic"
          className="slideshow-pic"
        ></img>
        <img
          src={slideshow4}
          alt="slideshow-pic"
          className="slideshow-pic"
        ></img>
      </Carousel>
      <div className="split-section">
        <h1 className="community-title"> A Balanced Community </h1>
      </div>
      <Split />
      <div className="game-section">
        <div className="game-title">
          <h1 className="gaming-header">Games We Play</h1>
        </div>
        <div className="game-grid">
          <div className="grid-item">
            <img src={mw3} alt="mw3-bg" className="bg-image"></img>
              <span className="button-text">Call of Duty</span>
          </div>
          <div className="grid-item">
            <img src={lol} alt="lol-bg" className="bg-image"></img>
              <span className="button-text">League of Legends</span>
          </div>
          <div className="grid-item">
            <img src={cs2} alt="cs2-bg" className="bg-image"></img>
              <span className="button-text">Counter-Strike 2</span>
          </div>
          <div className="grid-item">
            <img src={smash} alt="smash-bg" className="bg-image"></img>
            <span className="button-text">Smash Bros</span>
          </div>
          <div className="grid-item">
            <span className="button-text">Valorant</span>
          </div>
          <div className="grid-item">
            <img src={rocket} alt="rocket-bg" className="bg-image"></img>
            <span className="button-text">Rocket League</span>
          </div>
          <div className="grid-item">
            <img src={ow} alt="ow-bg" className="bg-image"></img>
            <span className="button-text">Overwatch 2</span>
          </div>
          <div className="grid-item">
            <img src={val} alt="val-bg" className="bg-image"></img>
            <span className="button-text">Valorant</span>
          </div>
          <div className="grid-item">
            <img src={apex} alt="apex-bg" className="bg-image"></img>
            <span className="button-text">Apex Legends</span>
          </div>
          <div className="grid-item">
            <img src={r6} alt="r6-bg" className="bg-image"></img>
            <span className="button-text">Rainbow Six Siege</span>
          </div>
        </div>
      </div>
      <div className="contact-section">
        <h1 className="contact-title">Contact Us!</h1>
      </div>
      <Contact />
    </div>
  );
}

export default Homepage;
