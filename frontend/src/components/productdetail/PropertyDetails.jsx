import React from "react";
import { MdModeEdit } from "react-icons/md";
import "./PropertyDetails.css";

export default function PropertyDetailsSection() {
  return (
    <div className="property-details-wrapper">
      <div className="container property-details-container">
        {" "}
        <div className="property-details-header">
          <div className="property-details-header-content">
            <h2 className="property-details-title">Details</h2>
            <div className="property-details-updated">
              <MdModeEdit className="property-details-icon" />
              Updated on April 4, 2020 at 10:23 pm
            </div>
          </div>
        </div>
        <div className="property-details-content">
          <div className="property-details-main-box">
            <div className="property-details-grid">
              <div className="property-details-item">
                <span className="property-details-label">Property ID</span>
                <span className="property-details-value property-details-value">
                  HZ40
                </span>
              </div>
              <div className="property-details-item">
                <span className="property-details-label">Price</span>
                <span className="property-details-value">$4,500/mo</span>
              </div>

              <div className="property-details-item">
                <span className="property-details-label">Property Size</span>
                <span className="property-details-value">1200 m²</span>
              </div>
              <div className="property-details-item">
                <span className="property-details-label">Bedrooms</span>
                <span className="property-details-value">4</span>
              </div>

              <div className="property-details-item">
                <span className="property-details-label">Bathrooms</span>
                <span className="property-details-value">2</span>
              </div>
              <div className="property-details-item">
                <span className="property-details-label">Garage</span>
                <span className="property-details-value">1</span>
              </div>

              <div className="property-details-item">
                <span className="property-details-label">Garage Size</span>
                <span className="property-details-value">200 SqFt</span>
              </div>
              <div className="property-details-item">
                <span className="property-details-label">Year Built</span>
                <span className="property-details-value">2016</span>
              </div>

              <div className="property-details-item">
                <span className="property-details-label">Property Type</span>
                <span className="property-details-value property-details-value">
                  Apartment
                </span>
              </div>
              <div className="property-details-item ">
                <span className="property-details-label">Property Status</span>
                <span className="property-details-value">For Rent</span>
              </div>
            </div>
          </div>
        </div>
        <div className="property-details-additional">
          <h3 className="property-details-additional-title">
            Additional Details
          </h3>

          <div className="property-details-additional-grid">
            <div className="property-details-additional-item">
              <span className="property-details-additional-label">Deposit</span>
              <span className="property-details-additional-value">20%</span>
            </div>
            <div className="property-details-additional-item">
              <span className="property-details-additional-label">
                Pool Size
              </span>
              <span className="property-details-additional-value">
                300 SqFt
              </span>
            </div>

            <div className="property-details-additional-item">
              <span className="property-details-additional-label">
                Last remodel year
              </span>
              <span className="property-details-additional-value">1987</span>
            </div>
            <div className="property-details-additional-item">
              <span className="property-details-additional-label">
                Amenities
              </span>
              <span className="property-details-additional-value property-details-value">
                Clubhouse
              </span>
            </div>

            <div className="property-details-additional-item property-details-additional-item-last">
              <span className="property-details-additional-label">
                Additional Rooms
              </span>
              <span className="property-details-additional-value property-details-value">
                Guest Bath
              </span>
            </div>
            <div className="property-details-additional-item property-details-additional-item-last">
              <span className="property-details-additional-label">
                Equipment
              </span>
              <span className="property-details-additional-value">
                Grill - Gas
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
