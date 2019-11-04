import React from "react";

const Articlesview = props => {
  return (
    <div className="app-articles">
      <h2>Articles</h2>
      <article className="article">
        <h3>
          <a href="" target="blank">
            Titre de l'article
          </a>
        </h3>
        <img
          src="https://www.placecage.com/gif/300/250"
          alt="Titre de l'article"
        />
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, illum!
          Quibusdam est eaque sit modi nam deserunt enim saepe possimus neque.
          Minima incidunt nesciunt dicta architecto at dolorum corporis animi!
        </div>
        <button>Lire</button>
      </article>
    </div>
  );
};

export default Articlesview;
