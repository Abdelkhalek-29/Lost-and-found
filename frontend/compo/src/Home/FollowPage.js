import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FollowPage.css';
import { useNavigate } from 'react-router-dom';
import FollowPageBack from './white-texture-background.jpg';

function FollowPage() {
  const [followData, setFollowData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

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
          setFollowData(response.data.result); // Set the entire result array
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        if (error.response && error.response.data.message === "TokenExpiredError: jwt expired") {
          alert("Your session has expired. Please log in again.");
        }
      }
    };

    fetchFollowData(); // This will only run once on component mount
  }, []); // Empty dependency array ensures this effect runs only once

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleNavigateToViewProfile = (userId) => {
    navigate(`/ProfileUserPost/${userId}`); // Navigate to profile page with userId
  };

  // Filter followData based on searchQuery
  const filteredUsers = followData.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="follow-page">
      <div className='background-container'>
        <img src={FollowPageBack} alt='FollowPageBack' className='FollowPageBack' />
      </div>
      <div className="follow-boxs">
        <h2>Who to Follow</h2>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        {filteredUsers.map((item, index) => (
          <div className="followPage-itemPage" key={item._id}>
            <img
              className="avatar"
              src={item.profileImage.url}
              alt={`Avatar ${index}`}
              onClick={() => handleNavigateToViewProfile(item._id)} // Navigate on avatar click
            />
            <span
              className="name"
              onClick={() => handleNavigateToViewProfile(item._id)} // Navigate on name click
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FollowPage;
