import React from 'react';
import Header from '~/components/Header';
import imgDashBoard from '~/assets/dashboard.svg';
import './styles.css';

import icon from '~/assets/icon.png';

function Main() {
  function teste() {
    return console.tron.log('teste');
  }
  return (
    <>
      <Header />
      <div>
        <div className="stylesImgDash">
          <img src={imgDashBoard} alt="logoLove" width={300} />
        </div>
        <div className="containerTitle">
          <img src={icon} alt="logoLove" />
          <h1 className="title">SURPREENDA SEU AMOR!</h1>
          <p className="msg">Por aqui envie incriveis mensagens.</p>
          <button type="button" className="buttonConfirmation" onClick={teste}>
            <p className="pButton">Vamos lá!</p>
          </button>
        </div>
        <div />
      </div>
    </>
  );
}

export default Main;
