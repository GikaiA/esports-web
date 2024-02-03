import React from "react";
import "./LOL.css";
import lol from "../LOL/LOL-logo.png";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

function LOL() {
  return (
    <div className="lol-wrapper">
      <div className="lol-parallax-bg"></div>
      <div className="lol-section">
        <img src={lol} alt="lol-logo" className="lol-logo" />
      </div>
      <div className="lol-paragraph">
        <p className="lol-text">
          {" "}
          In 2020, the League of Legends journey at our university commenced in
          a manner reminiscent of Valorant's early days. Like Valorant, it found
          its roots within the Union and remained there until 2021, when the
          reins were handed over to the esports club. Throughout this period,
          the team showcased resilience, holding their own amidst fluctuating
          rosters and fierce competition. At one point, they even expanded into
          three teams, a testament to their growing presence in the esports
          scene. However, not all was smooth sailing, as the third team faced
          unfortunate disbandment due to internal issues and drama. Today, the
          League of Legends landscape boasts two formidable squads, led by the
          capable hands of Tally and Thriller. With their combined efforts and
          aspirations, they are primed to chase success in the upcoming
          2023-2024 season, eager to make their mark in the League of Legends
          esports realm.
        </p>
        <div className="roster-paragraph">
          <h1 className="lol-roster">Main Roster</h1>
          <p className="lol-roster-text">TBA</p>
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

export default LOL;
