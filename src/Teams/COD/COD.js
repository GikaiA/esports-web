import React from "react";
import "./COD.css";
import codlogo from "../COD/COD Logo.png";

function COD() {
  return (
    <div className="bg-wrapper">
      <div className="cod-container">
        <img src={codlogo} alt="cod-logo" className="logo"></img>
        <div className="bg-container">
          <div className="text-container">
            <p className="info-text">
            {" "}
            The journey of our Call of Duty team has been a rollercoaster ride
            since its inception in 2020 under the leadership of Kaiju, primarily
            focusing on Warzone battles. Although we managed to secure a few
            tournament victories, Kaiju saw the potential for growth and
            expansion into the realm of Call of Duty Multiplayer with Black Ops
            Cold War. Unfortunately, our early forays into multiplayer didn't
            yield as many victories, given the team's relative inexperience in
            this mode. However, the turning point came in 2022 with the release
            of Vanguard, prompting a renewed focus on the multiplayer aspect
            while leaving Warzone behind. Despite facing chemistry issues, we
            began to make strides, winning some crucial matches. Now, in 2023,
            we're turning a new leaf with Modern Warfare II and an entirely
            fresh team. With a determined spirit and a new manager named Trex at
            the helm, our Call of Duty squad proudly secured a 4th place overall
            finish in Spring 2023. With their sights set on the future, this
            revitalized team, with its fresh faces and newfound energy, is
            determined to make a run for 1st place in the upcoming Fall 2023
            season before the anticipated release of Modern Warfare III.
          </p> 
          </div>
         <div className="roster-section">
          <h2 className="roster-title">Main Roster</h2>
          <p className="roster-paragraph">Roster TBA</p>
          <div className="twitch-section">
          <iframe
        title="Twitch Stream"
        src="https://player.twitch.tv/?channel=owlsesportsfl&muted=true"
        height="480"
        width="400"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
      /> 
          </div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default COD;
