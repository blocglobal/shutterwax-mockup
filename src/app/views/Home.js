import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import Article from '../components/Article';
import './Home.scss';

const Home = props => {
  return (
    <Layout className="Home">
      <h1 className="visually-hidden">Shutterwax: The Official Website</h1>
      <h2>Latest News</h2>
      <section>
        {props.articles.map(article => <Article key={article.id} {...article} />)}
      </section>
    </Layout>
  );
};

export default withRouter(Home);