/* import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditProfilePage.css';
import me from './me.jpg';

function EditProfilePage() {
  const [userData, setUserData] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [avatarImage, setAvatarImage] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDJlMzJlNGM2Yzc5MGQ4ZDY2NDM4YSIsImVtYWlsIjoiZGFsaWRhQGdtYWlsLmNvbSIsImlhdCI6MTcxMTk3OTc2MiwiZXhwIjoxNzEyMjM4OTYyfQ.JaXuVc91EraUBbXuIZBf69HMFuXMMUno_NJ3IBLFB1w';
        const config = { headers: { token: `task__${token}` } };
        const response = await axios.get('https://lost-seven.vercel.app/userprofile/profile', config);
        const user = response.data.user;
        setUserData(user);
        setName(user.name);
        setEmail(user.email);
        setGender(user.gender);
        setPhone(user.phone || '');
        setLocation(user.Location || '');
        setNickname(user.userName || '');
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, []);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUserData = { name, email, gender, phone, Location, userName: nickname };
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmIwOTMwYTM0ODE1NTg3ZGIwMWExZSIsImVtYWlsIjoiYWJkYWxyaG1hbmFobWVkNzIxQGdtYWlsLmNvbSIsImlhdCI6MTcxNDI2MzQwNywiZXhwIjoxNzE0NTIyNjA3fQ.Mpqt6FqMyTKUd-K5Fx4F2ADSqSD7y02IXrFNiUN0gIE';
      const config = { headers: { token: `task__${token}` } };
      const response = await axios.put('https://lost-seven.vercel.app/userprofile/update', updatedUserData, config);
      const updatedUser = response.data.user;
      setUserData(updatedUser);
      setName(updatedUser.name);
      setEmail(updatedUser.email);
      setGender(updatedUser.gender);
      setPhone(updatedUser.phone || '');
      setLocation(updatedUser.Location || '');
      setNickname(updatedUser.userName || '');
      console.log('Profile updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating user profile:', error);
      window.alert('updated successfully');
    }
    handleDialogClose();
  };

  const handleSubmitFormClick = (e) => {
    e.stopPropagation();
  };

  const handleCoverImageChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

  const handleAvatarImageChange = (e) => {
    setAvatarImage(e.target.files[0]);
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('coverImage', coverImage);
      // Add your cover image upload endpoint here
      // const coverImageResponse = await axios.post('your_cover_image_upload_endpoint', formData);
      console.log('Cover Image uploaded successfully');

      formData.delete('coverImage');
      formData.append('avatarImage', avatarImage);
      // Add your avatar image upload endpoint here
      // const avatarImageResponse = await axios.post('your_avatar_image_upload_endpoint', formData);
      console.log('Avatar Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      window.alert('Image upload failed');
    }
    handleDialogClose();
  };

  return (
    <div>
      <button onClick={handleDialogOpen}>Edit Profile</button>
      {error && <p>{error}</p>}
      {dialogOpen && (
        <div className="dialogEditProfilePage" onClick={handleDialogClose}>
          <div className="dialog-contentEditProfilePage" onClick={handleSubmitFormClick}>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="card__imgProfileEdit">
                <label htmlFor="coverImageUpload">
                  <img className="CoverEdit" src={me} alt="Cover" />
                </label>
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
                      <img src={me} alt="Avatar" className="avatarImage" />
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
              <div className="form-row">
                <div className="form-group1">
                  <label htmlFor="Name">Name:</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group1">
                  <label htmlFor="Nickname">Nickname:</label>
                  <input
                    type="text"
                    placeholder="@name"
                      value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group1">
                  <label htmlFor="Email">Email:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group1">
                  <label htmlFor="Phone">Phone:</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group1">
                  <label htmlFor="Location">Location:</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group1">
                  <label htmlFor="Gender">Gender:</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
              <button type="submit">Save Changes</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditProfilePage;
 */
 /* const handleImageUpload = async (e) => {
    e.preventDefault();
    try {
      console.log('Cover Image uploaded successfully');
      console.log('Avatar Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      window.alert('Image upload failed');
    }
    onClose(); // Close the dialog after image upload
  };  */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditProfilePage.css';
import me from './me.jpg';

