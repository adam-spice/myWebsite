import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useHttpClient } from "../hooks/http-hook";
import Loader from "../components/Loader/Loader";
import makeToast from "../components/Toaster/Toaster";
const ReactMarkdown = require("react-markdown");

const Article = (props) => {
  const {
    match: {
      params: { type, id },
    },
  } = props;
  const { isLoading, error, sendRequest } = useHttpClient();
  const [article, setArticle] = useState({ mainImage: { url: "" } });

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const responseData = await sendRequest(`/${type}/${id}`);

        setArticle(responseData);
      } catch (error) {}
    };
    fetchArticle();
  }, [sendRequest, type, id]);

  return (
    <div>
      {error && makeToast("error", error)}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className="intro">
            <h1 className="section__title section__title--intro">
              {article.smallTitle}
              <strong>{article.largeTitle}</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">
              {new Date(article.createdAt).toLocaleDateString()}
            </p>

            <img
              src={`${process.env.REACT_APP_ASSET_URL}${article.mainImage.url}`}
              alt={article.mainImage.alternativeText}
              className="intro__img"
            />
          </section>

          <div className="portfolio-item-individual">
            <ReactMarkdown source={article.body} />
          </div>
        </>
      )}
    </div>
  );
};

export default withRouter(Article);
