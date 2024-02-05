import React from "react";
import "./About.css";
import owlslogo from "../images/owls-esports.png";

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
    </div>
  );
}

export default About;
