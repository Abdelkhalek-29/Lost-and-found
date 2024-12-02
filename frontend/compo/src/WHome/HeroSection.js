import React, { useState, useEffect, useRef } from 'react';
import styles from './HeroSection.module.css';
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
    <section className={styles['hero-section']}>
      <div className={`${styles['hero-content']} ${styles.animated} ${styles['fade-in-up']}`}>
        <h1>Upload.</h1>
        <h2>Matching.</h2>
        <h2>Connect.</h2>
        <div className={styles['hero-search']}>
          <input type="text" placeholder="Find your person" />
          <button>Go</button>
        </div>
      </div>
      <div className={`${styles['hero-cards']} ${styles.animated} ${styles['fade-in-left']}`}>
        <div
          className={`${styles['hero-card']} ${styles['small-card']} ${activeCard === 1 ? styles['active-card'] : ''}`}
          onMouseEnter={() => setActiveCard(1)}
        >
          <img src="path/to/image1.jpg" alt="Card 1" />
          <div className={styles['hero-card-content']}>
            <h2>Card Title 1</h2>
            <p>Card Description 1</p>
          </div>
        </div>
        <div
          className={`${styles['hero-card']} ${styles['small-card']} ${activeCard === 2 ? styles['active-card'] : ''}`}
          onMouseEnter={() => setActiveCard(2)}
        >
          <img src="path/to/image2.jpg" alt="Card 2" />
          <div className={styles['hero-card-content']}>
            <h2>Card Title 2</h2>
            <p>Card Description 2</p>
          </div>
        </div>
        {/* Add more cards as needed */}
      </div>
      <audio ref={audioRef} src={backgroundMusic} loop />
    </section>
  );
}

export default HeroSection;
