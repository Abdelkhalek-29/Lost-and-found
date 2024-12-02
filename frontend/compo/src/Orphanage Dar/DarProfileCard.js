import React, { useState, useEffect } from 'react';
import './DarProfileCard.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useTheme } from '../Theme/ThemeContext';
import loadingphoto from './person.jpg';

function DarProfileCard() {
  const [results, setResults] = useState(null);
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  useEffect(() => {
    const fetchUserData = async () => {
      const userInfoString = localStorage.getItem('user-info');
      const userInfo = JSON.parse(userInfoString);
      const token = userInfo?.results;
      if (!token) {
        console.error('Token is missing');
        return;
      }

      try {
        const config = {
          headers: {
            token: `task__${token}`
          }
        };
        const response = await axios.get('https://lost-seven.vercel.app/dar/profileinfo', config);

        if (response.data.success) {
          setResults(response.data.results);
        } else {
          console.error('Failed to fetch user data');
        }

      } catch (error) {
        console.error('Error fetching user data:', error);
        if (error.response && error.response.data.message === "TokenExpiredError: jwt expired") {
          alert("Your session has expired. Please login again.");
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className={`card202 ${darkMode ? 'dark' : ''}`}> 
      <div className="card__img">
        <img className="Cover" src={results ? results.coverImage?.url : loadingphoto} alt="Cover" />
      </div>
      <div className="card__avatar">
        <div className="avatar">
          <img src={results ? results.profileImage?.url : loadingphoto} alt="Avatar" />
        </div>
      </div>
      <div className="card__title">{results ? results.name : 'Loading...'}</div>
      <div className="card__subtitle">{results ? results.email : 'Loading...'}</div>
      <div className='Number'>
        <div className='ItemCard'>
          <h3>500</h3>
          <p>following</p>
        </div>
        <div className='ItemCard'>
          <h3>500</h3>
          <p>follower</p>
        </div>
        <div className='ItemCard'>
          <h3>500</h3>
          <p>Rank</p>
        </div>
      </div>
      <div className="card__wrapper">
        <button className="card__btn" onClick={() => navigate("/DarProfile")}>My profile</button>
      </div>
    </div>
  );
}

export default DarProfileCard;
