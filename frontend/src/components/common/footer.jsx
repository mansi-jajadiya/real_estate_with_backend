import React from "react";
import { useNavigate } from "react-router-dom";
import { LuFacebook } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaGooglePlusG } from "react-icons/fa6";
import { PiYoutubeLogo } from "react-icons/pi";
import { FaPinterestP } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "./footer.css";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row pb-5 gx-5">
          <div className="col-md-5 mb-4 text-center text-md-start">
            <div className="footer-logo mb-3">
              <img
                src="/images/logo-houzez-white.png"
                alt="Houzez Logo"
                className="footer-img"
              />
            </div>
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              mollis et sem sed sollicitudin. Donec non odio neque. Aliquam
              hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
            </p>
          </div>

          <div className="col-md-4  col-sm-6 col-12 mb-4 footer-column-spacing text-start text-md-start">
            <div className="d-flex flex-column justify-content-center align-items-md-center">
              <h6 className="footer-heading">Discover</h6>
              <ul className="footer-links">
                <li onClick={() => navigate("/category")}>
                  <IoIosArrowForward /> Miami
                </li>
                <li onClick={() => navigate("/category")}>
                  <IoIosArrowForward /> Los Angeles
                </li>
                <li onClick={() => navigate("/category")}>
                  <IoIosArrowForward /> Chicago
                </li>
                <li onClick={() => navigate("/category")}>
                  <IoIosArrowForward /> New York
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3  col-sm-6 col-12 mb-4 text-start text-md-start">
            <h6 className="footer-heading">Lifestyle</h6>
            <ul className="footer-links">
              <li onClick={() => navigate("/category")}>
                <IoIosArrowForward /> Apartment
              </li>
              <li onClick={() => navigate("/category")}>
                <IoIosArrowForward /> Single  Home
              </li>
              <li onClick={() => navigate("/category")}>
                <IoIosArrowForward /> Villa
              </li>
              <li onClick={() => navigate("/category")}>
                <IoIosArrowForward /> Loft
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center pt-3 border-top">
          <p className="mb-2 mb-md-0 text-white">
            © Houzez - All rights reserved
          </p>
          <div className="footer-socials">
            <LuFacebook />
            <BsTwitterX />
            <FaInstagram />
            <FiLinkedin />
            <FaGooglePlusG />
            <PiYoutubeLogo />
            <FaPinterestP />
          </div>
        </div>
      </div>
    </footer>
  );
}
