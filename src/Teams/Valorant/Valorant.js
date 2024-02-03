import React from "react";
import "./Valorant.css";
import vallogo from "../Valorant/ValorantLogo.png";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

function Valorant() {
  return (
    <div className="val-wrapper">
      <div className="parallax-bg"></div>
      <div className="val-section">
        <img src={vallogo} alt="val-logo" className="val-logo"></img>
      </div>
      <div className="val-paragraph">
        <div className="val-text">
          <p>
            Valorant, launched at our school in 2021 under the Union, has
            evolved remarkably. Initially supported by the Union, the esports
            club operated in its shadow. A year later, the Union transferred
            Valorant teams to the esports club, initiating a new era. Led by
            SweetBee, the team now actively competes in NACE and ESL, marking a
            promising chapter in the school's esports legacy.
          </p>
        </div>
        <div className="val-roster">
          <h1 className="val-roster-title">Main Roster</h1>
          <p className="roster-text">TBD</p>
          <div className="twitch-section">
            <ReactTwitchEmbedVideo
              channel="owlsesportsfl"
              layout="video"
              height={500}
              width={800}
            ></ReactTwitchEmbedVideo>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Valorant;
