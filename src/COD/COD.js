import React from "react";
import "./COD.css";
import codlogo from "../logos/cod-logo.png";
import kai from "../images/kai.jpg";
import { TwitchPlayer, TwitchChat } from "react-twitch-embed";

function COD() {
  return (
    <div className="cod">
      <div className="cod-team">
        <div className="cod-gamelogo-section">
          <img src={codlogo} alt="cod-logo" className="cod-logo"></img>
        </div>
        <h1 className="roster-title">Roster</h1>
        <div className="cod-roster">
          <div className="cod-roster-card">
            <div className="cod-roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={kai} alt="member" className="cod-member"></img>
          </div>
          <div className="cod-roster-card">
            <div className="cod-roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={kai} alt="member" className="cod-member"></img>
          </div>
          <div className="cod-roster-card">
            <div className="cod-roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={kai} alt="member" className="cod-member"></img>
          </div>
          <div className="cod-roster-card">
            <div className="cod-roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={kai} alt="member" className="cod-member"></img>
          </div>
        </div>
        <div className="cod-twitch-section">
          <h1 className="cod-sentence">Check Them Out Below 👇</h1>
          <div className="codtwitch-section">
            <TwitchPlayer
              channel="owlsesportsflcod"
              autoplay
              muted
              className="twitch-video"
              width={1000}
              height={600}
            ></TwitchPlayer>
            <TwitchChat
              channel="owlsesportsflcod"
              darkMode={true}
              height={600}
              className="twitch-chat"
            ></TwitchChat>
          </div>
        </div>
      </div>
    </div>
  );
}

export default COD;
