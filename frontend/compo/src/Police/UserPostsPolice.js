import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UserPostsPolice.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import EditLocationPost from './EditLocationPost';

function UserPostsPolice() {
  const [postData, setPostData] = useState(null);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedPostId, setSelectedPostId] = useState(null); // Added state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const userInfoString = localStorage.getItem('user-info');
      const userInfo = JSON.parse(userInfoString);
      const token = userInfo.results;

      try {
        const config = {
          headers: {
            token: `task__${token}`,
          },
        };

        const response = await axios.get('https://lost-seven.vercel.app/police/allpost', config);

        if (response.data && response.data.results) {
          const sortedPosts = response.data.results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setPostData(sortedPosts);
        } else {
          console.error('Error fetching post data: Response data or results are undefined', response);
        }
      } catch (error) {
        console.error('Error fetching post data:', error);
        if (error.response && error.response.data.message === 'you are not authorized') {
          alert('You are not authorized. Please log in again.');
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

  const handleCloseDialog = () => {
    setIsEditDialogOpen(false);
  };

  const handlePhotoClick = (image) => {
    if (image && image.url) {
      window.open(image.url, '_blank');
    }
  };

  const handleEditButtonClick = (postId) => { // Updated function
    setSelectedPostId(postId);
    setIsEditDialogOpen(true);
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

  if (!Array.isArray(postData) || postData.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <div>
      {postData.map((results, index) => (
        <div className='PostBox1112' key={index}>
          <div className='PostHeader'>
            <img className="avatar" src={results.user.profileImage.url} alt="Avatar" />
            <div className='UserInfo'>
              <p className='UserName'>{results.user.name}</p>
              <p className='PostTime'>{getTimeElapsed(results.createdAt)}</p>
            </div>
            <div className='MenuLeftPost'>
              <button className={`menu__icon ${openMenuIndex === index ? 'active' : ''}`} onClick={() => toggleMenu(index)}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            {openMenuIndex === index && (
              <div className='Menu11'>
                <ul>
                  <li>
                    <button className='Editloc' onClick={() => handleEditButtonClick(results._id)}> {/* Pass postId */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                      </svg>
                      Edit Location
                    </button>
                  </li>
                 {/*  <li className='deletePost'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="21" height="21" viewBox="0 0 30 30">
                      <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                    </svg>
                    Delete Post
                  </li> */}
                </ul>
              </div>
            )}
          </div>
          <div className='PostContent'>
            {results.cemeteryLocation && (
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(results.cemeteryLocation)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <p className='Dead'>Dead</p>
              </a>
            )}
            {results.isClosed === "true" && (
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(results.isClosed)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <p className='Connect'>Connect</p>
              </a>
            )}
            <p className='PostText'>
              I Am {results.type} {results.gender} name( {results.firstName} {results.lastName} ) {results.age} years old  HairCut style {results.hair_type} and color {results.hair_color}, Skincolor {results.skin_color} And EyeColor {results.eye_color} Found in Address {results.address}
            </p>       
            <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
              {results.image && results.image.images && results.image.images.map((image, idx) => (
                <div key={idx}>
                  <img className="postImg" onClick={() => handlePhotoClick(image)} src={image.url} alt="Image" />
                </div>
              ))}
            </Slider>
          </div>
          <hr className="Divider" />
          <div className='PostActions'>
            {/* You can add like/comment/share actions here */}
          </div>
        </div>
      ))}
        {isEditDialogOpen && (
          <EditLocationPost
            isOpen={isEditDialogOpen}
            onClose={handleCloseDialog}
            postId={selectedPostId} 
          />
        )}
    </div>
  );
}

export default UserPostsPolice;
