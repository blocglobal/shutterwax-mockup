import React from 'react';
import MusicAvailable from './MusicAvailable';
import './Footer.scss';

const Footer = props => {
  return (
    <footer className='Footer'>
      © {new Date().getFullYear()} Demantelez Music LLC and Shutterwax, All Rights Reserved.
      <MusicAvailable />
    </footer>
  );
};


export default Footer;