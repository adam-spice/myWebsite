import React, { useEffect, useState } from "react";
import { useHttpClient } from "../../hooks/http-hook";

import Loader from "../Loader/Loader";

const MyWork = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedProjects, setLoadedProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const responseData = await sendRequest("/projects");

        setLoadedProjects(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, [sendRequest]);

  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      <div className="portfolio">
        {isLoading ? (
          <Loader />
        ) : (
          loadedProjects.map((project) => (
            <a
              key={project.id}
              href="./portfolio-item.html"
              className="portfolio__item"
            >
              <img
                src={`${process.env.REACT_APP_ASSET_URL}${project.images[0].url}`}
                alt=""
                className="portfolio__img"
              />
            </a>
          ))
        )}
      </div>
    </section>
  );
};

export default MyWork;
