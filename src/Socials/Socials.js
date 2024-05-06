/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./Socials.css";
import { YouTubeEmbed } from "react-social-media-embed";
import { Timeline } from "react-twitter-widgets";
import { InstagramEmbed } from "react-social-media-embed";

function Socials() {
  return (
    <div className="socials-section">
      <div className="media-section">
        <h1 className="media-title">Twitch</h1>
        <div className="twitch">
        </div>
        <div className="instagram">
          <h1 className="media-title">Instagram</h1>
          <InstagramEmbed
            url="https://www.instagram.com/owlsesportsgamingclub/"
            width={800}
          ></InstagramEmbed>
        </div>
        <div className="twitter">
          <h1 className="media-title">Twitter/X</h1>
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "OwlsEsportsClub",
            }}
            options={{ height: "500", width: "800", theme: "dark" }}
          ></Timeline>
        </div>
        <div className="youtube">
          <h1 className="media-title">Youtube</h1>
          <div className="embed-container">
            <YouTubeEmbed
              url="https://youtu.be/ks-CxA3roZE?si=xEP6fbDBy_z52liX"
              className="youtube-preview"
              // width={800}
              // height={500}
            ></YouTubeEmbed>
          </div>
        </div>
        <div className="discord">
          <iframe
            className="discord-preview"
            src="https://discord.com/widget?id=558906211811196929&theme=dark"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Socials;
