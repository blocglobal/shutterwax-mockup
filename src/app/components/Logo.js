import React from 'react';
import './Logo.scss';

const Logo = props => {
  const className = props.className ? `${props.className} Logo` : "Logo";

  return (
    <div className={className}>
      <a href='/' aria-label="Shutterwax Logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360">
          <path d="M116.81,59.86c1-3.54,2-7,3.1-10.48A234.62,234.62,0,0,0,80.44,179.93v1.49A205,205,0,0,0,127.77,208,223.75,223.75,0,0,1,116.81,59.86Zm67.86,94.68c7.4,0,13.7,1.09,18.8,5.46L218,145.05c-7.76-7.16-17.22-10.07-30-10.07-19.65,0-40.51,8.73-40.51,30.45,0,16.85,13.71,21.22,30.08,22.79,8.48.85,13,3.28,13,7,0,5.09-6.31,8.25-14.8,8.25-7.16,0-16.26-1.46-23.16-9.59l-15.9,15.23c9.09,11.65,20.49,14.95,35.29,14.95,22.19,0,42.56-9.1,42.56-31.17,0-16.25-14.94-22.92-30-24.62-7.52-.73-12.86-1.46-12.86-6.3,0-5.37,6.66-7.43,12.8-7.43ZM81.74,205.21a233.85,233.85,0,0,0,19.84,72.52l2.07-.54a205.79,205.79,0,0,0,74.75-37.47A223.17,223.17,0,0,1,81.74,205.21ZM252.68,64.63q6.09-1.63,12.21-2.91A145.42,145.42,0,0,0,143.31,39.6a209.16,209.16,0,0,0-8.47,25.1,206.31,206.31,0,0,0-4.94,83.49A223.71,223.71,0,0,1,252.68,64.63ZM110.22,294.84q5.09,9.09,11,17.66a145.64,145.64,0,0,0,96.67,7.86,205.84,205.84,0,0,0,8.47-25.11,206.27,206.27,0,0,0,4.94-83.48,223.67,223.67,0,0,1-121,83ZM233.41,152a223.72,223.72,0,0,1,11,148.11q-1.63,6.09-3.59,12.06a145.62,145.62,0,0,0,80-94.29,211.3,211.3,0,0,0-17.52-19.93A206.2,206.2,0,0,0,233.41,152ZM345.85,110.1C307.24,18.52,201.7-24.43,110.12,14.18S-24.4,158.32,14.2,249.9A180,180,0,0,0,345.87,110.13ZM180.59,341.52A161.57,161.57,0,1,1,342.16,180,161.56,161.56,0,0,1,180.59,341.52Zm76.94-258.8a206,206,0,0,0-74.75,37.47,223.67,223.67,0,0,1,133.76,64.54c3,3,5.83,6,8.61,9.11.43-4.56.66-9.19.66-13.88A144.71,144.71,0,0,0,283.48,77.5,210.24,210.24,0,0,0,257.53,82.72Z" />
        </svg>
      </a>
    </div>
  );
};

export default Logo;