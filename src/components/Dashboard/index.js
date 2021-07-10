import React from 'react';
import { Link } from 'react-router-dom';
import icon from '~/assets/icon.png';

import './styles.css';

function Dashboard() {
  return (
    <div>
      <div className="stylesImgDash">
        <img src="https://i.imgur.com/2G4xjeF.png" alt="logoLove" width={400} />
      </div>
      <div className="containerTitle">
        <img src={icon} alt="logoLove" />
        <h1 className="title"> Supreenda seu amor </h1>
        <p className="msg">
          Chegou a hora de usar nossa criatividade e enviar uma mensagem para
          seu amigo, seu seguidor e praquele ou praquela crush que você sempre
          quis enviar 😉
        </p>
        <button type="button" className="buttonConfirmation">
          <Link className="link" to="/explore">
            Simbora
          </Link>
        </button>
      </div>
      <div className="components" />
    </div>
  );
}

export default Dashboard;
