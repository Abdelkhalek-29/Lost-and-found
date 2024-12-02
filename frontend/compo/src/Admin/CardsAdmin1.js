 import React from 'react';
import './CardsAdmin1.css';
import { Link } from 'react-router-dom'; 
import AlertIcon from './alert-icon-1562.png'; 

function CardsAdmin1() {
  return (
    <div className="body1">
      <Link to="/AdminReport" className="card1 education1" href="#">
        <div className="circle1">
          <img src={AlertIcon} alt="Alert Icon" />
        </div>
        <p>Report</p>
      </Link>
    </div>
  );
}

export default CardsAdmin1;
 

