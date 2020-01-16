import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import './Home.scss';

const Home = props => {
  return (
    <Layout className="Home">
      <h1>The Official Website of Shutterwax</h1>
      <h2>Latest News</h2>
      <section>
        <article>
          <h3>Vestibulum Malesuada Tortor Nullam</h3>
          <p>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo… <a href="#">Read more</a></p>
        </article>
        <article>
          <h3>Nullam Aenean Tristique</h3>
          <p>Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui… <a href="#">Read more</a></p>
        </article>
      </section>
    </Layout>
  );
};

export default withRouter(Home);