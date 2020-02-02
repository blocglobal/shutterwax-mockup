import React from 'react';
import './MusicAvailable.scss';

const MusicAvailable = props => {
  return (
    <div className="MusicAvailable">
      <a href="https://blocsonic.com/artist/shutterwax" aria-label="Music available at blocSonic.com">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 309.94 66.6">
        <g><g><path d="M123.32,26.06V23.75h-1.77V18.58l-2.11.68-.27,4.49h-1.46v2.31h1.36V39c0,2.34.57,3.63,3.29,3.63.14,0,.75,0,1,0V40.2h-.55c-1,0-1.22-.3-1.22-1.39V26.06ZM236.4,23.14c-1.81,0-3.2.44-3.91,1.29-1.3,1.53-1.3,4.22-1.3,8.53,0,4.53,0,7.35,1.47,8.78a5.81,5.81,0,0,0,3.74,1.08,5.41,5.41,0,0,0,3.84-1.12c1.32-1.39,1.32-4,1.32-8.74,0-4.31,0-7-1.22-8.46A5.13,5.13,0,0,0,236.4,23.14Zm0,15.91c-1.09,0-1.09-.44-1.09-5.95s0-5.88,1.09-5.88,1.08.44,1.08,5.88S237.52,39.05,236.4,39.05Zm18,3.57h4.11V23.38h-4.11ZM105.53,33.13c0-5.3-.06-7.54-.91-8.67a3.16,3.16,0,0,0-2.55-.91,3.43,3.43,0,0,0-2.59.95c-1,1.22-1,3.33-1,8.63s0,7.58,1.15,8.78a3.63,3.63,0,0,0,2.65.88,8.11,8.11,0,0,0,3-.61L104.55,40a5.55,5.55,0,0,1-2,.44c-1.4,0-1.57-.75-1.57-6h4.59Zm-4.59-1c0-5.27.07-6.12,1.13-6.12s1.08.55,1.08,6.12ZM262.82,0h-216V2.6h216ZM109.38,36.6c0,4,.17,6.15,2.78,6.15a2.62,2.62,0,0,0,2.45-1c.24.61.58.85,1.94.85a7,7,0,0,0,.78,0V40.2c-.75,0-.85-.2-.85-1.29V27.83c0-3-.41-4.28-3.26-4.28a14.57,14.57,0,0,0-3.2.37l.55,2.38a16.55,16.55,0,0,1,2.34-.31c1.12,0,1.16.55,1.16,2.28v.89C109.92,29.26,109.38,30.89,109.38,36.6Zm4.69-.44c0,3.26,0,4.32-1.26,4.32-1,0-1.09-.78-1.09-4,0-4.39.14-5,2.35-5Zm104.2-10.1a5.56,5.56,0,0,1,1.33.17l.58-2.41a8.75,8.75,0,0,0-2.11-.21,3.61,3.61,0,0,0-2.79,1c-1.05,1.26-1.09,3.37-1.09,8.53s0,7.55,1.16,8.78a3.92,3.92,0,0,0,2.65.84,6.37,6.37,0,0,0,2.21-.34l-.54-2.21a4.74,4.74,0,0,1-1.36.21c-1.5,0-1.57-.85-1.57-7.21C216.74,27.12,216.81,26.06,218.27,26.06Zm-124-9.14V39.15c0,2.31.34,3.5,2.65,3.5.13,0,.75,0,.92,0V40.2h-.31c-.65,0-.75-.2-.75-1.12V16.92Zm130.25,22a16.67,16.67,0,0,1-2.86-.31l-.92,3.91a21.24,21.24,0,0,0,4,.38c6.53,0,6-5.14,4.56-8.94l-3.64-9.73c-.58-1.56-.47-2.79,1.33-2.79a10.06,10.06,0,0,1,1.9.17l1-4.11a20.66,20.66,0,0,0-3.23-.24c-5.88,0-6.16,4.83-4.83,8.37L225.72,36C226.47,38,226.16,38.88,224.5,38.88Zm-47-28.2c-18.33-4.58-30.64,14.81-49,10.24q3.33,17.55,6.67,35.09c19.23,4.79,32.34-14.75,51.19-11.49l2.81,8.89h1.8L177.94,12h0C177.8,11.53,177.67,11.1,177.54,10.68Zm28.83,13.85c-1.08,1.26-1.08,3.44-1.08,8.6s0,7.58,1.15,8.74a4,4,0,0,0,2.82.92,3.79,3.79,0,0,0,2.83-.92c1.12-1.19,1.12-3.37,1.12-8.74,0-5.16,0-7.31-1.06-8.53a3.73,3.73,0,0,0-2.89-1.05A3.83,3.83,0,0,0,206.37,24.53Zm4.32,8.67c0,6.56,0,7.28-1.43,7.28s-1.46-.72-1.46-7.28c0-6.36,0-7.17,1.46-7.17S210.69,26.84,210.69,33.2ZM191.76,16.92V42.58l2.1.11.24-.82a2.86,2.86,0,0,0,2.45.92,2.75,2.75,0,0,0,2.17-.85c.82-.95.85-2.79.85-8.81s0-7.82-.85-8.73a2.53,2.53,0,0,0-2.07-.85,3,3,0,0,0-2.45.91V16.92ZM195.7,26c1.36,0,1.36.81,1.36,7.21,0,6.63,0,7.24-1.36,7.24s-1.46-1-1.46-7.24C194.24,27.18,194.27,26,195.7,26Zm57.22,16.59v-15c0-2.69-.44-4.49-3.27-4.49-2,0-2.92.54-3.29,1.12l-.17-.92-3.5.17V42.62h4.08V29.43c0-1.87.4-2.21,1.19-2.21s.85.24.85,2v13.4ZM201,16.92V39.15c0,2.31.34,3.5,2.65,3.5.13,0,.75,0,.92,0V40.2h-.31c-.65,0-.75-.2-.75-1.12V16.92Zm78.81,22c-1.3,0-1.4-.38-1.4-5.85,0-5.27.1-5.81,1.36-5.81a5.49,5.49,0,0,1,1.5.17l.88-4a12.76,12.76,0,0,0-2.79-.23,5.06,5.06,0,0,0-3.87,1.29c-1.22,1.53-1.29,4.11-1.29,8.46,0,4.53.07,7.31,1.49,8.74a5.3,5.3,0,0,0,3.54,1,10.27,10.27,0,0,0,3-.37l-.82-3.64A6.66,6.66,0,0,1,279.85,39ZM46.82,66.6h216V64h-216ZM36.34,40.41c-1.49,0-1.56-.85-1.56-7.21,0-6.08.07-7.14,1.53-7.14a5.56,5.56,0,0,1,1.33.17l.57-2.41a8.72,8.72,0,0,0-2.1-.21,3.58,3.58,0,0,0-2.79,1c-1,1.26-1.09,3.37-1.09,8.53s0,7.55,1.16,8.78a3.9,3.9,0,0,0,2.65.84,6.45,6.45,0,0,0,2.21-.34L37.7,40.2A4.74,4.74,0,0,1,36.34,40.41Zm12.79,2.24a7.14,7.14,0,0,0,.78,0V40.2c-.75,0-.85-.2-.85-1.29V27.83c0-3-.41-4.28-3.26-4.28a14.41,14.41,0,0,0-3.2.37l.55,2.38A16.55,16.55,0,0,1,45.49,26c1.12,0,1.16.55,1.16,2.28v.89C42.5,29.26,42,30.89,42,36.6c0,4,.17,6.15,2.78,6.15a2.62,2.62,0,0,0,2.45-1C47.43,42.41,47.77,42.65,49.13,42.65Zm-2.48-6.49c0,3.26,0,4.32-1.26,4.32-1,0-1.09-.78-1.09-4,0-4.39.14-5,2.35-5ZM85,16.92V42.58l2.11.11.24-.82a2.86,2.86,0,0,0,2.45.92,2.75,2.75,0,0,0,2.17-.85c.82-.95.85-2.79.85-8.81s0-7.82-.85-8.73a2.53,2.53,0,0,0-2.07-.85,3,3,0,0,0-2.45.91V16.92Zm4,9.11c1.36,0,1.36.81,1.36,7.21,0,6.63,0,7.24-1.36,7.24s-1.46-1-1.46-7.24C87.45,27.18,87.48,26,88.91,26ZM265.29,39c-1.29,0-1.39-.38-1.39-5.85,0-5.27.1-5.81,1.36-5.81a5.49,5.49,0,0,1,1.5.17l.88-4a12.76,12.76,0,0,0-2.79-.23A5.06,5.06,0,0,0,261,24.5c-1.23,1.53-1.29,4.11-1.29,8.46,0,4.53.06,7.31,1.49,8.74a5.3,5.3,0,0,0,3.54,1,10.15,10.15,0,0,0,2.95-.37l-.81-3.64A6.67,6.67,0,0,1,265.29,39Zm-237,3.67H30.8V23.75H28.29ZM306.71,23.14c-1.19,0-2.69.24-3.3,1.09-.44-.75-1.12-1.09-2.72-1.09-1.8,0-2.82.47-3.2,1.15l-.17-.95-3.5.17V42.62h4.05V29.77c0-2.18.37-2.55,1.15-2.55s.82.24.82,2v13.4h4V29.77c0-2.18.38-2.55,1.16-2.55s.82.24.82,2v13.4h4.08v-15C309.94,24.94,309.49,23.14,306.71,23.14Zm-19.18,0c-1.8,0-3.19.44-3.91,1.29-1.29,1.53-1.29,4.22-1.29,8.53,0,4.53,0,7.35,1.46,8.78a5.83,5.83,0,0,0,3.74,1.08,5.39,5.39,0,0,0,3.84-1.12c1.33-1.39,1.33-4,1.33-8.74,0-4.31,0-7-1.23-8.46A5.13,5.13,0,0,0,287.53,23.14Zm0,15.91c-1.09,0-1.09-.44-1.09-5.95s0-5.88,1.09-5.88,1.09.44,1.09,5.88S288.65,39.05,287.53,39.05Zm-18.66,3.57h4.48V37.18h-4.48ZM28.29,21.47H30.8v-3.6H28.29Zm43.18-4.55V39.15c0,2.31.34,3.5,2.65,3.5.13,0,.75,0,.92,0V40.2h-.31c-.65,0-.75-.2-.75-1.12V16.92Zm-4.35,25.7h2.51V23.75H67.12Zm2.51-24.75H67.12v3.6h2.51ZM75.89,36.6c0,4,.17,6.15,2.78,6.15a2.62,2.62,0,0,0,2.45-1c.24.61.58.85,1.94.85a7,7,0,0,0,.78,0V40.2c-.75,0-.85-.2-.85-1.29V27.83c0-3-.41-4.28-3.26-4.28a14.57,14.57,0,0,0-3.2.37l.55,2.38A16.55,16.55,0,0,1,79.42,26c1.12,0,1.16.55,1.16,2.28v.89C76.43,29.26,75.89,30.89,75.89,36.6Zm4.69-.44c0,3.26,0,4.32-1.26,4.32-1,0-1.09-.78-1.09-4,0-4.39.14-5,2.35-5Zm-26.69,2-.34-4.21-1-10.17H50l2.45,19h2.78l2.45-19H55.28L54.23,33.92Zm-48.52-6-.24,2.65-.2-2.65L3.4,17.43H0V42.62H2.31V24.91l.24,3.5L4.11,42.62h2L7.65,28.37l.24-3.46V42.62h2.48V17.43H7ZM58,36.6c0,4,.17,6.15,2.79,6.15a2.62,2.62,0,0,0,2.45-1c.24.61.58.85,1.94.85a7.14,7.14,0,0,0,.78,0V40.2c-.75,0-.85-.2-.85-1.29V27.83c0-3-.41-4.28-3.27-4.28a14.38,14.38,0,0,0-3.19.37l.54,2.38A16.7,16.7,0,0,1,61.54,26c1.12,0,1.15.55,1.15,2.28v.89C58.55,29.26,58,30.89,58,36.6Zm4.69-.44c0,3.26,0,4.32-1.25,4.32-1,0-1.09-.78-1.09-4,0-4.39.13-5,2.34-5ZM17.31,37.55c0,2.25,0,2.93-1.3,2.93s-1.32-.68-1.32-2.89V23.75H12.21v14c0,3.23.34,5,3.77,5s3.74-1.7,3.74-5v-14H17.31Zm6.42-9.28C23.36,27,23.46,26,24.68,26a7.31,7.31,0,0,1,1.4.14l.58-2.35a11.16,11.16,0,0,0-2.18-.23c-3.33,0-4.05,2.58-3,5.71l2.65,8.67c.54,1.83,0,2.55-1.19,2.55a12.47,12.47,0,0,1-1.73-.17l-.55,2.24a12.12,12.12,0,0,0,2.69.24c3.57,0,4-2.69,3-5.92Z"/></g></g>
      </svg>
      </a>
    </div>
  );
};

export default MusicAvailable;