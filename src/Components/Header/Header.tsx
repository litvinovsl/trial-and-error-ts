import React from 'react';
import logo from '../../images/logo.svg';
// import logo from '../../images/logo.svg';
import './Header.css';

function Header() {
  return (
      <header className="header">
        <img  className="header__logo" src={logo} alt="logo" />
        <div></div>
      </header>
  );
}

export default Header;