function EditProfilePage({ isOpen, onClose }) {
  const [userData, setUserData] = useState({
    coverImage: { url: '' }, // Providing default values
    profileImage: { url: '' }, // Providing default values
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');
  const [coverProfile, setCoverImage] = useState(null);
  const [avatarImage, setAvatarImage] = useState(null);
  const userInfoString = localStorage.getItem('user-info');
  const userInfo = JSON.parse(userInfoString);
  const token = userInfo?.results; // Added optional chaining

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!token) {
          setError('Token is missing');
          return;
        }
        const config = { headers: { token: `task__${token}` } };
        const response = await axios.get('https://lost-seven.vercel.app/userprofile/profile', config);
        const user = response.data.user;
        setUserData(user);
        setName(user.name);
        setEmail(user.email);
        setGender(user.gender);
        setPhone(user.phone || '');
        setLocation(user.Location || '');
        setNickname(user.userName || '');
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleImageUpload();
      const updatedUserData = { name, email, gender, phone, Location: location, userName: nickname };
      const config = { headers: { token: `task__${token}` } };
      const response = await axios.put('https://lost-seven.vercel.app/userprofile/update', updatedUserData, config);
      const updatedUser = response.data.user;
      setUserData(updatedUser);
      setName(updatedUser.name);
      setEmail(updatedUser.email);
      setGender(updatedUser.gender);
      setPhone(updatedUser.phone || '');
      setLocation(updatedUser.Location || '');
      setNickname(updatedUser.userName || '');
      console.log('Profile updated successfully');
      window.alert('Profile updated successfully'); 
      onClose();
    } catch (error) {
      console.error('Error updating user profile:', error);
      /* window.alert('Failed to update profile'); */
    }
  };

  useEffect(() => {
    const fetchUserOptions = async () => {
      try {
        if (!token) {
          setError('Token is missing');
          return;
        }
        const config = { headers: { token: `task__${token}` } };
        const response = await axios.get('https://lost-seven.vercel.app/userprofile/options', config);
        setUserData(response.data.user);
      } catch (error) {
        console.error('Error fetching user options:', error);
        if (error.response && error.response.data.message === "TokenExpiredError: jwt expired") {
          alert("Your session has expired. Please login again.");
        }
      }
    };

    fetchUserOptions();
  }, [token]);

  const handleSubmitFormClick = (e) => {
    e.stopPropagation();
  };

  const handleCoverImageChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

  const handleAvatarImageChange = (e) => {
    setAvatarImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    try {
      if (!token) {
        setError('Token is missing');
        return;
      }
      if (coverProfile) {
        const coverFormData = new FormData();
        coverFormData.append('coverProfile', coverProfile);
        const config = { headers: { token: `task__${token}` } };
        await axios.put('https://lost-seven.vercel.app/userprofile/updateCoverProfile', coverFormData, config);
        console.log('Cover Image uploaded successfully');
        window.alert('Cover Image uploaded successfully'); 
      }

      if (avatarImage) {
        const avatarFormData = new FormData();
        avatarFormData.append('imageProfile', avatarImage);
        const config = { headers: { token: `task__${token}` } };
        await axios.put('https://lost-seven.vercel.app/userprofile/updateProfileImage', avatarFormData, config);
        console.log('Avatar Image uploaded successfully');
        window.alert('Avatar Image uploaded successfully'); 
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      window.alert('Image upload failed');
      throw error;
    }
  };

  return (
    <div className={`edit-profile-dialog ${isOpen ? 'open' : ''}`}>
      <div className="dialog-contentEditProfilePage" onClick={handleSubmitFormClick}>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
        <div className="card__imgProfileEdit">
  {userData && userData.coverImage && (
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
                  <img src={userData ? userData.profileImage.url : me} alt="Avatar" className="avatarImage" />
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
          <div className="form-row">
            <div className="form-group1">
              <label htmlFor="Name">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="Nickname">Nickname:</label>
              <input
                type="text"
                placeholder="@name"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group1">
              <label htmlFor="Email">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="Phone">Phone:</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="Location">Location:</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group1">
              <label htmlFor="Gender">Gender:</label>
              <select
                className='selectDialoge'
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <button className='BtnSubmitDialoge' type="submit">Save Changes</button>
        </form>
        <button className='BtnCloseDialoge' onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default EditProfilePage;
