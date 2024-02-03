import React from "react";
import "./Socials.css";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import { YouTubeEmbed } from "react-social-media-embed";

function Socials() {
  return (
    <div className="socials-section">
      <div className="media-section">
        <h1 className="media-title">Twitch</h1>
        <div className="twitch">
        <ReactTwitchEmbedVideo
          channel="owlsesportsfl"
          layout="video"
          height={500}
          width={800}
        ></ReactTwitchEmbedVideo> 
        </div>
        <div className="youtube">
          <YouTubeEmbed url="https://www.youtube.com/@owlsgamingclub9749" width={700} height={500}></YouTubeEmbed>
        </div>
      </div>
    </div>
  );
}

export default Socials;
