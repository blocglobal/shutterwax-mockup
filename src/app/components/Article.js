import React from 'react';
import './Article.scss';

const Article = props => {
  return (
    <article className="Article">
      <div className="article-info"><h3><a href={`/news/${props.slug}`}>{props.title}</a></h3>
      <p><strong>{props.date}:</strong> {props.summary}… <a href="#">Read more</a></p></div>
      {props.img && (
        <div className="article-image">
          <img src={props.img} alt="" />
        </div>
      )}
    </article>
  );
};

export default Article;