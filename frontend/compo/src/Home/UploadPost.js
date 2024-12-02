import React, { useState, useEffect } from 'react';
import './UploadPost.css'; 
import me from './me.jpg';
import iconphoto from './photo-48 (1).png';
import iconvideo from './video-30.png';
import axios from 'axios';
import Postinputform from './Postinputform'; // Import the Postinputform component
import { useTheme } from '../Theme/ThemeContext'; 
import loadingphoto from './person.jpg';

function UploadPost() {
  const [isPhotoDialogOpen, setIsPhotoDialogOpen] = useState(false);
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);
  const [selectedPhotoFiles, setSelectedPhotoFiles] = useState([]);
  const [selectedVideoFiles, setSelectedVideoFiles] = useState([]);
  const [isPostInputFormVisible, setIsPostInputFormVisible] = useState(false); // New state
  const [userData, setUserData] = useState(null);
  const { darkMode } = useTheme();


  const handlePhotoButtonClick = () => {
    setIsPhotoDialogOpen(true);
    setIsPostInputFormVisible(true); // Show the Postinputform component
  };

  const handleVideoButtonClick = () => {
    setIsVideoDialogOpen(true);
    setIsPostInputFormVisible(true); // Show the Postinputform component
  };

  const handleCloseDialog = () => {
    setIsPhotoDialogOpen(false);
    setIsVideoDialogOpen(false);
    setIsPostInputFormVisible(false); // Hide the Postinputform component
  };

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
      }
    };
  
    fetchUserData();
  }, []);

  return (
    <div className={`container ${darkMode ? 'dark' : ''}`}> 
      <div className="post-card">
        <div className="post-input" onClick={() => setIsPostInputFormVisible(true)}>
          <img src={userData ? userData.profileImage.url : loadingphoto} alt="Avatar" />
          <form>
            <textarea rows="2" placeholder="Share your thoughts..."></textarea>
          </form>
        </div>
        <div className="post-actions">
          <button className="button" onClick={handlePhotoButtonClick}>
            <img src={iconphoto} alt="Photo Icon" />
            Photo
          </button>
          <button className="button" onClick={handleVideoButtonClick}>
            <img src={iconvideo} alt="Video Icon" />
            Video
          </button>
          <button className="post-button">Post</button>
        </div>  
      </div>
      {isPostInputFormVisible && <Postinputform handleCloseDialog={handleCloseDialog} />} 
    </div>
  );
}

export default UploadPost;
  