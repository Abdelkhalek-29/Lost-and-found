import React, { useState, useEffect } from 'react';
import './Profilecard.css';
import me from './me.jpg';
import CoverProfile from './CoverProfile.jpg';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useTheme } from '../Theme/ThemeContext'; 
import loadingphoto from './person.jpg';

function Profilecard() {
  const [userData, setUserData] = useState(null); // State to store user data
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  useEffect(() => {
    const fetchUserData = async () => {
      const userInfoString = localStorage.getItem('user-info');
        const userInfo = JSON.parse(userInfoString);
        const token = userInfo.results;
      try {
        const config = {
          headers: {
            token: `task__${token}`
          }
        };
        const response = await axios.get('https://lost-seven.vercel.app/userprofile/options', config);
        setUserData(response.data.user);
      
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
        <img className="Cover" src={userData ? userData.coverImage.url : loadingphoto} alt="Cover" />
      </div>
      <div className="card__avatar">
        <div className="avatar">
          <img src={userData ? userData.profileImage.url : loadingphoto} alt="Avatar" />
        </div>
      </div>
      <div className="card__title">{userData ? userData.name : 'Loading...'}</div>
      <div className="card__subtitle">{userData ? userData.userName : 'Loading...'}</div>
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
        <button className="card__btn" onClick={() => navigate("/ProfilePage")}>My profile</button>
      </div>
    </div>
  );
}

export default Profilecard;
