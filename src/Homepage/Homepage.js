import React from "react";
import "./Homepage.css";
import gamingclubbg from "../images/owlsgamingbg.mp4";
import mw3 from "../bgbutton/mw3-wallpaper.png";
import cs2 from "../bgbutton/cs2-wallpaper.jpg";
import lol from "../bgbutton/LOL-wallpaper.jpg";
import ow from "../bgbutton/ow-wallpaper.jpg";
import smash from "../bgbutton/smash-wallpaper.jpg";
import val from "../bgbutton/valorant-wallpaper.jpg";
import rocket from "../bgbutton/RL-wallpaper.jpg";
import Split from "../Split/Split";

function Homepage() {
  return (
    <div className="homepage">
      <div className="bg-wrapper">
        <video autoPlay loop muted className="bg-video">
          <source src={gamingclubbg} type="video/mp4" />
        </video>
      </div>
      <div className="heading-section">
        {/* <h1 className="heading-title">Owls Esports Gaming Club</h1>
        <h2 className="establish-title">Est. 2019</h2> */}
      </div>
      <div className="game-section">
        <div className="game-title">
          <h1 className="gaming-header">Games We Play</h1>
        </div>
        <div className="game-grid">
          <div className="grid-item">
            <img src={cs2} alt="cs2-bg" className="bg-image"></img>
            <button className="button">
              <span className="button-text">Counter-Strike 2</span>
            </button>
          </div>
          <div className="grid-item">
            <img src={lol} alt="lol-bg" className="bg-image"></img>
            <button className="button">
              <span className="button-text">League of Legends</span>
            </button>
          </div>
          <div className="grid-item">
            <img src={ow} alt="ow-bg" className="bg-image"></img>
            <button className="button">
              <span className="button-text">Overwatch 2</span>
            </button>
          </div>
          <div className="grid-item">
            <img src={smash} alt="smash-bg" className="bg-image"></img>
            <button className="button">
              <span className="button-text">Smash Bros</span>
            </button>
          </div>
          <div className="grid-item">
            <img src={val} alt="val-bg" className="bg-image"></img>
            <button className="button">
              <span className="button-text">Valorant</span>
            </button>
          </div>
          <div className="grid-item">
            <img src={rocket} alt="rocket-bg" className="bg-image"></img>
            <button className="button">
              <span className="button-text">Rocket League</span>
            </button>
          </div>
          <div className="grid-item">
            <img src={mw3} alt="mw3-bg" className="bg-image"></img>
            <button className="button">
              <span className="button-text">Call of Duty</span>
            </button>
          </div>
        </div>
      </div>
      <div className="split-section">
        <h1 className="community-title"> A Balanced Community </h1>
      </div>
      <Split />
    </div>
  );
}

export default Homepage;
