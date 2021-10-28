import React from 'react';

import './card.style.css';

export const Card = (props) => (
  <div className="card-container">
    <img
      className='imga'
      alt="monster"
      src={`https://robohash.org/CJI.png/${props.monster.id}set=set1&size=120x120`}
    />
    <h3 className="card_name"> {props.monster.name} </h3>
    <p>{props.monster.email}</p>
  </div>
);