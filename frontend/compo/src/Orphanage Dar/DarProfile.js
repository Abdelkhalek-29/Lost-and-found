import React, { useState, useEffect } from 'react';
import './DarProfile.css';
import axios from 'axios';
import { useTheme } from '../Theme/ThemeContext'; 
import EditDar from './EditDar'; // Import the EditDar component

function DarProfile() {
  const [userData, setUserData] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false); 
  const { darkMode } = useTheme();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userInfoString = localStorage.getItem('user-info');
        const userInfo = JSON.parse(userInfoString);
        const token = userInfo.results;
        
        const config = {
          headers: {
            token: `task__${token}` 
          }
        };

        const response = await axios.get('https://lost-seven.vercel.app/dar/allpostindar', config);
        setUserData(response.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
        if (error.response && error.response.data.message === "TokenExpiredError: jwt expired") {
          alert("Your session has expired. Please log in again.");
        }
      }
    };

    fetchUserData();
  }, []);

  const handleEditButtonClick = () => {
    setIsEditDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsEditDialogOpen(false); 
  };

  const handleCoverImageClick = () => {
    if (userData && userData.coverImage && userData.coverImage.url) {
      window.open(userData.coverImage.url, '_blank');
    }
  };

  const handleAvatarClick = () => {
    if (userData && userData.profileImage && userData.profileImage.url) {
      window.open(userData.profileImage.url, '_blank');
    }
  };

  if (!userData) {
    return (
      <div className="loading-container">
        <div className="loading-text">Loading...</div>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div>
      <div className={`cardProfile122 ${darkMode ? 'dark' : ''}`}>
        <div className="card__imgProfile" onClick={handleCoverImageClick}>
          <img className="Cover" src={userData.coverImage.url} alt="Cover" />
        </div>
        <div className="card__avatarProfile">
          <div className="avatar" onClick={handleAvatarClick}>
            <img src={userData.profileImage.url} alt="Avatar" />
          </div>
        </div>
        <div className="card__titleProfile">{userData.name}</div>
        <div className="card__subtitleProfile">{userData.userName}</div>
        <div className='aboutProfile'>
          <div className='Item'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
            </div>
            <span>{userData.email}</span>
          </div>
          <div className="card__wrapperProfile">
            <button className="card__btnProfile" onClick={handleEditButtonClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
              </svg>
              Edit profile
            </button>
          </div>
          <div className='Itemb'>
            <div>
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(userData.Location)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
              </a>
            </div>
            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(userData.Location)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span>{userData.Location}</span>
            </a>
          </div>
        </div>
      </div>
      <div className='PostUser'></div>
      {isEditDialogOpen && <EditDar isOpen={isEditDialogOpen} onClose={handleCloseDialog} />} {/* Render EditDar conditionally */}
    </div>
  );
}

export default DarProfile;
