import React from 'react';
import './Streams.css';
import { TwitchPlayer, TwitchChat } from 'react-twitch-embed';

function Streams() {
  return (
    <div className='streams'>
        <p className='stream-title'>Check Our Streams</p>
        <div className="stream-twitch-section">
            <TwitchPlayer
              channel="owlsesportsfl"
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
  )
}

export default Streams
