/*
    ./client/components/player/PlayerComponent.jsx
*/

import React from 'react';

export default class PlayerComponent extends React.Component {
  render() {
    return (
      <div className="dash-video-player">
        <div className="video-container">
          <video id="videoPlayer" controls></video>
          <div id="video-caption"></div>
        </div>
      </div>
    );
  }
}