import React, { useState } from "react";
import { MdOutlineNotStarted } from "react-icons/md";
import { LuBedDouble } from "react-icons/lu";
import { GiShower } from "react-icons/gi";
import "./FloorPlans.css";

export default function FloorPlans() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  return (
    <div className="floor-plans-wrapper">
      <div className="container floor-plans-container">
        {" "}
        <div className="floor-plans-header">
          <h2 className="floor-plans-title">Floor Plans</h2>
        </div>
        <div className="floor-item">
          <div className="floor-row" onClick={() => setShowFirst(!showFirst)}>
            <div className="floor-left">
              <div className="floor-icon">
                <span className="checkmark">
                  <MdOutlineNotStarted />
                </span>
              </div>
              <h3 className="floor-name">First Floor</h3>
            </div>

            <div className="floor-details">
              <div className="detail-item">
                <span className="detail-label">Size:</span>
                <span className="detail-value">1267 Sqft</span>
              </div>
              <div className="detail-icon-item">
                <span className="icon">
                  <LuBedDouble />
                </span>
                <span className="detail-value">670 Sqft</span>
              </div>
              <div className="detail-icon-item">
                <span className="icon">
                  <GiShower />
                </span>
                <span className="detail-value">530 Sqft</span>
              </div>
              <div className="price-item">
                <span className="price-label">Price:</span>
                <span className="price-value">$1,650</span>
              </div>
            </div>
          </div>

          {showFirst && (
            <div className="floor-plan-container">
              <div className="floor-plan-header">
                <div className="floor-icon">
                  <span className="checkmark">
                    <MdOutlineNotStarted />
                  </span>
                </div>
                <h3 className="expanded-floor-name">First Floor</h3>
                <div className="expanded-floor-details">
                  <span className="expanded-detail">Size: 1267 Sqft</span>
                  <span className="expanded-detail-icon">
                    <LuBedDouble /> 670 Sqft
                  </span>
                  <span className="expanded-detail-icon">
                    <GiShower /> 530 Sqft
                  </span>
                  <span className="expanded-price">Price: $1,650</span>
                </div>
              </div>
              <div className="floor-plan-image">
                <img
                  src="/images/plan-1.jpg"
                  alt="First Floor Plan"
                  className="floor-image"
                />
              </div>
            </div>
          )}
        </div>
        <div className="floor-item">
          <div className="floor-row" onClick={() => setShowSecond(!showSecond)}>
            <div className="floor-left">
              <div className="floor-icon">
                <span className="checkmark">
                  <MdOutlineNotStarted />
                </span>
              </div>
              <h3 className="floor-name">Second Floor</h3>
            </div>

            <div className="floor-details">
              <div className="detail-item">
                <span className="detail-label">Size:</span>
                <span className="detail-value">1345 Sqft</span>
              </div>
              <div className="detail-icon-item">
                <span className="icon">
                  <LuBedDouble />
                </span>
                <span className="detail-value">543 Sqft</span>
              </div>
              <div className="detail-icon-item">
                <span className="icon">
                  <GiShower />
                </span>
                <span className="detail-value">238 Sqft</span>
              </div>
              <div className="price-item">
                <span className="price-label">Price:</span>
                <span className="price-value">$1,600</span>
              </div>
            </div>
          </div>

          {showSecond && (
            <div className="floor-plan-container">
              <div className="floor-plan-header">
                <div className="floor-icon">
                  <span className="checkmark">
                    <MdOutlineNotStarted />
                  </span>
                </div>
                <h3 className="expanded-floor-name">Second Floor</h3>
                <div className="expanded-floor-details">
                  <span className="expanded-detail">Size: 1345 Sqft</span>
                  <span className="expanded-detail-icon">
                    <LuBedDouble /> 543 Sqft
                  </span>
                  <span className="expanded-detail-icon">
                    <GiShower /> 238 Sqft
                  </span>
                  <span className="expanded-price">Price: $1,600</span>
                </div>
              </div>
              <div className="floor-plan-image">
                <img
                  src="/images/plan-1.jpg"
                  alt="Second Floor Plan"
                  className="floor-image"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
