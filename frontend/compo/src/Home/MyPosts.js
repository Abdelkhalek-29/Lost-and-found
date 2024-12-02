import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MyPosts.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '../Theme/ThemeContext'; 
import faceai from './face-mapping (1).png';
import ageai from './age1.png';

function MyPosts() {
  const [postData, setPostData] = useState(null);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('')
  const { darkMode } = useTheme();

  const handleNavigateResultai = (postId) => {
    navigate(`/IntroMatcing/${postId}`);
  };

  const handleNavigategans = () => {
    navigate('/PredictionForm');
  }
  
  useEffect(() => {
    const fetchData = async () => {
        const userInfoString = localStorage.getItem('user-info');
        const userInfo = JSON.parse(userInfoString);
        const token = userInfo.results;
      try {
        const config = {
          headers: {
            token: `task__${token}`
          }
        };

        const response = await axios.get('https://lost-seven.vercel.app/userprofile/posts', config);
        
       
    if (response.data && response.data.posts) {
    const sortedPosts = response.data.posts.sort((a, b) => {
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
        }
      }
      finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  /* const handleNavigateToAddReport = (postId) => {
    navigate(`/add-report/${postId}`);
  };

  const handleNavigateToViewProfile = (userId) => {
    navigate(`/ProfileUserPost/${userId}`); // Navigating to the profile page with the user ID
  }; */
  const handleDeletePost = async (postId) => {
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
    
      const response = await axios.delete(`https://lost-seven.vercel.app/post/${postId}`, config);
    
      if (response.status === 200 && response.data.success) {
        console.log('Post deleted successfully:', response.data);
        setSuccessMessage('Post deleted successfully');
        setPostData(prevPosts => prevPosts.filter(post => post._id !== postId));
      } else {
        console.error('Failed to delete post:', response.data);
      }
    } catch (error) {
      handleErrorResponse(error);
    }
  };
  const handleCloseSuccess = () => {
    setSuccessMessage('');
  };
 
  const handleErrorResponse = (error) => {
    console.error('Error:', error);
    setErrorMessage('An error occurred. Please try again later.');
  }
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

  if (!postData) {
    return (
      <div className="loading-container">
        <div className="loading-text"></div>
        <div className="loading-spinner"></div>
      </div>
    );
  }
  
  
  

  if (!Array.isArray(postData) || postData.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <div>
    
      {loading &&  (
        <div className="loading" >
          <div className="loading-spinner"></div>
        </div>
      )}
      {!loading && postData.map((post, index) =>  (
       <div className={`PostBox22224 ${darkMode ? 'dark' : ''}`} key={index}>
          <div className='PostHeader'>
            <img className="avatar11" src={post.user.profileImage.url} alt="Avatar" /* onClick={() => handleNavigateToViewProfile(post.user._id)} */ />
            <div className='UserInfo'>
              <p className='UserName'>{post.user.name} </p>
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
                
                  <li onClick={() => handleDeletePost(post._id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    Delete Post
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
                <p className='Dead' style={{ marginBottom: '-40px' }}>Dead</p>
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
            <p className='PostText'>
              I Am {post.type} {post.gender} name( {post.firstName} {post.lastName} ) {post.age} years old  HairCut style {post.hair_type} and color {post.hair_color}, Skincolor {post.skin_color} And EyeColor {post.eye_color} Found in Address {post.address}
            </p>       
            <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} >
              {post.image && post.image.images && post.image.images.map((image, idx) => (
                <div key={idx}>
                  <img className="postImg" onClick={() => handlePhotoClick(image)} src={image.url} alt="Image" />
                </div>
              ))}    
            </Slider>
          </div>
          <hr className="Divider" />
          <div className='PostActions'>
          <button className='ActionButton'>
              <il onClick={() => handleNavigateResultai(post._id)}>  
              <img  className='faceai' src={faceai} alt="Matching result" />
              <p className='pofbtn'>  Matching result </p>
              </il>
            </button>
            <div className='divider'></div> {/* Divider element */}
            <button className='ActionButton'>
              <il onClick={() => handleNavigategans(post._id)}>  
              <img  className='faceai' src={ageai} alt="Matching result" />
              <p className='pofbtn'>  Age Transforamtion </p>
              </il>
            </button>
          </div>
        </div>
     ))}
     {successMessage && (
   <div className="successdelete">
     <div className="success__icon">
       {/* Your success icon SVG */}
     </div>
     <div className="success__title">{successMessage}</div>
     <div className="success__close" onClick={handleCloseSuccess}>
       {/* Your close icon SVG */}
     </div>
   </div>
 )}
</div>
);
}

export default MyPosts;
 
          