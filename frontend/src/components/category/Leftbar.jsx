import React from "react";
import { useNavigate } from "react-router-dom";
import { LuBedDouble } from "react-icons/lu";
import { FaShower } from "react-icons/fa";
import { IoCarOutline } from "react-icons/io5";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { IoIosArrowForward } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import "./Leftbar.css";
export default function Leftbar() {
  const navigate = useNavigate();
  return (
    <div className="wrapper sidebar-wrapper position-sticky top-0">
      <div className="sidebar mb-4">
        <div className="sidebar-section">
          <h6 className="sidebar-title">Property Type</h6>
          <ul className="sidebar-list">
            <li
              className="d-flex align-items-center"
            >
              <IoIosArrowForward />
              Apartment <span>(205)</span>
            </li>
            <li
              className="d-flex align-items-center"
            >
              <IoIosArrowForward />
              Single Family Home <span>(150)</span>
            </li>
            <li
              className="d-flex align-items-center"
            >
              <IoIosArrowForward />
              Villa <span>(35)</span>
            </li>
            <li
              className="d-flex align-items-center"
            >
              <IoIosArrowForward />
              Loft <span>(20)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-4">
        <div className="sidebar-section bg-white">
          <h6 className="sidebar-title p-3">Featured</h6>
          <div className="card custom-card h-100">
            <div className="image-container position-relative">
              <span className="badge featured-badge position-absolute top-0 start-0 m-3">
                FEATURED
              </span>
              <span className="badge rent position-absolute top-0 end-0 m-3">
                FOR RENT
              </span>

              <img
                src="/images/card1-2.png"
                className="w-100 card-image"
                alt="Modern Day Apartment"
                style={{ cursor: "default" }}
              />
            </div>

            <div className="card-body text-center">
              <h5 className="card-title property-title mb-2 fs-5">
                Modern Day Apartment
              </h5>
              <p className="text-muted flex-wrap justify-content-center category-label fs-6 mb-4 text-center">
                <CiLocationOn size={18} /> 33 NE 4tg St Miami, FL 33132
              </p>

              <div className="info-icons d-flex justify-content-center gap-3 flex-wrap">
                <span>
                  <LuBedDouble /> 4
                </span>
                <span>
                  <FaShower /> 2
                </span>
                <span>
                  <IoCarOutline /> 1
                </span>
                <span>
                  <TfiRulerAlt2 /> 1200 m²
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar">
        <div className="sidebar-section bg-white">
          <h6 className="sidebar-title">Property Status</h6>
          <ul className="sidebar-list">
            <li className="d-flex align-items-center">
              <IoIosArrowForward />
              For Sale <span>(30)</span>
            </li>
            <li className="d-flex align-items-center">
              <IoIosArrowForward />
              For Rent<span>(22)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
