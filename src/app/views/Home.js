import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import './Home.scss';

const Home = props => {
  return (
    <Layout className="Home">
      <h1>Home</h1>
    </Layout>
  );
};

export default withRouter(Home);