import React, { useState, useEffect } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500);
  }, []);

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(/images/houzez-header-1.jpg)` }}
    >
      <div className="overlay">
        <div
          className={`container text-center text-white fade-only ${
            show ? "show" : ""
          }`}
        >
          <h1 className="hero-title">Discover Your Place To Live</h1>
          <p className="hero-subtitle">GET STARTED IN FEW CLICKS</p>
        </div>
      </div>
    </section>
  );
}
