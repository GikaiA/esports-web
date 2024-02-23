import React from "react";
import "./COD.css";
import codlogo from "../COD/COD Logo.png";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

function COD() {
  return (
    <div className="cod-wrapper">
      <div className="cod-parallax-bg"></div>
      <div className="cod-section">
        <img src={codlogo} alt="cod-logo" className="logo"></img>
      </div>
      <div className="cod-paragraph">
        <p className="cod-text">
          {" "}
          Our Call of Duty team, led by Kaiju since 2020, experienced a
          rollercoaster journey. Starting with Warzone battles, we transitioned
          to Multiplayer with Black Ops Cold War, facing challenges. In 2022,
          Vanguard's release shifted focus to multiplayer, overcoming chemistry
          issues. In 2023, with a new team and manager Trex, we proudly secured
          4th place in Spring. Now, aiming for 1st in Fall 2023 before Modern
          Warfare III, this revitalized team is determined for success.
        </p>
        <div className="cod-roster">
          <h1 className="cod-roster-title">Main Roster</h1>
          <p className="roster-paragraph">Roster TBA</p>
          <div className="twitch-section">
            <div className="video-container">
             <ReactTwitchEmbedVideo
          channel="owlsesportsfl"
          layout="video"
          className="twitch-video"
          height={1080}
          width={1280}
        ></ReactTwitchEmbedVideo>   
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default COD;
