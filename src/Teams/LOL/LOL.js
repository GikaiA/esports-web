import React from "react";
import "./LOL.css";
import lol from "../LOL/LOL-logo.png";

function LOL() {
  return (
    <div className="lol-wrapper">
      <div className="lol-section">
        <img src={lol} alt="lol-logo" className="lol-logo" />
      </div>
    </div>
  );
}

export default LOL;
