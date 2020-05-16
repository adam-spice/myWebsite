import React, { useEffect, useState } from "react";
import { useHttpClient } from "../../hooks/http-hook";

import Loader from "../Loader/Loader";
import makeToast from "../Toaster/Toaster";
import { Link } from "react-router-dom";

const MyWork = ({ myWorkRef }) => {
  const { isLoading, error, sendRequest } = useHttpClient();
  const [loadedProjects, setLoadedProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const responseData = await sendRequest("/projects");

        setLoadedProjects(responseData);
      } catch (error) {}
    };
    fetchProjects();
  }, [sendRequest]);

  return (
    <section ref={myWorkRef} className="my-work" id="work">
      <h2 className="section__title section__title--work">My work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      <div className="portfolio">
        {error && makeToast("error", error)}
        {isLoading ? (
          <Loader />
        ) : (
          loadedProjects.map((project) => (
            <Link
              key={project.id}
              to={`/article/projects/${project.id}`}
              className="portfolio__item"
            >
              <img
                src={`${process.env.REACT_APP_ASSET_URL}${project.mainImage.url}`}
                alt=""
                className="portfolio__img"
              />
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default MyWork;
