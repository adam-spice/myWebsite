import React, { useState, useEffect } from "react";
import { useHttpClient } from "../hooks/http-hook";
import makeToast from "../components/Toaster/Toaster";
import Loader from "../components/Loader/Loader";

import ArticleCard from "../components/Cards/ArticleCard";

const BlogList = () => {
  const { isLoading, error, sendRequest } = useHttpClient();
  const [loadedBlogs, setLoadedBlogs] = useState();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const responseData = await sendRequest("/blogs");

        setLoadedBlogs(responseData);
      } catch (error) {}
    };
    fetchBlogs();
  }, [sendRequest]);

  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Blog</h2>

      {error && makeToast("error", error)}
      <ul className="cards">
        {isLoading ? (
          <Loader />
        ) : (
          loadedBlogs &&
          loadedBlogs.map((blog) => {
            return (
              <li key={blog.id} className="cards_item">
                <ArticleCard article={blog} type="blogs" />
              </li>
            );
          })
        )}
      </ul>
    </section>
  );
};

export default BlogList;
