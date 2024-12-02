import React from 'react';
import { Link } from 'react-router-dom'; 
import './CardsAdmin0.css';
import postssIcon from './postss.png'; 

function CardsAdmin0() {
  return (
    <div className="body0">
      <Link to="/AllUserPosts" className="card0 education0"> 
        <div className="circle0">
          <img src={postssIcon} alt="Alert Icon" />
        </div>
        <p>Posts</p>
      </Link>
    </div>
  );
}

export default CardsAdmin0;
