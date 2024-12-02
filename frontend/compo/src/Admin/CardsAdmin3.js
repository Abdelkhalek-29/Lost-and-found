import React from 'react';
import './CardsAdmin3.css';
import OrphanageIcon from './helping-hand.png'; 
import { Link } from 'react-router-dom'; 
function CardsAdmin3() {
  return (
    <div className="body3">
      <Link to="/AddOrphanage" className="card3 education3">
        <div className="circle3">
          <img src={OrphanageIcon} alt="Alert Icon" />
        </div>
        <p>Orphanage</p>
      </Link>
    </div>
  );
}

export default CardsAdmin3;