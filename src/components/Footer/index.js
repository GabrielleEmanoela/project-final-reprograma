import './styles.css';
import React from 'react';

function Footer() {
  return (
    <div id="idSection" className="footerContainer">
      <div className="divFooter">
        <a
          className="footerText2"
          href="https://www.linkedin.com/in/gabrielleemanoela/"
        >
          <img src="https://i.imgur.com/bTr4bqg.png" alt="logoLove" />
        </a>
        <a
          className="footerText2"
          href="https://www.linkedin.com/in/gabrielleemanoela/"
        >
          <img src="https://i.imgur.com/DTmkVyO.png" alt="logoLove" />
        </a>
      </div>
      <div className="divFooter2">
        <p className="footerText">
          Desenvolvido com muito amor por Gabrielle Emanoela.
        </p>
      </div>
    </div>
  );
}
export default Footer;
