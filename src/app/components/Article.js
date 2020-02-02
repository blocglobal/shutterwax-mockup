import React from 'react';
import './Article.scss';

const Article = props => {
  return (
    <article className="Article">
      <h3>{props.title}</h3>
      <p><strong>{props.date}:</strong> {props.summary}… <a href="#">Read more</a></p>
    </article>
  );
};

export default Article;