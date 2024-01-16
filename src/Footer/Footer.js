import React from "react";
import "./Footer.css";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";

function Footer() {
  return (
    <div className="footer-section">
      <div className="social-section">
        {/* <h1 className="follow-us">FOLLOW US ON SOCIAL:</h1> */}
        <div className="icons-section">
          <a href="https://discord.com/invite/owlsgamingclub" className="link">
            <FaDiscord className="icon" />
          </a>
          <a href="https://twitter.com/OwlsEsportsClub" className="link">
            <FaXTwitter className="icon" />
          </a>
          <a
            href="https://www.instagram.com/owlsesportsgamingclub/"
            className="link"
          >
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.twitch.tv/owlsesportsfl" className="link">
            <FaTwitch className="icon" />
          </a>
          <a href="https://www.youtube.com/channel/UCZXA1OY_Qsp3MH90DlX31AQ" className="link">
            <GrYoutube className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
