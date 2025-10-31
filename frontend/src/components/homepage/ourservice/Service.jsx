import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Service.css";

export default function Services() {
  const [services, setServices] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://localhost:1155/services/getall", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setServices(res.data.services || []);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };

    if (token) {
      fetchServices();
    } else {
      console.warn("No token found in localStorage");
    }
  }, [token]);

  return (
    <section className="services-section py-5">
      <div className="container">
        <div className="text-left mb-5">
          <h2 className="services-title">Our Services</h2>
        </div>

        <div className="row">
          {services.length > 0 ? (
            services.map((service) => (
              <div
                className="col-lg-4 col-md-6 mb-4"
                key={service._id || service.id}
              >
                <div className="service-item d-flex">
                  <div className="service-icon">
                    <img
                      src={service?.image}
                      alt={service?.title}
                      className="icon-image"
                    />
                  </div>
                  <div className="service-content">
                    <h5 className="service-title">{service?.title}</h5>
                    <p className="service-description">
                      {service?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted">No services available.</p>
          )}
        </div>
      </div>
    </section>
  );
}
