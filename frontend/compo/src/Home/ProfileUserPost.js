/* import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfileUserPost.css';
import { useParams } from 'react-router-dom';

function ProfileUserPost() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userid } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmIwOTMwYTM0ODE1NTg3ZGIwMWExZSIsImVtYWlsIjoiYWJkYWxyaG1hbmFobWVkNzIxQGdtYWlsLmNvbSIsImlhdCI6MTcxNDI2MzQwNywiZXhwIjoxNzE0NTIyNjA3fQ.Mpqt6FqMyTKUd-K5Fx4F2ADSqSD7y02IXrFNiUN0gIE';
        const config = {
          headers: {
            token: `task__${token}`
          }
        };
        const response = await axios.get(`https://lost-seven.vercel.app/userprofile/viewuserprofile/${userid}`, config);
        console.log('Response data:', response.data);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        if (error.response && error.response.data.message === "TokenExpiredError: jwt expired") {
          alert("Your session has expired Please login again.");
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, [userid]);
  
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text">Loading...</div>
        <div className="loading-spinner"></div>
      </div>
    );
  }
  
  if (!userData || !userData.userProfile) {
    console.log('No user data available.');
    return <div>No user data available.</div>;
  }
  
  const userProfile = userData.userProfile;
  const handleCoverImageClick1 = () => {
    if (userData && userData.coverImage && userData.coverImage.url) {
      window.open(userData.coverImage.url, '_blank1');
    }
  };
  const handleAvatarClick1 = () => {
    if (userData && userData.profileImage && userData.profileImage.url) {
      window.open(userData.profileImage.url, '_blank1');
    }
  };
  return (
    <div>
      <div className="cardProfile1">
        <div className="card__imgProfile1" onClick={handleCoverImageClick1}>
          <img className="Cover1" src={userProfile.coverImage.url} alt="Cover" />
        </div>
        <div className="card__avatarProfile1" onClick={handleAvatarClick1}>
          <div className="avatar">
            <img src={userProfile.profileImage.url} alt="Avatar" />
            {userProfile.status === 'online' ? (
           <div className="status-indicator"></div>
           ) : (
           <div className="status-indicator offline"></div>
           )}
          </div>
        </div>
        <div className="card__titleProfile1">{userProfile.name}</div>
        <div className="card__subtitleProfile1">{userProfile.userName}</div>
        <div className='aboutProfile1'>
          <div className='Item1'>
          <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
            </div>
            <span>{userProfile.email}</span>
          </div>
          <div className='Itemb1'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-vcard" viewBox="0 0 16 16">
                <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z"/>
              </svg>
            </div>
            <span>{userProfile.nId}</span>
          </div>
          <div className='Itemc1'>
  {userProfile.phone && (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
      </svg> 
    </div>
  )}
  <span>{userProfile.phone}</span>
</div>

        </div>
      </div>
    </div>
  );
  
  }
export default ProfileUserPost; */



/* userProfile.phone && (
  <div>
    <svg aria-hidden="true" focusable="false" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em">
      <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/>
    </svg>
    <span>{userProfile.phone}</span>
  </div>
)}
</div> */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfileUserPost.css';
import { useParams } from 'react-router-dom';
import MyPosts from './MyPosts';
import YourPosts from './YourPosts';
import { useTheme } from '../Theme/ThemeContext'; 

function ProfileUserPost() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userid } = useParams();
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
        const response = await axios.get(`https://lost-seven.vercel.app/userprofile/viewothersprofile/${userid}`, config);
        console.log('Response data:', response.data);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        if (error.response && error.response.data.message === "TokenExpiredError: jwt expired") {
          alert("Your session has expired. Please login again.");
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, [userid]);
  
  const handleCoverImageClick = () => {
    if (userData && userData.userProfile && userData.userProfile.coverImage && userData.userProfile.coverImage.url) {
      window.open(userData.userProfile.coverImage.url, '_blank');
    }
  };

  const handleAvatarClick = () => {
    if (userData && userData.userProfile && userData.userProfile.profileImage && userData.userProfile.profileImage.url) {
      window.open(userData.userProfile.profileImage.url, '_blank');
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text"></div>
        <div className="loading-spinner"></div>
      </div>
    );
  }
  
  if (!userData || !userData.userProfile) {
    console.log('No user data available.');
    return <div>No user data available.</div>;
  }
  
  const userProfile = userData.userProfile;

  return (
    <div>  
      <div className={`cardProfile1 ${darkMode ? 'dark' : ''}`}>
        <div className="card__imgProfile1" onClick={handleCoverImageClick}>
          <img className="Cover1" src={userProfile.coverImage.url} alt="Cover" />
        </div>
        <div className="card__avatarProfile1" onClick={handleAvatarClick}>
          <div className="avatar">
            <img src={userProfile.profileImage.url} alt="Avatar" />
            {userProfile.status === 'online' ? (
              <div className="status-indicator"></div>
            ) : (
              <div className="status-indicator offline"></div>
            )}
          </div>
        </div>
        <div className="card__titleProfile1">{userProfile.name}</div>
        <div className="card__subtitleProfile1">{userProfile.userName}</div>
        <div className='aboutProfile1'>
          <div className='Item1'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
            </div>
            <span>{userProfile.email}</span>
          </div>
          <div className='Itemb1'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-vcard" viewBox="0 0 16 16">
                <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z"/>
              </svg>
            </div>
            <span>{userProfile.nId}</span>
          </div>
          <div className='Itemc1'>
            {userProfile.phone && (
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg> 
              </div>
            )}
            <span>{userProfile.phone}</span>
          </div>
        </div>
      </div>
      <YourPosts userid={userid} />
    </div>
    
  );
}

export default ProfileUserPost;
