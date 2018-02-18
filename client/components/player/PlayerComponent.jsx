/*
    ./client/components/player/PlayerComponent.jsx
*/

import React from 'react';

const PlayerComponent = ({ showPlayer }) => {
  return (
    <div className={"dash-video-player" + (showPlayer ? '' : ' hide-player') }>
      <div className="video-container">
        <video id="videoPlayer" controls></video>
        <div id="video-caption"></div>
      </div>
    </div>
  );
};

export default PlayerComponent;