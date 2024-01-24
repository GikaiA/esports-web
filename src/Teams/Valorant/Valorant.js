import React from "react";
import "./Valorant.css";
import vallogo from "../Valorant/ValorantLogo.png";

function Valorant() {
  return (
    <div className="val-wrapper">
  <div className="val-section">
    <img src={vallogo} alt="val-logo" className="val-logo"></img>
  </div>
  <div className="val-paragraph">
    <p className="val-text">
      Valorant, a game that began its journey at our school in 2021 under
      the banner of the Union, has undergone a remarkable evolution.
      Initially nurtured and supported by the Union, the esports club
      existed somewhat in its shadow. However, in a pivotal move just a year
      later, the Union handed over its Valorant teams to the esports club,
      setting the stage for a new era. At present, the team is under the
      able leadership of SweetBee, who has been instrumental in shaping
      their trajectory. Fast forward to 2023, and the Valorant squad has
      ascended to new heights, actively participating in both NACE and ESL
      competitions. Their dedication and growth continue to make waves in
      the competitive gaming scene, marking a promising chapter in the
      school's esports legacy.
    </p>
    <div className="val-roster">
      <h1 className="val-roster-text">Main Roster</h1>
      <p className="roster-text">TBD</p>
    </div>
  </div>
</div>

  );
}

export default Valorant;
