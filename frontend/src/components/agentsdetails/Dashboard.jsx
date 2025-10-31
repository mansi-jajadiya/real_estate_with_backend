import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="stats-wrapper">
      <div className="container">
        <div className="stats-container">
          <div className="stats-card">
            <h4 className="stats-title">Property Types</h4>
            <div className="stats-content">
              <div className="donut-chart">
                <div className="donut donut-1"></div>
              </div>
              <ul className="stats-list">
                <li>
                  <span className="dot dot-pink"></span>
                  <strong>50%</strong> Single Family Home
                </li>
                <li>
                  <span className="dot dot-blue"></span>
                  <strong>25%</strong> Villa
                </li>
                <li>
                  <span className="dot dot-yellow"></span>
                  <strong>25%</strong> Apartment
                </li>
              </ul>
            </div>
          </div>

          <div className="stats-card">
            <h4 className="stats-title">Property Status</h4>
            <div className="stats-content">
              <div className="donut-chart">
                <div className="donut donut-2"></div>
              </div>
              <ul className="stats-list">
                <li>
                  <span className="dot dot-pink"></span>
                  <strong>100%</strong> For Sale
                </li>
              </ul>
            </div>
          </div>

          <div className="stats-card">
            <h4 className="stats-title">Property Cities</h4>
            <div className="stats-content">
              <div className="donut-chart">
                <div className="donut donut-3"></div>
              </div>
              <ul className="stats-list">
                <li>
                  <span className="dot dot-pink"></span>
                  <strong>75%</strong> Miami
                </li>
                <li>
                  <span className="dot dot-blue"></span>
                  <strong>25%</strong> New York
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
