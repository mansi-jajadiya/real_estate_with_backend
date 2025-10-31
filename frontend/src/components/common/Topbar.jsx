import React from "react";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar bg-dark text-white py-2">
      <div className="container">
        <div className="row align-items-center gx-3 gy-2 flex-wrap">
          <div className="col-12 col-md d-flex flex-wrap align-items-center justify-content-center justify-content-md-start gap-3">
            <a
              href="tel:3456435674"
              className="topbar-link d-flex align-items-center gap-1"
            >
              <BsTelephone /> (345) 345 643 5674
            </a>
            <a
              href="mailto:houzez@favethemes.com"
              className="topbar-link d-flex align-items-center gap-1"
            >
              <GoMail /> houzez@favethemes.com
            </a>
          </div>

          <div className="col-12 col-md-auto d-flex justify-content-center justify-content-md-end gap-3">
            <div className="dropdown">
              <button
                className="btn btn-dark dropdown-toggle border-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                USD
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="#">
                    AUD
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    CAD
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    CHF
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    EUR
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    GBP
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    HKD
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    JPY
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    NOK
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    SEK
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    USD
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    NGN
                  </a>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-dark dropdown-toggle border-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Square Meters
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="#">
                    SQUARE FEET
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    SQUARE METERS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
