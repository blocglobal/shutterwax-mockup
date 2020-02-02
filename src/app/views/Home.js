import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import Article from '../components/Article';
import './Home.scss';

const Home = props => {
  const articles = [
    {
      id: "article-1",
      date: "January 25th, 2020",
      title: "Vestibulum Malesuada Tortor Nullam",
      summary: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo"
    },
    {
      id: "article-2",
      date: "November 17th, 2019",
      title: "Nullam Aenean Tristique",
      summary: "Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui"
    },
    {
      id: "article-3",
      date: "September 3rd, 2019",
      title: "Quam Sit Mollis Vehicula",
      summary: "Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et"
    }
  ];

  return (
    <Layout className="Home">
      <h1 className="visually-hidden">Shutterwax: The Official Website</h1>
      <h2>Latest News</h2>
      <section>
        {articles.map(article => <Article key={article.id} {...article} />)}
      </section>
    </Layout>
  );
};

export default withRouter(Home);