import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
// import logo from '../../images/logo.svg';
import './Header.css';

function Header() {



  return (
    <header className="header">
      <Link to="/" >
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <div></div>
    </header>
  );
}

export default Header;