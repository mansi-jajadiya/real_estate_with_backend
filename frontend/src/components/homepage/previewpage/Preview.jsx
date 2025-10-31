import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { LuBedDouble } from "react-icons/lu";
import { FaShower } from "react-icons/fa";
import { IoCarOutline } from "react-icons/io5";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { GrAttachment } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import "./Preview.css";

const Preview = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [property, setProperty] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:1155/cards/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProperty(res.data.card);
      })
      .catch((err) => console.error("Error fetching property:", err));
  }, [id]);

  if (!property) {
    return <p className="text-center mt-5">Loading property details...</p>;
  }

  const imageList = [property.image1, property.image2, property.image3].filter(
    Boolean
  );

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  return (
    <div className="preview-wrapper pt-4">
      <div className="preview-page container">
        <div className="row">
          <div className="col-md-8 preview-image-section position-relative">
            <img
              src={imageList[currentIndex]}
              alt={property.title}
              className="img-fluid preview-property-image"
            />

            <button
              className="frc-arrow frc-arrow-left position-absolute top-50 start-0 px-2 translate-middle-y"
              onClick={prevImage}
            >
              <IoIosArrowForward style={{ transform: "rotate(180deg)" }} />
            </button>
            <button
              className="frc-arrow frc-arrow-right position-absolute top-50 end-0 px-2 translate-middle-y"
              onClick={nextImage}
            >
              <IoIosArrowForward />
            </button>
          </div>

          <div className="col-md-4 preview-details-section">
            <span className="preview-status">FOR RENT</span>
            <h3 className="preview-title">{property.title}</h3>
            <p className="preview-location border-bottom pb-3">
              {/* <IoLocationOutline size={20} /> {property.location || "Unknown"} */}
            </p>

            <h4 className="preview-price">${property.price}</h4>
            <p className="preview-price-per pb-3 border-bottom">
              ${property.area || "N/A"}/sq ft
            </p>

            <div className="preview-features pt-3">
              <div className="feature-box">
                <div className="feature-box-top">
                  <LuBedDouble size={25} color="black" />
                  <h5>{property.bedrooms}</h5>
                </div>
                <p>Bedrooms</p>
              </div>
              <div className="feature-box">
                <div className="feature-box-top">
                  <FaShower size={25} color="black" />
                  <h5>{property.bathrooms}</h5>
                </div>
                <p>Bathrooms</p>
              </div>
              <div className="feature-box">
                <div className="feature-box-top">
                  <IoCarOutline size={25} color="black" />
                  <h5>{property.cars}</h5>
                </div>
                <p>Garage</p>
              </div>
              <div className="feature-box">
                <div className="feature-box-top">
                  <TfiRulerAlt2 size={25} color="black" />
                  <h5>{property.area}</h5>
                </div>
                <p>m²</p>
              </div>
              <div className="feature-box">
                <div className="feature-box-top">
                  <GrAttachment size={25} color="black" />
                  <h5>{property.yearBuilt || "N/A"}</h5>
                </div>
                <p>Year Built</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
