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
import Contact from "../Contact/Contact";
import Calendar from "../Calendar/Calendar";

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
            <img src={mw3} alt="cs2-bg" className="bg-image"></img>
            <button className="button">
              <a href="/teams/call-of-duty">
                <span className="button-text">Call of Duty</span>
              </a>
            </button>
          </div>
          <div className="grid-item">
            <img src={lol} alt="lol-bg" className="bg-image"></img>
            <button className="button">
              <a href="/teams/league-of-legends">
                <span className="button-text">League of Legends</span>
              </a>
            </button>
          </div>
          <div className="grid-item">
            <img src={cs2} alt="ow-bg" className="bg-image"></img>
            <button className="button">
              <a href="/teams/csgo">
                <span className="button-text">Counter-Strike 2</span>
              </a>
            </button>
          </div>
          <div className="grid-item">
            <img src={smash} alt="smash-bg" className="bg-image"></img>
            <button className="button">
              <a href="/teams/smash">
                <span className="button-text">Smash Bros</span>
              </a>
            </button>
          </div>
          <div className="grid-item">
            <img src={val} alt="val-bg" className="bg-image"></img>
            <button className="button">
              <a href="/teams/valorant">
                <span className="button-text">Valorant</span>
              </a>
            </button>
          </div>
          <div className="grid-item">
            <img src={rocket} alt="rocket-bg" className="bg-image"></img>
            <button className="button">
              <a href="/teams/rocket-league">
                <span className="button-text">Rocket League</span>
              </a>
            </button>
          </div>
          <div className="grid-item">
            <img src={ow} alt="mw3-bg" className="bg-image"></img>
            <button className="button">
              <a href="/teams/overwatch">
                <span className="button-text">Overwatch 2</span>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="split-section">
        <h1 className="community-title"> A Balanced Community </h1>
      </div>
      <Split />
      <div className="contact-section">
        <h1 className="contact-title">Contact Us!</h1>
      </div>
      <Contact />
      {/* <Calendar/> */}
    </div>
  );
}

export default Homepage;
