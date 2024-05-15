import React from "react";
import { Link } from "react-router-dom";
import "./LOL.css";
import leaguelogo from "../logos/lol-logo.png";
import kerry from "../images/kerry.jpg";
import { TwitchPlayer, TwitchChat } from "react-twitch-embed";

function LOL() {
  return (
    <div className="league">
      <div className="league-team">
        <div className="gamelogo-section">
          <img src={leaguelogo} alt="league-logo" className="league-logo"></img>
        </div>
        <h1 className="roster-title">Roster</h1>
        <div className="roster">
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={kerry} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={kerry} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={kerry} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={kerry} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={kerry} alt="member" className="member"></img>
          </div>
        </div>
        <div className="twitch-social-section">
          <h1 className="twitch-social-title"> Check Them Out Below 👇</h1>
          <div className="twitch-section">
            <TwitchPlayer
              channel="owlsesportsfllol"
              autoplay
              muted
              className="twitch-video"
              width={1000}
              height={600}
            ></TwitchPlayer>
            <TwitchChat
              channel="owlsesportsfllol"
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

export default LOL;
