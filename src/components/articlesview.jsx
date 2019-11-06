import React from "react";

const Articlesview = props => {
  return (
    <div className="app-articles">
      <h2>Articles</h2>
      {props.loading && <div className="loader">Loading...</div>}

      {!props.loading &&
        props.articles.map(article => (
          // ARTICLE MODEL START
          <article className="article" key={article.url}>
            <h3>
              <a href={article.url} target="blank">
                {article.title}
              </a>
            </h3>
            <img src={article.urlToImage} alt={article.title} />
          </article>
          // ARTICLE MODEL END
        ))}
    </div>
  );
};

export default Articlesview;
