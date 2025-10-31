import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Meetourteam from "../meetourteam/Meetourteam";
import "./Aboutservice.css";

export default function Aboutservice() {
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

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <section className="services-section1">
      <div className="about-image">
        <img src="/images/houzez-header-1.jpg" alt="About Us" />
      </div>

      <div className="about-header text-center">
        <h2>About Us</h2>
        <p>Welcome to Houzez Real Estate Theme</p>
      </div>

      <div className="aboutus-services-container container" data-aos="zoom-in">
        <div className="row">
          {services.length > 0 ? (
            services.map((service) => (
              <div
                className="aboutus-service-col col-lg-4 col-md-6 mb-4"
                key={service?.id}
              >
                <div className="aboutus-service-item d-flex">
                  <div className="aboutus-service-icon">
                    <img
                      src={service?.image}
                      alt={service?.title}
                      className="aboutus-icon-image"
                    />
                  </div>
                  <div className="aboutus-service-content">
                    <h5 className="aboutus-service-title">{service?.title}</h5>
                    <p className="aboutus-service-description">
                      {service?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No services available.</p>
          )}
        </div>
      </div>

      <Meetourteam />
    </section>
  );
}
