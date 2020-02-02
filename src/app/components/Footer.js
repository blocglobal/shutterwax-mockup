import React from 'react';
import './Footer.scss';

const Footer = props => {
  return (
    <footer className='Footer'>© {new Date().getFullYear()} Demantelez Music LLC and Shutterwax, All Rights Reserved.</footer>
  );
};

export default Footer;