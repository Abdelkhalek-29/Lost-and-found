import React, { useEffect, useRef, useState } from 'react';
import "./VideoMockup.css";
import Videomok from './14video.mp4'; // Adjust the path as necessary
import AutoPlay from './AutoPlay';
import Animation from './Animation';

function VideoMockup() {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [videoRef1, isVideoVisible] = Animation({ threshold: 0.5 }); // 50% threshold for visibility

  useEffect(() => {
    const options = {
      root: null, // Viewport as root
      rootMargin: '0px',
      threshold: 0.5 // 50% threshold
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className='VideoMockups'>
      <div className='VideoMockupsplayer' ref={videoRef}>
        <AutoPlay url={Videomok} isVisible={isVisible} />
      </div>
      <div className={`dividervideocard1 ${isVideoVisible ? 'animated fadeInUpBig' : ''}`} ref={videoRef1}></div>
      <div className={`VideoMockupsContant ${isVideoVisible ? 'animated fadeInRight' : ''}`} ref={videoRef1}>
          <>
            <h3>How The websites work with AI</h3>
            <p>
              In the First step user signup to make account<br />
              Then Upload Img, Web stor data in database.<br />
              and make matching to see if anyone match case.
            </p>
          </>
      </div>
    </div>
  );
}

export default VideoMockup;
