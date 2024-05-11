import React from "react";
import "./Smash.css";
import smashlogo from "../logos/smash-logo.png";
import smashplayer from "../images/smashplayer.jpg";
import { TwitchPlayer, TwitchChat } from "react-twitch-embed";

function Smash() {
  return (
    <div className="smash">
      {/* <div className="backbutton-section">
      <Link to="/teams">
        <button className="backbutton">Back to Teams</button>
      </Link>
    </div> */}
      <div className="smash-team">
        <div className="gamelogo-section">
          <img src={smashlogo} alt="smash-logo" className="smash-logo"></img>
        </div>
        <h1 className="roster-title">Roster</h1>
        <h2 className="team-name">Team Red</h2>
        <div className="roster">
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={smashplayer} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={smashplayer} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={smashplayer} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={smashplayer} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={smashplayer} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={smashplayer} alt="member" className="member"></img>
          </div>
          {/* <div className="sub-team">
          <h2 className="team-name">Team Blue</h2>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={smashplayer} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={smashplayer} alt="member" className="member"></img>
          </div>
          </div> */}
          {/* <h2 className="team-name">Team Blue</h2>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={smashplayer} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={smashplayer} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={smashplayer} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={smashplayer} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={smashplayer} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={smashplayer} alt="member" className="member"></img>
          </div>
          <h2 className="team-name">Team White</h2>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={smashplayer} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={smashplayer} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={smashplayer} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={smashplayer} alt="member" className="member"></img>
          </div>
          <div className="roster-card">
            <div className="roster-info">
              <h1 className="member-name">Member Name</h1>
              <p className="member-role">Member Role</p>
            </div>
            <img src={smashplayer} alt="member" className="member"></img>
          </div> */}
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

export default Smash;
