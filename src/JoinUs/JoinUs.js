import React from "react";
import "./JoinUs.css";

function JoinUs() {
  return (
    <div className="joinus">
      <h1 className="joinus-title">Join Us</h1>
      <div className="requirements">
        <p className="requirement-title">Player Requirements</p>
        <ul className="requirement-list">
          <li>Must be a registered Member of the FAU Esports Organization</li>
          <li>
            No harassment of other players; no trolling, swearing, bullying,
            fighting
          </li>
          <li>Be sportsmanlike at all times.</li>
          <li> Have no outstanding account balances from a prior term.</li>
          <li>Have at least a 2.5 GPA.</li>
          <li>Take at least 12 credit hours per semester. (full time)</li>
          <li>All players are restricted to only one team at a time</li>
          <li>Participate in all Team Meetings.</li>
          <li>
            {" "}
            Participate in all competitive eSports events and fundraising
            opportunities.
          </li>
          <li> Treat admins and other members with respect.</li>
        </ul>
      </div>
      <div className="join-section">
        <a href="https://fau.campuslabs.com/engage/organization/fauesportsgamingclub" className="join-link">
          <button className="joinus-button">Join the Student Club </button>
        </a>
        <a href="https://linktr.ee/OwlsEsportsFL" className="join-link">
          <button className="joinus-button">Follow Our Socials</button>
        </a>
      </div>
    </div>
  );
}

export default JoinUs;
