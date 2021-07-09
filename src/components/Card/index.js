import React from 'react';
import Love from '~/service/love';
import './styles.css';

function Card() {
  return (
    <section>
      <div id="containerTitleCard">
        <h1 className="titleCard">
          Confira a frase ideal para você se inspirar, e não perca tempo na hora
          de
          <div className="titleCard2">
            mandar uma mensagem para aquela
            <span className="colorCard"> pessoa especial! 💋</span>
          </div>
        </h1>
      </div>
      <div className="containerCard">
        {Love.map((item) => (
          <div>
            <img
              src={item.img}
              alt={item.name}
              width={150}
              className="divCard"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Card;
