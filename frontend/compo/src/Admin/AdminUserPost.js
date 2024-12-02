/* import React, { useState } from 'react';
import me from './me.jpg';
import './Posts.css';

function Posts() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='PostBox'>
      <div className='PostHeader'>
        <img className="avatar" src={me} alt="Avatar" />
        <div className='UserInfo'>
          <p className='UserName'>Abdalrhman Ahmed</p>
          <p className='PostTime'>Just now</p>
        </div>
        <div className='MenuLeftPost'>
          <button className={`menu__icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        {isMenuOpen && (
          <div className='Menu'>
            <ul>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                </svg>
                Save post
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x" viewBox="0 0 16 16">
                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708"/>
                </svg>
                Unfollow
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
                Hide Post
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15"  fill="currentColor" class="bi bi-slash-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708"/>
                </svg>
                Block
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-flag" viewBox="0 0 16 16">
                  <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21 21 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21 21 0 0 0 14 7.655V1.222z"/>
                </svg>
                Report Post
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className='PostContent'>
        <p className='PostText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
        <img className='postImg' src={me} alt="Post" />
      </div>
      <hr className="Divider" />
      <div className='PostActions'>
        <button className='ActionButton'>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>Like</button>
        <button className='ActionButton'>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
</svg>
            Comment</button>
        <button className='ActionButton'>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="currentColor" class="bi bi-reply-fill" viewBox="0 0 16 16">
    <path d="M5.921 11.9 1.353 8.62a.72.72 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>
  </svg>
            Share</button>
      </div>
    </div>
  );
}

export default Posts;
 



  */
/* import React, { useState } from 'react';
import './Posts.css';

function Posts(props) {
  const { avatarSrc, userName, postTime, postText, postImgSrc } = props.postData;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='PostBox'>
      <div className='PostHeader'>
        <img className="avatar" src={avatarSrc} alt="Avatar" />
        <div className='UserInfo'>
          <p className='UserName'>{userName}</p>
          <p className='PostTime'>{postTime}</p>
        </div>
        <div className='MenuLeftPost'>
          <button className={`menu__icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        {isMenuOpen && (
          <div className='Menu'>
            <ul>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                </svg>
                Save post
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x" viewBox="0 0 16 16">
                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708"/>
                </svg>
                Unfollow
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
                Hide Post
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15"  fill="currentColor" class="bi bi-slash-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708"/>
                </svg>
                Block
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-flag" viewBox="0 0 16 16">
                  <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21 21 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21 21 0 0 0 14 7.655V1.222z"/>
                </svg>
                Report Post
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className='PostContent'>
        <p className='PostText'>{postText}</p> 
        <img className='postImg' src={postImgSrc} alt="Post" />
      </div>
      <hr className="Divider" />
      <div className='PostActions'>
        <button className='ActionButton'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
          </svg>Like
        </button>
        <button className='ActionButton'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
          </svg>Comment
        </button>
        <button className='ActionButton'>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="currentColor" class="bi bi-reply-fill" viewBox="0 0 16 16">
            <path d="M5.921 11.9 1.353 8.62a.72.72 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>
          </svg>
          Share
        </button>
      </div>
    </div>
  );
}

export default Posts;
 */
/*last update */

/* import React, { useState } from 'react';
import './Posts.css';


function Posts(props) {
  const { avatarSrc, userName, postTime, postText, postImgSrc } = props.postData;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='PostBox'>
      <div className='PostHeader'>
        <img className="avatar" src={avatarSrc} alt="Avatar" />
        <div className='UserInfo'>
          <p className='UserName'>{userName}</p>
          <p className='PostTime'>{postTime}</p>
        </div>
        <div className='MenuLeftPost'>
          <button className={`menu__icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        {isMenuOpen && (
          <div className='Menu'>
            <ul>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                </svg>
                Save post
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x" viewBox="0 0 16 16">
                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708"/>
                </svg>
                Unfollow
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
                Hide Post
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15"  fill="currentColor" class="bi bi-slash-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708"/>
                </svg>
                Block
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-flag" viewBox="0 0 16 16">
                  <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21 21 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21 21 0 0 0 14 7.655V1.222z"/>
                </svg>
                Report Post
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className='PostContent'>
        <p className='PostText'>{postText}</p> 
        <img className='postImg' src={postImgSrc} alt="Post" />
      </div>
      <hr className="Divider" />
      <div className='PostActions'>
        <button className={`ActionButton ${isLiked ? 'liked' : ''}`} onClick={toggleLike}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill={isLiked ? 'red' : 'currentColor'} class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
          </svg>
          Like
        </button>
        
        <button className='ActionButton'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
          </svg>Comment
        </button>
        <button className='ActionButton'>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="currentColor" class="bi bi-reply-fill" viewBox="0 0 16 16">
            <path d="M5.921 11.9 1.353 8.62a.72.72 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>
          </svg>
          Share
        </button>
     
      </div>
      
    </div>
  
  );
}

export default Posts;


 

 */
