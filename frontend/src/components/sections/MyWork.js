import React, { useEffect, useState } from "react";
import { useHttpClient } from "../../hooks/http-hook";

import Loader from "../Loader/Loader";
import makeToast from "../Toaster/Toaster";

import ArticleCard from "../Cards/ArticleCard";

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
      {error && makeToast("error", error)}
      <ul className="cards">
        {isLoading ? (
          <Loader />
        ) : (
          loadedProjects.map((project) => {
            return (
              <li key={project.id} className="cards_item">
                <ArticleCard article={project} type="projects" />
              </li>
            );
          })
        )}
      </ul>
    </section>
  );
};

export default MyWork;
