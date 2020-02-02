import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import Article from '../components/Article';
import './News.scss';

const News = props => {
  return (
    <Layout className="News">
      <h1>Shutterwax News</h1>

      <section>
        {props.articles.map(article => <Article key={article.id} {...article} />)}
      </section>
    </Layout>
  );
};

export default withRouter(News);