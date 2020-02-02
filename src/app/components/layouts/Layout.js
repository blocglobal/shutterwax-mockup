import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
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
      <Footer />
    </div>
  );
};

export default Layout;