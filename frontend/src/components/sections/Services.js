import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import Loader from "../Loader/Loader";
import ServiceCard from "../Cards/ServiceCard";
import makeToast from "../Toaster/Toaster";

const Services = ({ myServicesRef }) => {
  const { isLoading, error, sendRequest } = useHttpClient();
  const [loadedServices, setLoadedServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const responseData = await sendRequest("/services");

        setLoadedServices(responseData);
      } catch (error) {}
    };
    fetchServices();
  }, [sendRequest]);

  return (
    <section ref={myServicesRef} className="my-services" id="services">
      <h2 className="section__title section__title--services">What I can do</h2>
      <div className="services">
        {error && makeToast("error", error)}
        {isLoading ? (
          <Loader />
        ) : (
          loadedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))
        )}
      </div>

      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
};

export default Services;
