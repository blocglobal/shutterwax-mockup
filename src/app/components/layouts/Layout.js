import React from 'react';
import Nav from '../Nav';
import './Layout.scss';

const Layout = props => {
  const { children } = props;
  const className = props.className ? `Layout ${props.className}` : 'Layout';

  return (
    <div className={className}>
      <Nav />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;