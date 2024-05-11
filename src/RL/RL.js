import React from "react";
import "./RL.css";
import rocketlogo from "../logos/rl-logo.png";
import rlplayer from "../images/rlplayer.jpg";
import { TwitchPlayer, TwitchChat } from "react-twitch-embed";

function RL() {
  return (
    <div className="rocketleague">
      {/* <div className="backbutton-section">
        <Link to="/teams">
          <button className="backbutton">Back to Teams</button>
        </Link>
      </div> */}
      <div className="rocket-team">
        <div className="gamelogo-section">
          <img
            src={rocketlogo}
            alt="rocketleague-logo"
            className="rocketleague-logo"
          ></img>
        </div>
        <h1 className="roster-title">Roster</h1>
        <div className="roster">
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={rlplayer} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={rlplayer} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={rlplayer} alt="member" className="member"></img>
          </div>
        </div>
        <div className="twitch-social-section">
          <h1 className="twitch-social-title"> Check Them Out Below 👇</h1>
          <div className="twitch-section">
            <TwitchPlayer
              channel="owlsesportsflrl"
              autoplay
              muted
              className="twitch-video"
              width={1000}
              height={600}
            ></TwitchPlayer>
            <TwitchChat
              channel="owlsesportsflrl"
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

export default RL;
