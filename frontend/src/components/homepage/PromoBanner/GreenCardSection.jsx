import React, { useEffect, useState } from "react";
import "./GreenCardSection.css";

const HeroSection = () => {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const box = document.querySelector(".hero-box");

    const handleScroll = () => {
      const boxTop = box?.getBoundingClientRect()?.top;
      const windowHeight = window.innerHeight;

      if (boxTop < windowHeight - 100) {
        box.classList.add("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="hero-section d-flex align-items-center"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="hero-box">
              <h2>
                Discover Our
                <br />
                Finest Selection
              </h2>
              <p>
                CHOOSE FROM DIFFERENT LISTING TEMPLATES <br />
                AND LAY THEM OUT AS LISTS OR GRIDS, FULL-WIDTH OR BOXED
              </p>
              <button className="btn btn-outline-light  custom-btn-outline mt-3">
                Discover
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
