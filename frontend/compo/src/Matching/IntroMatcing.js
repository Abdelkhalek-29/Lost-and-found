import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './IntroMatcing.css';
import hourglassGif from './time.gif';


function IntroMatcing() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const { postId } = useParams(); 

  const handleStartClick = () => {
    setShowPopup(true);
  };

  const handleOkClick = () => {
    setShowPopup(false);
    navigate(`/searching/${postId}`);
  };

  const handleExitClick = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className="splash">
        <div className="splash_logo">
          <span className='logotext' style={{ textTransform: 'uppercase', fontWeight: 700, marginLeft: '-63px', color: 'White', marginRight: '900px' }}>Find<span style={{ color: 'orange', fontSize: '47px' }}>ME</span></span>
        </div>
        <div className="splash_svg">
          <svg width="100%" height="100%">
            <rect width="100%" height="100%" />
          </svg>
        </div>
        <div className="splash_minimize">
          <svg width="100%" height="100%">
            <rect width="100%" height="100%" />
          </svg>
        </div>
      </div>
      <div className="text">
        <p>Searching Using Ai</p>
        <p></p>
        <button onClick={handleStartClick}>Start</button>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
          <img src={hourglassGif} alt="Loading" className="hourglass" />
          <p>This process will take at least a minute.<br/>  Are you sure to start? </p>
            <button className='Okbtn' onClick={handleOkClick}>OK</button>
            <button className='Exitbtn' onClick={handleExitClick}>Exit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default IntroMatcing;
