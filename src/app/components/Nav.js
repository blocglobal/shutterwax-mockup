import React from 'react';
import Logo from './Logo';
import './Nav.scss';

const Nav = props => {
  return (
    <header className="Nav">
      <Logo />
      <nav role="navigation">
        <div><a href="/news">News</a></div>
        <div><a href="/about">About</a></div>
      </nav>
    </header>
  );
};

export default Nav;