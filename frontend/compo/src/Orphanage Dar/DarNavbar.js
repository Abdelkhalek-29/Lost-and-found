import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MessageIcon from '@mui/icons-material/Message'; 
import me from './me.jpg';
import './DarNavbar.css';
import NotificationMenu from './NotificationMenu';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useTheme } from '../Theme/ThemeContext'; 
import loadingphoto from './person.jpg';

const notifications = [
  {
    name: 'Abdalrhman Ahmed',
    message: 'sent you a friend request.',
    time: 'Just now',
    profilePic: me,
  },
  {
    name: 'Abdalrhman Ahmed',
    message: 'find Person like your Report as Lost.',
    time: 'Just now',
    profilePic: me,
    
  },
  {
    name: 'Abdalrhman Ahmed',
    message: 'find Person like your Report as Lost.',
    time: 'Just now',
    profilePic: me,
    
  },
  {
    name: 'Abdalrhman Ahmed',
    message: 'find Person like your Report as Lost.',
    time: 'Just now',
    profilePic: me,
    
  },
  {
    name: 'Abdalrhman Ahmed',
    message: 'find Person like your Report as Lost.',
    time: 'Just now',
    profilePic: me,
    
  }
  
];

function DarNavbar() {
  const [showList, setShowList] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [results, setResults] = useState(null);
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();
  const handleClick = () => {
    setShowList(!showList);
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  
 

  useEffect(() => {
    const fetchUserData = async () => {
      const userInfoString = localStorage.getItem('user-info');
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        const token = userInfo.results;
        try {
          const config = {
            headers: {
              token: `task__${token}`
            }
          };
          const response = await axios.get('https://lost-seven.vercel.app/dar/profileinfo', config);
          setResults(response.data.results);
        } catch (error) {
          console.error('Error fetching user data:', error);
          if (error.response && error.response.data.message === "TokenExpiredError: jwt expired") {
            alert("Your session has expired. Please login again.");
            window.location.href = '/login';
          }
        }
      }
    };
  
    fetchUserData();
  }, []);
  
  function handleSignOut() {
    localStorage.removeItem('user-info');
    localStorage.removeItem('userRole');
    navigate('/login', { replace: true });
  }
  return (
    <div className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className='left'>
        <Link to="/DarHome" style={{ textDecoration: 'none' }}>
          <h4>
            <span style={{ textTransform: 'uppercase', fontWeight: 700, marginLeft: '2px', color: 'black' }}>Find<span style={{ color: 'orange' }}>ME</span></span>
          </h4>
        </Link>
        <Link to="/DarSearch" className="link-style" >
        <div className='search'>
 
    <SearchIcon className="search-icon"/>
  
  <input placeholder="Search...." type="search" className="input" />
</div>
</Link>
      </div>
      <div className="right">
        {showList && (
          <NotificationMenu notifications={notifications}/>
        )}
        {/* Message icon */}
        <MessageIcon className='notif message-icon'  />
        {/* Mail icons */}
        <EmailOutlinedIcon className='notif email-icon'/>
        {/* notifications icons */}
        <NotificationsOutlinedIcon className='notif notifications-icon' onClick={handleClick}/>
        {results && (
          <div className="user" onClick={toggleMenu}>
            <img src={results ? results.profileImage.url : loadingphoto} alt="Profile Pic" />
           {results.status === 'online' ? (
             <div className="status-indicator1"></div>
           ) : (
               <div className="status-indicator1 offline1"></div>
          )}
              {isMenuOpen && (
              <div className="menu">
                <div className='UserInfoMenu'>
                 <img src={results ? results.profileImage.url : loadingphoto} alt="Profile Pic" />
                 <div className="menu__titleProfile">{results.name}</div>

                 </div>
                <ul>
                  <div className='btnViewC'>
                  <button className='btnView' onClick={() => navigate("/DarProfile")}>View Profile</button>
                  </div>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                    </svg>
                    Saved Posts
                  </li>
                  <li className="menu-item11"> 
                    {/* <svg 
                      viewBox="1 2 20 20"
                      fill="currentColor"
                      height="16"
                      width="20"
                    >
                      <path d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012 2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2h9z" />
                    </svg> */}
                      <button className='SOut' onClick={handleSignOut}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-power" viewBox="0 0 16 16">
                      <path d="M7.5 1v7h1V1z"/>
                      <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812"/>
                      </svg>
                      Sign Out
                     </button>
                  </li>
                  <div className='BtnMode'>
                     <p> Mode:</p>
                  <button className='BtnLight' onClick={() => darkMode && toggleTheme()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun fa-fw mode-switch" viewBox="0 0 16 16">
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                    </svg>
                  </button>
                  <button className='BtnDark' onClick={() => !darkMode && toggleTheme()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars fa-fw mode-switch" viewBox="0 0 16 16">
										<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path>
										<path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
										<use href="#"></use>
					</svg></button>
                  </div>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default DarNavbar;
