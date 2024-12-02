import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditDar.css';
import person from './person.jpg';

function EditDar({ isOpen, onClose }) {
  const [userData, setUserData] = useState({
    coverImage: { url: '' },
    profileImage: { url: '' },
  });

  const [error, setError] = useState('');
  const [updateCoverProfile, setCoverImage] = useState(null);
  const [avatarImage, setAvatarImage] = useState(null);
  const userInfoString = localStorage.getItem('user-info');
  const userInfo = JSON.parse(userInfoString);
  const token = userInfo?.results;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!token) {
          setError('Token is missing');
          return;
        }
        const config = { headers: { token: `task__${token}` } };
        const response = await axios.get('https://lost-seven.vercel.app/dar/allpostindar', config);
        const user = response.data.user;
        setUserData(user);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, [token]);

  const handleCoverImageChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

  const handleAvatarImageChange = (e) => {
    setAvatarImage(e.target.files[0]);
  };

  const handleImageUpload = async (image, endpoint, key) => {
    try {
      if (!token) {
        setError('Token is missing');
        return;
      }
      const formData = new FormData();
      formData.append(key, image);
      const config = { headers: { token: `task__${token}` } };
      await axios.put(endpoint, formData, config);
      console.log('Image uploaded successfully');
      window.alert('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      window.alert('Image upload failed');
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (updateCoverProfile) {
      await handleImageUpload(updateCoverProfile, 'https://lost-seven.vercel.app/dar/updateCoverProfile', 'updateCoverProfile');
    }
    if (avatarImage) {
      await handleImageUpload(avatarImage, 'https://lost-seven.vercel.app/dar/updateProfileImage', 'imageProfile');
    }
    onClose();
  };

  return (
    <div className={`edit-profile-dialog ${isOpen ? 'open' : ''}`}>
      <div className="dialog-contentEditProfilePage">
        <h2>Edit Profile Images</h2>
        <form onSubmit={handleSubmit}>
          <div className="card__imgProfileEdit">
            {userData.coverImage && (
              <label htmlFor="coverImageUpload">
                <img className="CoverEdit" src={userData.coverImage.url} alt="Cover" />
              </label>
            )}
            <input
              id="coverImageUpload"
              type="file"
              accept="image/*"
              onChange={handleCoverImageChange}
              style={{ display: 'none' }}
            />
          </div>
          <div className="card__avatarProfileEdit">
            <label htmlFor="avatarImageUpload">
              <div className="avatarEdit">
                <div className="avatarImageWrapper">
                  <img src={userData.profileImage.url || person} alt="Avatar" className="avatarImage" />
                </div>
              </div>
            </label>
            <input
              id="avatarImageUpload"
              type="file"
              accept="image/*"
              onChange={handleAvatarImageChange}
              style={{ display: 'none' }}
            />
          </div>
          <button className="BtnSubmitDialoge" type="submit">Save Changes</button>
        </form>
        <button className="BtnCloseDialoge" onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default EditDar;
