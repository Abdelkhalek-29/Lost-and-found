import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './PostOfDar.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '../Theme/ThemeContext';

function Darallpost() {
  const [postData, setPostData] = useState([]);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { darkMode } = useTheme();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const userInfoString = localStorage.getItem('user-info');
      const userInfo = JSON.parse(userInfoString);
      const token = userInfo?.results;

      if (!token) {
        console.error('Token is missing');
        return;
      }

      try {
        const config = {
          headers: {
            token: `task__${token}`
          }
        };

        const response = await axios.get('https://lost-seven.vercel.app/dar/allpost', config);

        if (response.data && response.data.results) {
          const sortedPosts = response.data.results.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          });
          setPostData(sortedPosts);
        } else {
          console.error('Error fetching post data: Response data or results are undefined', response);
        }
      } catch (error) {
        console.error('Error fetching post data:', error);
        if (error.response && error.response.data.message === "TokenExpiredError: jwt expired") {
          alert("Your session has expired. Please log in again");
        } else {
          setErrorMessage('An error occurred. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleMenu = (index) => {
    setOpenMenuIndex(index === openMenuIndex ? null : index);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handlePhotoClick = (image) => {
    if (image && image.url) {
      window.open(image.url, '_blank');
    }
  };

  const getTimeElapsed = (createdAt) => {
    const postDate = new Date(createdAt);
    const currentDate = new Date();
    const timeDifference = currentDate - postDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return `Just now`;
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text">Loading...</div>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  if (!Array.isArray(postData) || postData.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <div>
      {postData.map((post, index) => (
        <div className={`PostBox22223 ${darkMode ? 'dark' : ''}`} key={index}>
          <div className='PostHeader'>
            <img className="avatar11" src={post.user.profileImage.url} alt="Avatar" />
            <div className='UserInfo'>
              <p className='UserName'>{post.user.name}</p>
              <p className='PostTime'>{getTimeElapsed(post.createdAt)}</p>
            </div>
            <div className='MenuLeftPost'>
              <button className={`menu__icon ${openMenuIndex === index ? 'active' : ''}`} onClick={() => toggleMenu(index)}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            {openMenuIndex === index && (
              <div className='Menu1'>
                <ul>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                    </svg>
                    Save post
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    Hide Post
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className='PostContent'>
            {post.cemeteryLocation && (
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(post.cemeteryLocation)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <p className='Dead'>Dead</p>
              </a>
            )}
            {post.isClosed === "true" && (
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(post.isClosed)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <p className='Connect'>Connect</p>
              </a>
            )}
            
            <p className='PostTextDar'>
              I Am {post.type} {post.gender} name( {post.firstName} {post.lastName} ) {post.age} years old HairCut style {post.hair_type} and color {post.hair_color}, Skincolor {post.skin_color} And EyeColor {post.eye_color} Found in Address {post.address}
            </p>
            <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
              {post.image && post.image.images && post.image.images.map((image, idx) => (
                <div key={idx}>
                  <img className="postImg" onClick={() => handlePhotoClick(image)} src={image.url} alt="Image" />
                </div>
              ))}
            </Slider>
          </div>
          <hr className="Divider" />
          <div className='PostActions'>
            <button className={`ActionButton ${isLiked ? 'liked' : ''}`} onClick={toggleLike}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill={isLiked ? 'red' : 'currentColor'} className="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.920 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.090.083.176.171a3 3 0 0 1 .176-.17C12.720-3.042 23.333 4.867 8 15"/>
              </svg>
              Like
            </button>
            <button className='ActionButton'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                <path d="m2.165 15.803.020-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.970 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.800-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
              </svg>
              Comment
            </button>
            <button className='ActionButton'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="currentColor" className="bi bi-reply-fill" viewBox="0 0 16 16">
                <path d="M5.921 11.9 1.353 8.62a.72.72 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.2a.718.718 0 0 1-1.079.621Z"/>
              </svg>
              Share
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Darallpost;
