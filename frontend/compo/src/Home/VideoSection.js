import React from 'react';
import ReactPlayer from 'react-player';
import './VideoSection.css';
import Animation from './Animation';
import datasvg from './data-svgrepo-com.svg';

function VideoSection() {
  const [contentRef, isContentVisible] = Animation({ threshold: 0.25 });
  const [videoRef, isVideoVisible] = Animation({ threshold: 0.25 });
  return (
    <div className="video-section">
      <div className="content-wrapper " ref={contentRef}>
        <h2 className='animated fadeInLeft'>
        Get the missing one for you depend on <br />
         The need for data that <br />
        </h2>
        <h2 className='demand animated fadeInLeft'>You may ask<span className="dot">.</span></h2>
        <p className='animated fadeInUp'>With every reunion, we transform sorrow into joy.<br/> proving that no one is truly lost when there is hope. <br/> Team of Find me support you.</p>
        <div className="stepper">
          <img className='dataIcon' src={datasvg}></img>
        <img className='aiicon' src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa5500e03d92bc1747cb2_ico_skills-responsibility.svg" alt="Skills Responsibility Icon" />
        <img className='fasticon' src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa5506ec5691cba88bb5b_ico_skills-flexibility.svg" ></img>
        <div className="step">
            <h5>Image & Data</h5>
            <p>easy to uplaod img and enter data that needed</p>
          </div>
          <span className='dash'>---------------</span>
          <div className="step">
            <h5 className='p2'>Processing</h5>
            <p>make Processing on data to be read to Ai Matching </p>
          </div>
          <span className='dash'>---------------</span>
          <div className="step">
            <h5 className='p3'>Result</h5>
            <p c>Fast Exit the match if it exists and is easy for anyone to contact</p>
          </div>
        </div>
        <div className={`video-wrapper ${isVideoVisible ? 'animated fadeInUp' : ''}`} ref={videoRef}>
        {isVideoVisible && (
        <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ" 
            width="100%"
            height="100%"
            controls
          />
        )}
        </div>
        <div className={`video-card ${isVideoVisible ? 'animated fadeInUp' : ''}`} ref={videoRef}>
        {isVideoVisible && (
        <div className=" ">
        <div className="videowarp"></div>
        <div className="skills__achieve">
       <div className="skills__achieve-title stroke--08">8</div>
       <div className="skills__achieve-desc stroke--06">
         million
        <br />
        Missing Children
    </div>
    <div className="dividervideocard"></div>
    <div className="skills__achieve-title stroke--08">10</div>
       <div className="skills__achieve-desc stroke--06">
       million
        <br />
         in Orphanage
    </div>
  </div>
</div>
        )}

      </div>
    </div>
    </div>
  );
}

export default VideoSection;
