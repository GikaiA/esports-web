import React from "react";
import "./About.css";
import owlslogo from "../images/owls-esports.png";
import kerry from '../images/kerry.jpg';
import deandre from '../images/deandre.jpg';
import ian from '../images/ian.jpg';
import enrique from '../images/enrique.jpg';
import zechariah from '../images/zechariah.jpg';
import edwin from '../images/edwin.jpg';

function About() {
  return (
    <div className="about-us-section">
      <img src={owlslogo} alt="owls-logo" className="owls-logo"></img>
      <p className="about-us-text">
        The club, founded in Spring 2019 by Julie Tomanio as its first
        president, initially aimed to collaborate with the arena. However, this
        partnership didn't materialize as planned when the arena opened. In
        2021, the arena requested the club to relocate its teams to their
        premises. For a year, the teams operated under the arena's management.
        Unfortunately, in 2022, the arena (Union) decided to defund the teams
        due to financial challenges, attributed to minimal PC usage and a $5 per
        hour charge. Consequently, in Summer 2022, the club reclaimed its teams.
        To boost the budget, the club sought support from the Sports Club
        Council, successfully obtaining approval and official recognition as a
        sports club.
      </p>
      <div className="admin-section">
        <h1 className="admin-title">Meet the Club Admin</h1>
        <div className="card-grid">
          <div className="card">
            <img src={kerry} alt="admin-pfp" className="admin-pfp"></img>
            <div className="admin-info">
              <p className="admin-name">Kerry Mock</p>
              <p className="admin-status">President</p>
            </div>
          </div>
          <div className="card">
            <img src={deandre} alt="admin-pfp" className="admin-pfp"></img>
            <div className="admin-info">
              <p className="admin-name">Deandre James</p>
              <p className="admin-status">Vice President</p>
            </div>
          </div>
          <div className="card">
            <img src={ian} alt="admin-pfp" className="admin-pfp"></img>
            <div className="admin-info">
              <p className="admin-name">Ian Clark</p>
              <p className="admin-status">Treasurer</p>
            </div>
          </div>
          <div className="card">
            <img src={enrique} alt="admin-pfp" className="admin-pfp"></img>
            <div className="admin-info">
              <p className="admin-name">Enrique Conant</p>
              <p className="admin-status">Risk Management Officer</p>
            </div>
          </div>
          <div className="card">
            <img src={zechariah} alt="admin-pfp" className="admin-pfp"></img>
            <div className="admin-info">
              <p className="admin-name">Zechariah Riddle</p>
              <p className="admin-status">Secretary</p>
            </div>
          </div>
          <div className="card">
            <img src={edwin} alt="admin-pfp" className="admin-pfp"></img>
            <div className="admin-info">
              <p className="admin-name">Edwin Gomez</p>
              <p className="admin-status">Outreach Officer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
