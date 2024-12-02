import React from 'react';
import ReactPlayer from 'react-player';

const AutoPlay = ({ url, isVisible }) => {
  return (
    <div className='video-player-wrapper'>
      {isVisible && (
        <ReactPlayer
          className="react-player"
          url={url}
          width="100%"
          height="100%"
          playing={true} 
          controls={false}
          muted={true} 
          loop={false} 
        />
      )}
    </div>
  );
};

export default AutoPlay;
