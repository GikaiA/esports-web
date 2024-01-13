import React from "react";
import "./OW.css";
import ow2 from "../OW/OW Logo.png";

function OW() {
  return (
    <div className="ow-wrapper">
      <div className="ow-section">
        <img src={ow2} alt="ow-logo" className="ow-logo"></img>
      </div>
      <div className="ow-paragraph">
        <p className="ow-text">
          {" "}
          Overwatch has been a steadfast presence within our esports club since
          2019, enduring its share of transitions and transformations. After
          spending time with the Union, it found its way back to us in 2021.
          Throughout its journey, Overwatch has weathered numerous roster
          changes, consistent rotations of in-game leaders, and role switches
          that kept the team on their toes. This tumultuous ride led to
          fluctuating records in every season. However, with a fresh team, a new
          mindset, and a determined in-game leader at the helm, they are now
          steadfast in their pursuit of securing the elusive 1st place trophy.
          This newfound determination reflects their unwavering commitment to
          excellence in Overwatch, and the future holds great promise for this
          dedicated squad.
        </p>{" "}
        <div className="ow-roster">
          <h1>Main Roster</h1>
          <p className="ow-roster-text">TBA</p>
        </div> 
        
      </div>
    </div>
  );
}

export default OW;
