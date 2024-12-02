import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FollowBar.css';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../Theme/ThemeContext';

function FollowBar() {
  const [followData, setFollowData] = useState([]);
  const [followedUsers, setFollowedUsers] = useState({});
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFollowData = async () => {
      try {
        const userInfoString = localStorage.getItem('user-info');
        const userInfo = JSON.parse(userInfoString);
        const token = userInfo.results;
        
        const config = {
          headers: {
            token: `task__${token}`,
          },
        };

        const response = await axios.get('https://lost-seven.vercel.app/userprofile/allusers', config);
        if (response.data.success) {
          setFollowData(response.data.result.slice(0, 5));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        if (error.response && error.response.data.message === "TokenExpiredError: jwt expired") {
          alert("Your session has expired. Please log in again.");
        }
      }
    };

    fetchFollowData();
  }, []);

  const handleFollowToggle = (userId) => {
    setFollowedUsers((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId],
    }));
  };

  const handleNavigateToViewProfile = (userId) => {
    navigate(`/ProfileUserPost/${userId}`);
  };

  return (
    <div className={`follow-box ${darkMode ? 'dark' : ''}`}>
      <h2>Who to Follow</h2>
      {followData.map((user) => (
        <div className="follow-item" key={user._id}>
          <img
            className="avatar"
            src={user.profileImage.url}
            alt={`Avatar of ${user.name}`}
            onClick={() => handleNavigateToViewProfile(user._id)}
          />
          <span className="name" onClick={() => handleNavigateToViewProfile(user._id)}>{user.name}</span>
          <button className="add-icon" onClick={() => handleFollowToggle(user._id)}>
            {followedUsers[user._id] ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-check-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"
                />
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            ) : (
              '+'
            )}
          </button>
        </div>
      ))}
      <div className="viewmore">
        <button className="Morefollow" onClick={() => navigate('/FollowPage')}>View more</button>
      </div>
    </div>
  );
}

export default FollowBar;
