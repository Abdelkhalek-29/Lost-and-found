import React from 'react';
import CardsAdmin0 from './CardsAdmin0';
import CardsAdmin1 from './CardsAdmin1';
import CardsAdmin2 from './CardsAdmin2';
import CardsAdmin3 from './CardsAdmin3';
import FollowPageBack from './white-texture-background.jpg';
import './CardContainer.css';

function CardContainer() {
  return (
    <div className="card-container">
      <img src={FollowPageBack} alt='FollowPageBack' className='FollowPageBack' />
      <div className="cardrow1">
        <CardsAdmin0 />
        <CardsAdmin1 />
        <CardsAdmin2 />
        <CardsAdmin3 />
       </div>
    </div>
  );
}

export default CardContainer;
