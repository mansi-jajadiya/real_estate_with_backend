import React from "react";
import { CiLocationOn } from "react-icons/ci";
import "./AddressSection.css";

export default function AddressSection() {
  return (
    <div className="address-wrapper">
      <div className="container description-container">
        <div className="row px-0 ">
          <div className="col-12 px-0">
            <div className="address-section">
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
                <h2 className="address-title mb-0 mt-2">Address</h2>
                <a
                  className=" mt-2"
                  href="https://www.google.com/maps/place/2835+Tigertail+Ave,+Miami,+FL+33133,+USA/@25.7308673,-80.2414364,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9b7ceb5a01b15:0x820e2835756f86f9!8m2!3d25.7308673!4d-80.2388615!16s%2Fg%2F11bw4jq4q4?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
                  target="blank"
                >
                  <button className="btn address-maps-btn">
                    <CiLocationOn />
                    Open on Google Maps
                  </button>
                </a>
              </div>

              <hr className="address-divider mb-4" />

              <div className="address-details">
                <div className="row g-4">
                  <div className="col-lg-6 col-md-6">
                    <div className="address-item d-flex">
                      <div className="address-label">Address:</div>
                      <div className="address-value ms-auto">
                        3000 Florida Ave
                      </div>
                    </div>
                    <hr className="address-item-divider" />
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="address-item d-flex">
                      <div className="address-label">City:</div>
                      <div className="address-value ms-auto">Miami</div>
                    </div>
                    <hr className="address-item-divider" />
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="address-item d-flex">
                      <div className="address-label">Zip/Postal Code:</div>
                      <div className="address-value ms-auto">33133</div>
                    </div>
                    <hr className="address-item-divider" />
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="address-item d-flex">
                      <div className="address-label">Area:</div>
                      <div className="address-value ms-auto">Coconut Grove</div>
                    </div>
                    <hr className="address-item-divider" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
