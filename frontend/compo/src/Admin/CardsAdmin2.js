import React from 'react';
import './CardsAdmin2.css';
import PoliceIcon from './police-icon-29952.png'; 
import { Link } from 'react-router-dom'; 
function CardsAdmin2() {
  return (
    <div className="body2">
      <Link to="/AddPolice" className="card2 education2" href="#">
        <div className="circle2">
          <img src={PoliceIcon} alt="Alert Icon" />
        </div>
        <p>Police</p>
      </Link>
    </div>
  );
}

export default CardsAdmin2;
