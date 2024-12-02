import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Searching.css';

function Searching() {
  const [names] = useState([
    "Abdalrhman", "Hussien", "abdelkhalek", "Amr", "Sara", "Zakarya",
    "Eman", "Doha", "Nada", "Mahmoud", "Yasmine", "Khaled",
    "Mona", "Layla", "Dalia", "Angham", "Enas", "Ehab",
    "Abeer", "Ahmed"
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [showLoader, setShowLoader] = useState(true);
  const [showWaitMessage, setShowWaitMessage] = useState(true);
  const [showNames, setShowNames] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showBtnBackHome, setShowBtnBackHome] = useState(false);

  const navigate = useNavigate();
  const { postId } = useParams(); // Get postId from route params

  useEffect(() => {
    const fetchData = async () => {
      const userInfoString = localStorage.getItem('user-info');
      const userInfo = JSON.parse(userInfoString);
      const token = userInfo.results;
      try {
        const config = {
          headers: {
            token: `task__${token}`
          }
        };
        const response = await axios.get(`https://lostbackened.azurewebsites.net/match/matchImage/${postId}`, config); // Use postId from useParams
        console.log('Data:', response.data);

        if (response.data.message === 'match') {
          setShowWaitMessage(false);
          setShowNames(true);

          const nameInterval = setInterval(() => {
            setCurrentIndex(current => {
              const newIndex = (current + 1) % names.length;
              if (newIndex === 0) {
                clearInterval(nameInterval);
                setShowNames(false);
                setShowLoader(false);
                setShowFinalMessage(true);
                setTimeout(() => {
                  navigate('/ResultAi', { state: { data: response.data } });
                }, 9500);
              }
              return newIndex;
            });

            const x = Math.random() * (window.innerWidth - 100);
            const y = Math.random() * (window.innerHeight - 100);
            setPosition({ x, y });
          }, 1000);
        } else {
          setErrorMessage('Not found case');
          setShowLoader(false);
          setShowWaitMessage(false);
          setTimeout(() => setShowBtnBackHome(true), 5000); // Show the Back to Home button after 5 seconds
        }
      } catch (error) {
        setErrorMessage('Not Matching Found.');
        setShowLoader(false);
        setShowWaitMessage(false);
        setTimeout(() => setShowBtnBackHome(true), 11000); // Show the Back to Home button after 5 seconds
      }
    };

    setTimeout(fetchData, 5000); // Delay initial fetch for 5 seconds
  }, [navigate, names.length, postId]); // Add postId to dependencies array

  const handleBackToHome = () => {
    navigate('/home'); 
  };

  return (
    <div className='names-container' style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      {showLoader && (
        <div className="loader1"><span></span></div>
      )}
      {showWaitMessage && (
        <div className="waiting-message">
          Please Wait Until Search is Completed
        </div>
      )}
      {showNames && (
        <div className="name-display" style={{ position: 'absolute', left: `${position.x}px`, top: `${position.y}px`, transition: 'left 1s, top 1s' }}>
          {names[currentIndex]}
        </div>
      )}
      {showFinalMessage && (
        <div className="final-message">
          I Found This Case
        </div>
      )}
      {errorMessage && !showWaitMessage && (
        <div className="error-message">
          {errorMessage}
          <div className='BtnBackHome'>
            {showBtnBackHome && (
              <button onClick={handleBackToHome}>Back To Home</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Searching;
