import React from 'react';
import Love from '~/service/love';

import './styles.css';

function Card() {
  return (
    <>
      <div className="containerTitleCard">
        <h1 className="titleCard">
          Veja algumas
          <span className="colorCard"> inspirações</span>
        </h1>
      </div>
      <div className="containerCard">
        {Love.map((item) => (
          <div className="divCard">
            <img
              src={item.img}
              alt={item.name}
              width={150}
              className="positonImg"
            />
            <p className="positionText">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
