import React from "react";
import { useNavigate } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import "./PropertyHeader.css";

export default function PropertyHeader({ property }) {
  const navigate = useNavigate();
  return (
    <div className="container py-4">
      <nav className="mb-3">
        <ol className="breadcrumb small mb-0">
          <li
            className="breadcrumb-item header-breadcrumb"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <RiHomeLine className="me-1 text-dark" /> Home
          </li>
          <li
            className="breadcrumb-item header-breadcrumbactive"
            aria-current="page"
          >
            {property?.title || "Property Details"}
          </li>
        </ol>
      </nav>

      <div className="d-flex justify-content-between align-items-start flex-wrap">
        <div>
          <h2 className="header mb-2">{property?.title}</h2>
          {/* <p className="address text-muted mb-3">
            <CiLocationOn className="me-1" size={20} />
            {property?.location || "No address provided"}
          </p> */}
        </div>

        <div className="text-end">
          <h3 className="fw-bold price-main">
            ${property?.price}
            <span className="price-main-1 fw-normal">/mo</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
