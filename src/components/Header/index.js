import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '~/assets/love.png';
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
            <Link className="link" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/explore">
              Explore
            </Link>
          </li>
          <li>
            <Link className="link" to="/contato">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
