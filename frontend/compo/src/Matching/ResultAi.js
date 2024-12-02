import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ResultAi.css';

function ResultAi() {
  const location = useLocation();
  const responseData = location.state?.data;

  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const handleNavigateToAddReport = (postId) => {
    navigate(`/add-report/${postId}`);
  };

  const handleNavigateToViewProfile = (userId) => {
    navigate(`/ProfileUserPost/${userId}`);
  };

  const toggleMenu = (index) => {
    setOpenMenuIndex(index === openMenuIndex ? null : index);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  const handleExitAi = () => {
    navigate('/home');
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

  const handlePhotoClick = (image) => {
    if (image && image.url) {
      window.open(image.url, '_blank');
    }
  };

  useEffect(() => {
    console.log('Response Data:', responseData);
  }, [responseData]);

  if (!responseData || !responseData.posts || responseData.posts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <div className='aimatching'>
      <div className="slide-up left-curtain"></div>
      <div className="slide-up right-curtain"></div>
      <div className='whichPost' >
        <p className='whichPostME'>My Post</p>
        <p className='whichPostYour' >Post Matched</p>
        <button className='BtnExitAi 'onClick={handleExitAi}>X</button>
        </div>
      {responseData.posts.map((post, index) => (
        <div className='PostBoxai' key={post._id}>
          <div className='PostHeaderai'>
            <img className="avatar11" src={post.createdBy.profileImage.url} alt="Avatar" onClick={() => handleNavigateToViewProfile(post.createdBy)} />
            {post.createdBy.status === 'online' && <div className="status-indicator2"></div>}

            <div className='UserInfo'>
              <p className='UserName' onClick={() => handleNavigateToViewProfile(post.createdBy._id)}>{post.createdBy.name}</p>     
              <p className='PostTime'>{getTimeElapsed(post.createdAt)}</p>
            </div>
            <div className='MenuLeftPost'>
              <button 
                className={`menu__icon ${openMenuIndex === index ? 'active' : ''}`} 
                onClick={() => toggleMenu(index)}
                aria-label={`Toggle menu ${index}`} 
                title={`Toggle menu ${index}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            {openMenuIndex === index && (
             <div className='Menu'>
             <ul>
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                   <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                 </svg>
                 Save post
               </li>
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-x" viewBox="0 0 16 16">
                   <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                   <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708"/>
                 </svg>
                 Unfollow
               </li>
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                   <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                   <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                 </svg>
                 Hide Post
               </li>
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15"  fill="currentColor" className="bi bi-slash-circle" viewBox="0 0 16 16">
                   <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                   <path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708"/>
                 </svg>
                 Block
               </li>
               <li onClick={() => handleNavigateToAddReport(post._id)}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-flag" viewBox="0 0 16 16">
                   <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21 21 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21 21 0 0 0 14 7.655V1.222z"/>
                 </svg>
                 Report Post
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
              I Am {post.type} {post.gender} Name( {post.firstName} {post.lastName} ) {post.age} years old  HairCut style {post.hair_type} and color {post.hair_color}, Skincolor {post.skin_color} And EyeColor {post.eye_color} {post.type} in Address {post.address}
            </p>  

            <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
              {post.imageId && post.imageId.images && post.imageId.images.map((images, idx) => (
                <div key={idx}>
                  <img className="postImg" onClick={() => handlePhotoClick(images)} src={images.url} alt="Image" />
                </div>
              ))}    
            </Slider>
          </div>
          <hr className="Divider" />
        </div>
      ))}
    </div>
  );
}

export default ResultAi;
