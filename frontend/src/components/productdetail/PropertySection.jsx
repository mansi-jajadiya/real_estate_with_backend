import React, { useState } from "react";
import { LuBedDouble } from "react-icons/lu";
import { GiShower } from "react-icons/gi";
import { FaCar } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { IoIosArrowForward } from "react-icons/io";
import "./PropertySection.css";

export default function PropertySection({ property }) {
  const imageList = [property.image1, property.image2, property.image3].filter(
    Boolean
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((i) => (i + 1) % imageList.length);
  const prevImage = () =>
    setCurrentIndex((i) => (i === 0 ? imageList.length - 1 : i - 1));

  return (
    <div className="container section-container py-4">
      <div className="row info-row position-relative">
        <div className="col-lg-8 col-md-7 px-0">
          <div className="main-image-container position-relative">
            <img
              src={imageList[currentIndex]}
              alt={property.title}
              className="img-fluid"
            />
            <button
              className="arr la position-absolute top-50 start-0 translate-middle-y"
              onClick={prevImage}
            >
              <IoIosArrowForward style={{ transform: "rotate(180deg)" }} />
            </button>
            <button
              className="arr ra position-absolute top-50 end-0 translate-middle-y"
              onClick={nextImage}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        <div className="col-lg-4 col-md-5 px-md-2 px-0 mt-md-0 mt-3">
          <div className="d-flex flex-column h-100 gap-2">
            {imageList.slice(1).map((img, i) => (
              <div key={i} className="thumbnail-container">
                <img src={img} alt={`Property ${i}`} className="img-fluid" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="property-info-section mt-4">
        <div className="row info-row g-3">
          <div className="col-lg-2 col-md-4 col-sm-6 border-start">
            <div className="property-card">
              <div className="property-label">Type</div>
              <div className="property-value mt-2 fw-bold">
                {property.category}
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 border-start">
            <div className="property-card">
              <LuBedDouble /> {property.bedrooms}
              <div className="property-sub">Bedrooms</div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 border-start">
            <div className="property-card">
              <GiShower /> {property.bathrooms}
              <div className="property-sub">Bathrooms</div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 border-start">
            <div className="property-card">
              <FaCar /> {property.cars}
              <div className="property-sub">Garage</div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 border-start">
            <div className="property-card">
              <TfiRulerAlt2 /> {property.area}
              <div className="property-sub">Area Size</div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 border-start">
            <div className="property-card">
              <SlCalender /> {property.yearBuilt || "N/A"}
              <div className="property-sub">Year Built</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
