/* eslint-disable no-unused-vars */
import React from "react";
import "./Teams.css";
import { Link } from "react-router-dom";
import leaguevertical from "../images/leaguevertical.jpg";
import leaguelogo from "../logos/lol-logo.png";
import mw3vertical from "../images/mw3vertical.jpg";
import codlogo from "../logos/cod-logo.png";
import overwatchvertical from "../images/ow2vertical.jpg";
import overwatchlogo from "../logos/ow-logo.png";
import valorantvertical from "../images/valorantvertical.jpg";
import valorantlogo from "../logos/valorant-logo.png";
import apexlegendsvertical from "../images/apexlegendsvertical.jpg";
import apexlogo from "../logos/apex-logo.png";
import rocketleaguevertical from "../images/rocketleaguevertical.jpg";
import rocketlogo from "../logos/rl-logo.png";
import cs2vertical from '../images/cs2vertical.jpg';
import cs2logo from '../logos/cs2-logo.png';
import r6vertical from '../images/r6vertical.jpg';
import r6logo from '../logos/r6-logo.png';
import smashvertical from '../images/smashvertical.jpg';
import smashlogo from '../logos/smash-logo.png';

function Teams() {
  return (
    <div className="teams">
      <div className="split-pane">
      <div className="pane">
          <Link to="/teams/league-of-legends">
            <img
              src={leaguevertical}
              alt="league-hero"
              className="hero-pane"
            ></img>
          </Link>
          <div className="logo-section">
            <img src={leaguelogo} alt="logo-hero" className="logo-hero"></img>
          </div>
        </div>
        <div className="pane">
          <Link to="/teams/call-of-duty">
            <img
              src={mw3vertical}
              alt="league-hero"
              className="hero-pane"
            ></img>
          </Link>
          <div className="logo-section">
            <img src={codlogo} alt="logo-hero" className="logo-hero"></img>
          </div>
        </div>
        <div className="pane">
          <Link to="/teams/overwatch">
            <img
              src={overwatchvertical}
              alt="league-hero"
              className="hero-pane"
            ></img>
          </Link>
          <div className="logo-section">
            <img
              src={overwatchlogo}
              alt="logo-hero"
              className="logo-hero"
            ></img>
          </div>
        </div>
        {/* <div className="pane">
          <Link to="/teams/valorant">
            <img
              src={valorantvertical}
              alt="league-hero"
              className="hero-pane"
            ></img>
          </Link>
          <div className="logo-section">
            <img src={valorantlogo} alt="logo-hero" className="logo-hero"></img>
          </div>
        </div> */}
        {/* <div className="pane">
          <Link to="/teams/valorant">
            <img
              src={apexlegendsvertical}
              alt="league-hero"
              className="hero-pane"
            ></img>
          </Link>
          <div className="logo-section">
            <img src={apexlogo} alt="logo-hero" className="logo-hero"></img>
          </div>
        </div> */}
        <div className="pane">
          <Link to="/teams/rocket-league">
            <img
              src={rocketleaguevertical}
              alt="league-hero"
              className="hero-pane"
            ></img>
          </Link>
          <div className="logo-section">
            <img src={rocketlogo} alt="logo-hero" className="logo-hero"></img>
          </div>
        </div>
        <div className="pane">
          <Link to="/teams/csgo">
            <img
              src={cs2vertical}
              alt="league-hero"
              className="hero-pane"
            ></img>
          </Link>
          <div className="logo-section">
            <img src={cs2logo} alt="logo-hero" className="logo-hero"></img>
          </div>
        </div>
        {/* <div className="pane">
          <Link to="/teams/valorant">
            <img
              src={r6vertical}
              alt="league-hero"
              className="hero-pane"
            ></img>
          </Link>
          <div className="logo-section">
            <img src={r6logo} alt="logo-hero" className="logo-hero"></img>
          </div>
        </div> */}
        <div className="pane">
          <Link to="/teams/smash">
            <img
              src={smashvertical}
              alt="league-hero"
              className="hero-pane"
            ></img>
          </Link>
          <div className="logo-section">
            <img src={smashlogo} alt="logo-hero" className="logo-hero"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