/* import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Posts.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 

function Posts() {
  const [postData, setPostData] = useState(null);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDJlMzJlNGM2Yzc5MGQ4ZDY2NDM4YSIsImVtYWlsIjoiZGFsaWRhQGdtYWlsLmNvbSIsImlhdCI6MTcxMTk3OTc2MiwiZXhwIjoxNzEyMjM4OTYyfQ.JaXuVc91EraUBbXuIZBf69HMFuXMMUno_NJ3IBLFB1w';
        const config = {
          headers: {
            token: `task__${token}`
          }
        };
        const response = await axios.get('https://lost-seven.vercel.app/post/allposts', config);
        
        const sortedPosts = response.data.results.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
  
        setPostData(sortedPosts); 
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };
    fetchData();
  }, []);

  const handleNavigateToAddReport = (postId) => {
    navigate(`/add-report/${postId}`);
  };

  const toggleMenu = (index) => {
    setOpenMenuIndex(index === openMenuIndex ? null : index);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
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
    return <div>Loading...</div>;
  }

  if (!Array.isArray(postData) || postData.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <div>
      {postData.map((post, index) => (
        <div className='PostBox' key={index}>
          <div className='PostHeader'>
            <img className="avatar" src={post.user.profileImage.url} alt="Avatar" />
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
              <div className='Menu'>
                <ul>
                   <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                </svg>
                Save post
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x" viewBox="0 0 16 16">
                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708"/>
                </svg>
                Unfollow
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
                Hide Post
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15"  fill="currentColor" class="bi bi-slash-circle" viewBox="0 0 16 16">
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
            <p className='PostText'>
              I Am {post.type} {post.gender} name( {post.firstName} {post.lastName} ) {post.age} years old  HairCut style {post.hair_type} and color {post.hair_color}, Skincolor {post.skin_color} And EyeColor {post.eye_color} Found in Address {post.address}
            </p>       
            <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
                 {post.image && post.image.images && post.image.images.map((image, idx) => (
                 <div key={idx}>
                    <img className="postImg" src={image.url} alt="Image" />
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
              </svg>Comment
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

export default Posts;
 */

/*goood */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminUserPost.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '../Theme/ThemeContext'; 
import faceai from './face-mapping (1).png';
import ageai from './age1.png';
function Posts() {
  const [postData, setPostData] = useState([]);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(true);
  const { darkMode } = useTheme();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('')


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
        const response = await axios.get('https://lost-seven.vercel.app/admin/posts', config);
        
        const sortedPosts = response.data.results.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
  
        setPostData(sortedPosts); 
      } catch (error) {
        console.error('Error fetching post data:', error);
        handleErrorResponse(error);
      } finally {
        setLoading(false); 
      }
    };
    fetchData();
  }, []);

  const handleNavigateToAddReport = (postId) => {
    navigate(`/add-report/${postId}`);
  };

  const handleNavigateToViewProfile = (userId) => {
    navigate(`/ProfileUserPost/${userId}`); 
  };

  const handleErrorResponse = (error) => {
    console.error('Error:', error);
    setErrorMessage('An error occurred. Please try again later.');
    
    if (error.response) {
      if (error.response.data.message === "TokenExpiredError: jwt expired") {
        alert("Your session has expired. Please log in again.");
        handleRedirectToLogin();
      } else if (error.response.data.message === "you are not authorized") {
        alert("You are not authorized. Redirecting to login page...");
        handleRedirectToLogin();
      }
    }
  };

  const handleRedirectToLogin = () => {
    window.location.replace('/login');
  };

  const toggleMenu = (index) => {
    setOpenMenuIndex(index === openMenuIndex ? null : index);
  };

  const handleCloseError = () => {
    setErrorMessage('');
  };

  const handleCloseSuccess = () => {
    setSuccessMessage('');
  };
  
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handlePhotoClick = (image) => {
    if (image && image.url) {
      window.open(image.url, '_blank');
    }
  };

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
    
      const response = await axios.delete(`https://lost-seven.vercel.app/admin/${postId}`, config);
    
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
      
      {loading && (
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
      )}
      {!loading && postData.map((post, index) => (
        <div className={`PostBox1112 ${darkMode ? 'dark' : ''}`} key={index}>
          <div className='PostHeader'>
{/*             <img className="avatar" src={post.user.profileImage.url} alt="Avatar" onClick={() => handleNavigateToViewProfile(post.user._id)} />
 */}            <img className="avatar11" src={post.user.profileImage.url} alt="Avatar" onClick={() => handleNavigateToViewProfile(post.user._id)} />
                {post.user.status === 'online' && <div className="status-indicator2"></div>}

            <div className='UserInfo'>
{/*               <p className='UserName'>{post.user.name}  </p>
 */}         <p className='UserName' onClick={() => handleNavigateToViewProfile(post.user._id)}>{post.user.name}</p>    
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
                  <li onClick={() => handleDeletePost(post._id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    Delete Post
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
            <p className='PostText'>
              I Am {post.type} {post.gender} name( {post.firstName} {post.lastName} ) {post.age} years old  HairCut style {post.hair_type} and color {post.hair_color}, Skincolor {post.skin_color} And EyeColor {post.eye_color} Found in Address {post.address}
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

export default Posts;
 
          