import React from 'react';
import './FeatureCard.css';
import Animation from './Animation'; 
import me from './me.jpg';
import ai from './ai.jpg';
import Search from './Search engines.gif';
import GANS from './GANS2.jpg';
import security from './icons8-trust-64.png';

function FeatureCard() {
  const [contentRef, isContentVisible] = Animation({ threshold: 0.50 });
  const [videoRef, isVideoVisible] = Animation({ threshold: 0.50 });

  return (
    <div className='ContainerCardFeature'>
      <div className={`feature-cards ${isVideoVisible ? 'animated fadeInUp' : ''}`} ref={videoRef}>
        {isVideoVisible && (
          <>
            <div className="Featurecard1">
              <img className='featurecardimg' /* src="https://assets.website-files.com/617fa48948c7ab24b715140e/6183bb01e5841050e8e31f3b_hero_person-3.webp" */  src={ai}alt="Avatar" style={{ width: '100%'}} />
              <div className="featurecontainer">
                <h4><b>Artificial Intelligence</b></h4>
              </div>
            </div>

            <div className="Featurecard2">
              <img className='featurecardimg' /* src="https://assets.website-files.com/617fa48948c7ab24b715140e/6183bb01e5841050e8e31f3b_hero_person-3.webp" */ src={Search} alt="Avatar" style={{ width: '100%' }} />
              <div className="featurecontainer">
                <h4><b>Unlimited Search</b></h4>
              </div>
            </div>

            <div className="Featurecard3">
              <img className='featurecardimg'/*  src="https://assets.website-files.com/617fa48948c7ab24b715140e/6183bb01e5841050e8e31f3b_hero_person-3.webp" */ src={GANS} alt="Avatar" style={{ width: '100%' }} />
              <div className="featurecontainer">
                <h4><b>Face Transformation</b></h4>
              </div>
            </div>

            <div className="Featurecard4">
              <img className='featurecardimg' /* src= "https://png.pngtree.com/png-clipart/20230330/original/pngtree-trust-line-icon-png-image_9012711.png"  */ src={security}  alt="Avatar" style={{ width: '100%'}} />
              <div className="featurecontainer">
                <h4><b>Trusted Data</b></h4>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default FeatureCard;
