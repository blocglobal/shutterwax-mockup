import React from 'react';
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <div>Something</div>
      {children}
    </div>
  );
};

export default Layout;