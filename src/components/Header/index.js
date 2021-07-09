import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '~/assets/icon.png';
import './styles.css';

function Header() {
  return (
    <div className="container">
      <div className="logo">
        <img src={img1} alt="logoLove" width={70} />
      </div>
      <div>
        <ul className="headerList">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/explore">
              Explore
            </Link>
          </li>
          <li>
            <a
              className="link"
              href="https://www.linkedin.com/in/gabrielleemanoela/"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
