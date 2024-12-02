/*location take from api */
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditLocationPost.css';

function EditLocationPost({ isOpen, onClose }) {
  const [userData, setUserData] = useState({});
  const [location, setLocation] = useState('');
  const [locations, setLocations] = useState([]); // List of predefined locations

  const userInfoString = localStorage.getItem('user-info');
  const userInfo = JSON.parse(userInfoString);
  const token = userInfo?.results;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!token) {
          console.error('Token is missing');
          return;
        }
        const config = { headers: { token: `task__${token}` } };
        const response = await axios.get('https://lost-seven.vercel.app/userprofile/profile', config);
        const user = response.data.user;
        setUserData(user);
        setLocation(user.Location || '');
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [token]);

  useEffect(() => {
    const fetchPredefinedLocations = async () => {
      try {
        const response = await axios.get('https://lost-seven.vercel.app/locations'); // Replace with your API endpoint
        setLocations(response.data.locations || []);
      } catch (error) {
        console.error('Error fetching predefined locations:', error);
      }
    };

    fetchPredefinedLocations();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUserData = { Location: location };
      const config = { headers: { token: `task__${token}` } };
      const response = await axios.put('https://lost-seven.vercel.app/userprofile/update', updatedUserData, config);
      const updatedUser = response.data.user;
      setUserData(updatedUser);
      setLocation(updatedUser.Location || '');
      console.log('Location updated successfully');
      window.alert('Location updated successfully');
      onClose();
    } catch (error) {
      console.error('Error updating location:', error);
      window.alert('Failed to update location');
    }
  };

  return (
    <div className={`edit-profile-dialog ${isOpen ? 'open' : ''}`}>
      <div className="dialog-contentEditProfilePage" onClick={(e) => e.stopPropagation()}>
        <h2>Edit Location</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group1">
            <label htmlFor="Location">Location:</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              {locations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
          <button className='BtnSubmitDialoge' type="submit">Save Changes</button>
        </form>
        <button className='BtnCloseDialoge' onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default EditLocationPost;
 */
/* import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditLocationPost.css';

function EditLocationPost({ isOpen, onClose, postId }) {
  const [address, setAddress] = useState('');
  const [locations, setLocations] = useState([]);
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [showCemeteryLocationInput, setShowCemeteryLocationInput] = useState(false);
  const [cemeteryLocation, setCemeteryLocation] = useState('');

  const userInfoString = localStorage.getItem('user-info');
  const userInfo = JSON.parse(userInfoString);
  const token = userInfo?.results;

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        if (!token) {
          console.error('Token is missing');
          return;
        }
        const config = { headers: { token: `task__${token}` } };
        const response = await axios.get(`https://lost-seven.vercel.app/posts/${postId}`, config);
        const post = response.data.post;
        setAddress(post.Location || '');
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };

    if (postId) {
      fetchPostData();
    }
  }, [token, postId]);

  const handleLocationChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === 'Other') {
      setIsOtherSelected(true);
      setAddress(''); // Clear the location input if 'Other' is selected
    } else {
      setIsOtherSelected(false);
      setAddress(selectedValue);
    }
  };

  useEffect(() => {
    const predefinedLocations = [
      'Dar Al Orman',
      'Dar Alamal',
      'Dar ALHayat',
      'Wydad',
      'Dar Lamset Hanan El Shrouk',
      'Banat Masr',
      'Abna Masr',
      'Dar Abou Bakr El Sediq'
      // Add more locations as needed
    ];
    setLocations(predefinedLocations);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedPostData = { address: address };
      const config = { headers: { token: `task__${token}` } };
      const response = await axios.post(`https://lost-seven.vercel.app/police/changelocation/${postId}`, updatedPostData, config);
      console.log('Location updated successfully');
      window.alert('Location updated successfully');
      onClose();
    } catch (error) {
      console.error('Error updating location:', error);
      window.alert('Failed to update location');
    }
  };

  const handleDeadCase = () => {
    setShowCemeteryLocationInput(true);
  };

  const handleCemeteryLocationChange = (e) => {
    setCemeteryLocation(e.target.value);
  };

  const handleConnect = () => {
    console.log('Connect button clicked');
    window.alert('Connect button clicked');
  };

  return (
    <div className={`edit-profile-dialog ${isOpen ? 'open' : ''}`}>
      <div className="dialog-contentEditProfilePage" onClick={(e) => e.stopPropagation()}>
        <h2>Edit Location</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group1">
            <label htmlFor="address">Location:</label>
            <select value={isOtherSelected ? 'Other' : address} onChange={handleLocationChange}>
              <option value="">Select Location</option>
              {locations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
          </div>
          {isOtherSelected && (
            <div className="form-group1">
              <label htmlFor="OtherLocation">Enter Location:</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          )}
          
          <div className='BtnDead'>
            <button type="button" onClick={handleDeadCase}>Dead Case</button>
          </div>

          <div>
            <button className='BtnConnect' type="button" onClick={handleConnect}>
              Connect
            </button>
          </div>

          {showCemeteryLocationInput && (
            <div className="form-group1">
              <label htmlFor="CemeteryLocation">Cemetery Location:</label>
              <input
                type="text"
                value={cemeteryLocation}
                onChange={handleCemeteryLocationChange}
              />
            </div>
          )}

          <button className='BtnSubmitDialoge' type="submit">Save Changes</button>
        </form>
        <button className='BtnCloseDialoge' onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default EditLocationPost;
 */
/* 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditLocationPost.css';


function EditLocationPost({ isOpen, onClose, postId }) {
  const [address, setAddress] = useState('');
  const [locations, setLocations] = useState([]);
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [showCemeteryLocationInput, setShowCemeteryLocationInput] = useState(false);
  const [cemeteryLocation, setCemeteryLocation] = useState('');
  const [loading, setLoading] = useState(true);

  const userInfoString = localStorage.getItem('user-info');
  const userInfo = JSON.parse(userInfoString);
  const token = userInfo?.results;

  useEffect(() => {
    if (!isOpen) return; // Skip fetching data if dialog is not open

    const fetchPostData = async () => {
      try {
        if (!token) {
          console.error('Token is missing');
          return;
        }
        const config = { headers: { token: `task__${token}` } };
        const response = await axios.get(`https://lost-seven.vercel.app/posts/${postId}`, config);
        const post = response.data.post;
        setAddress(post.Location || '');
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };

    if (postId) {
      fetchPostData();
    }
  }, [token, postId, isOpen]);

  useEffect(() => {
    if (!isOpen) return; // Skip fetching data if dialog is not open

    const fetchLocations = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://lost-seven.vercel.app/police/alldar', { headers: { token: `task__${token}` } });
        if (response.data.success) {
          const predefinedLocations = response.data.results.map(loc => loc.name);
          setLocations(predefinedLocations);
        }
      } catch (error) {
        console.error('Error fetching locations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, [token, isOpen]);

  const handleLocationChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === 'Other') {
      setIsOtherSelected(true);
      setAddress('');
    } else {
      setIsOtherSelected(false);
      setAddress(selectedValue);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedPostData = { address: address };
      const config = { headers: { token: `task__${token}` } };
      await axios.post(`https://lost-seven.vercel.app/police/changelocation/${postId}`, updatedPostData, config);
      console.log('Location updated successfully');
      window.alert('Location updated successfully');
      onClose();
    } catch (error) {
      console.error('Error updating location:', error);
      window.alert('Failed to update location');
    }
  };

  const handleDeadCase = () => {
    setShowCemeteryLocationInput(true);
  };

  const handleCemeteryLocationChange = (e) => {
    setCemeteryLocation(e.target.value);
  };

  const handleConnect = () => {
    console.log('Connect button clicked');
    window.alert('Connect button clicked');
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={`edit-profile-dialog ${isOpen ? 'open' : ''}`}>
      <div className="dialog-contentEditProfilePage" onClick={(e) => e.stopPropagation()}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <h2>Edit Location</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group1">
                <label htmlFor="address">Location:</label>
                <select value={isOtherSelected ? 'Other' : address} onChange={handleLocationChange}>
                  <option value="">Select Location</option>
                  {locations.map((loc, index) => (
                    <option key={index} value={loc}>
                      {loc}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              {isOtherSelected && (
                <div className="form-group1">
                  <label htmlFor="OtherLocation">Enter Location:</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              )}

              <div className='BtnDead'>
                <button type="button" onClick={handleDeadCase}>Dead Case</button>
              </div>

              <div>
                <button className='BtnConnect' type="button" onClick={handleConnect}>
                  Connect
                </button>
              </div>

              {showCemeteryLocationInput && (
                <div className="form-group1">
                  <label htmlFor="CemeteryLocation">Cemetery Location:</label>
                  <input
                    type="text"
                    value={cemeteryLocation}
                    onChange={handleCemeteryLocationChange}
                  />
                </div>
              )}

              <button className='BtnSubmitDialoge' type="submit">Save Changes</button>
            </form>
          </>
        )}
        <button className='BtnCloseDialoge' onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default EditLocationPost;
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditLocationPost.css';

function EditLocationPost({ isOpen, onClose, postId }) {
  const [address, setAddress] = useState('');
  const [locations, setLocations] = useState([]);
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [showCemeteryLocationInput, setShowCemeteryLocationInput] = useState(false);
  const [cemeteryLocation, setCemeteryLocation] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const userInfoString = localStorage.getItem('user-info');
  const userInfo = JSON.parse(userInfoString);
  const token = userInfo?.results;

  useEffect(() => {
    if (!isOpen) return; 

    const fetchPostData = async () => {
      try {
        if (!token) {
          console.error('Token is missing');
          return;
        }
        const config = { headers: { token: `task__${token}` } };
        const response = await axios.get(`https://lost-seven.vercel.app/posts/${postId}`, config);
        const post = response.data.post;
        setAddress(post.Location || '');
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };

    if (postId) {
      fetchPostData();
    }
  }, [token, postId, isOpen]);

  useEffect(() => {
    if (!isOpen) return; 

    const fetchLocations = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://lost-seven.vercel.app/police/alldar', { headers: { token: `task__${token}` } });
        if (response.data.success) {
          const predefinedLocations = response.data.results.map(loc => loc.name);
          setLocations(predefinedLocations);
        }
      } catch (error) {
        console.error('Error fetching locations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, [token, isOpen]);

  const handleLocationChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === 'Other') {
      setIsOtherSelected(true);
      setAddress('');
    } else {
      setIsOtherSelected(false);
      setAddress(selectedValue);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedPostData = { address: address };
      const config = { headers: { token: `task__${token}` } };

      const response = await axios.post(`https://lost-seven.vercel.app/police/changelocation/${postId}`, updatedPostData, config);
      
      if (showCemeteryLocationInput && cemeteryLocation.trim() !== '') {
        const cemeteryData = { cemeteryLocation: cemeteryLocation };
        await axios.post(`https://lost-seven.vercel.app/police/death/${postId}`, cemeteryData, config);
      }

      setSuccessMessage('Location updated successfully');
      setShowSuccessMessage(true);

      setTimeout(() => {
        onClose();
       
        if (response.data.success) {
          window.location.reload();
        }
      }, 3000); 
    } catch (error) {
      console.error('Error updating location:', error);
      setErrorMessage('Failed to update location');
    }
  };

  const handleDeadCase = () => {
    setShowCemeteryLocationInput(true);
  };

  const handleCemeteryLocationChange = (e) => {
    setCemeteryLocation(e.target.value);
  };

  const handleConnect = async () => {
    try {
      const config = { headers: { token: `task__${token}` } };
      const response = await axios.post(`https://lost-seven.vercel.app/police/connected/${postId}`, {}, config);
  
      if (response.data.success) {
        setSuccessMessage('Connected successfully');
        setShowSuccessMessage(true);
  
        setTimeout(() => {
          onClose();
  
          if (response.data.success) {
            window.location.reload();
          }
        }, 3000);
      } else {
        setErrorMessage('Failed to connect');
      }
    } catch (error) {
      console.error('Error connecting:', error);
      setErrorMessage('Failed to connect');
    }
  };
  
  const handleSuccessMessageClose = () => {
    setShowSuccessMessage(false);
  };



  if (!isOpen) {
    return null;
  }

  return (
    <div className={`edit-profile-dialog ${isOpen ? 'open' : ''}`}>
      <div className="dialog-contentEditProfilePage" onClick={(e) => e.stopPropagation()}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <h2>Edit Location</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group1">
                <label htmlFor="address">Location:</label>
                <select value={isOtherSelected ? 'Other' : address} onChange={handleLocationChange}>
                  <option value="">Select Location</option>
                  {locations.map((loc, index) => (
                    <option key={index} value={loc}>
                      {loc}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              {isOtherSelected && (
                <div className="form-group1">
                  <label htmlFor="OtherLocation">Enter Location:</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              )}

              <div className='BtnDead'>
                <button type="button" onClick={handleDeadCase}>Dead Case</button>
              </div>

              <div>
                <button className='BtnConnect' type="button" onClick={handleConnect}>
                  Connect
                </button>
              </div>

              {showCemeteryLocationInput && (
                <div className="form-group1">
                  <label htmlFor="CemeteryLocation">Cemetery Location:</label>
                  <input
                    type="text"
                    value={cemeteryLocation}
                    onChange={handleCemeteryLocationChange}
                  />
                </div>
              )}

              <button className='BtnSubmitDialoge' type="submit">Save Changes</button>
            </form>
          </>
        )}
        <button className='BtnCloseDialoge' onClick={onClose}>X</button>
      </div>
      {showSuccessMessage && (
        <div className="successOrphanage">
          <div className="success__icon">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z" fill="#393a37" fillRule="evenodd"/>
            </svg>
          </div>
          <div className="success__title">{successMessage}</div>
          <div className="success__close" onClick={handleSuccessMessageClose}>
            <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.8333 5.34166l-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" fill="#393a37"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditLocationPost;
