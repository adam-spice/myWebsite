import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="card">
      <div className="card_image">
        <img src={`${process.env.REACT_APP_ASSET_URL}${blog.mainImage.url}`} />
      </div>
      <div className="card_content">
        <h2 className="card_title">
          {blog.smallTitle} {blog.largeTitle}
        </h2>
        <p className="card_text">{blog.subtitle}</p>
        <Link to={`/article/blogs/${blog.id}`}>
          <button className="btn">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
