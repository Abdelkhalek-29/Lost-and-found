import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';
import backgroundMusic from './music.mp3';

function HeroSection() {
  const audioRef = useRef(null);
  const [audioStarted, setAudioStarted] = useState(false);
  const [activeCard, setActiveCard] = useState(1);

  const playAudio = () => {
    const audio = audioRef.current;
    audio.muted = true;
    audio.play().then(() => {
      setAudioStarted(true);
      audio.muted = false; // Unmute after playing starts
    }).catch((error) => {
      console.log('Autoplay prevented:', error);
      setAudioStarted(false);
    });
  };

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!audioStarted) {
        playAudio();
      }
    };

    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('mouseover', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('mouseover', handleUserInteraction);
    };
  }, [audioStarted]);

  return (
    <section className="hero-section">
      <div className="hero-content animated fadeInUp">
        {/* <h1>Watch.</h1>
        <h2>Learn.</h2>
        <h2>Grow.</h2> */}
        <h1>Upload.</h1>
        <h2>Matching.</h2>
        <h2>Connect.</h2>
        <div className="hero-search">
          <input type="text" placeholder="Find your person" />
          <button>Go</button>
        </div>
      </div>
      <div className="hero-cards animated fadeInLeft">
        <div
          className={`hero-card small-card ${activeCard === 1 ? 'active-card' : ''}`}
          onMouseEnter={() => setActiveCard(1)}
        >
          <img
            src="https://i.insider.com/58e11275dd0895a3368b477d?width=800&format=jpeg&auto=webp&quality=60,55"
            alt="Writing Course"
          />
          <div className="hero-card-content">
            <h2>Yousif</h2>
            <p> is a child who was lost from his family at an early age. Help us find his family</p>
          </div>
        </div>
        <div
          className={`hero-card small-card ${activeCard === 2 ? 'active-card' : ''}`}
          onMouseEnter={() => setActiveCard(2)}
          onMouseLeave={() => setActiveCard(1)}
        >
          <img
            src="https://i.pinimg.com/564x/12/1f/f4/121ff46128980aadc972c435ab98783e.jpg"
            alt="Writing"
          />
          <div className="hero-card-content">
            <h2>Mostafa</h2>
            <p>Help Me</p>
          </div>
        </div>
        <div
          className={`hero-card small-card ${activeCard === 3 ? 'active-card' : ''}`}
          onMouseEnter={() => setActiveCard(3)}
          onMouseLeave={() => setActiveCard(1)}
        >
          <img
            src="https://i.pinimg.com/originals/54/da/4e/54da4e9ca658c34df2504042939be8a5.jpg"
            alt="Business"
          />
          <div className="hero-card-content">
            <h2>Yaseen</h2>
            <p>Help Me</p>
          </div>
        </div>
      </div>
      <audio ref={audioRef} loop>
        <source src={backgroundMusic} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
}

export default HeroSection;
