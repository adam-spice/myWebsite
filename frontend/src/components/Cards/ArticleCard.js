import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article, type }) => {
  return (
    <Link
      to={`/article/${type}/${article.id}`}
      style={{ textDecoration: "none" }}
    >
      <div className="card">
        <div className="card_image">
          <img
            src={`${process.env.REACT_APP_ASSET_URL}${article.mainImage.url}`}
            alt={`${article.mainImage.alternativeText}`}
          />
        </div>
        <div className="card_content">
          <h3 className="card_title">
            {article.smallTitle} {article.largeTitle}
          </h3>
          <p className="card_text">{article.subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
