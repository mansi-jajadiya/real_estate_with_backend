import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { TbBrandGoogle } from "react-icons/tb";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { LuMessageCircle } from "react-icons/lu";
import "./InfoCard.css";

export default function InfoCard({ reviewCount }) {
  return (
    <div className="info-card-wrapper" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container mt-3">
        <div className="row g-4">
       
          <div className="col-lg-8">
            <div className="info-card-box">
              <h4 className="info-title">About Samuel Palmer</h4>
              <p className="info-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                imperdiet ullamcorper nisl, sed venenatis massa eleifend a. Sed
                at turpis id est dapibus fermentum at ac orci. Maecenas purus
                leo, feugiat vel lacinia non, dignissim sed nisl. Cras sit amet
                arcu quis mauris commodo commodo quis a quam. Etiam vitae
                aliquet eros. Etiam pharetra ultrices risus, eu pellentesque
                odio cursus sed. In ligula enim, dignissim id posuere placerat,
                scelerisque sit amet ipsum. Nunc ut nibh dignissim enim iaculis.
              </p>
              <div className="info-language">
                <LuMessageCircle className="me-2" size={20} />
                <strong>Language:</strong> English, Spanish, Urdu
              </div>
            </div>

         
            <div className="row mt-5">
              <div className="col-md-12">
                <button className="btn btn1 w-100">
                  Reviews ({reviewCount})
                </button>
              </div>
            </div>
          </div>

         
          <div className="col-lg-4">
            <div className="info-contact-box">
              <h5 className="contact-title34">Contact</h5>
              <p className="contact-address">
                <CiLocationOn size={20} /> 608 Imperial St, Los Angeles, CA
                90021, USA
              </p>

              <div className="contact-list">
                <div className="border-bottom">
                  <strong>Office</strong> <span>987 456 7589</span>
                </div>
                <div className="border-bottom">
                  <strong>Mobile</strong> <span>987 654 1230</span>
                </div>
                <div className="border-bottom">
                  <strong>Fax</strong> <span>987 456 4587</span>
                </div>
                <div className="border-bottom">
                  <strong>Email</strong> <span>samuel@houzez.com</span>
                </div>
              </div>

              <p className="social-label">Find Samuel Palmer on:</p>
              <div className="social-icons">
                <SlSocialFacebook size={18} color="#506dab" />
                <FaXTwitter size={18} />
                <SlSocialLinkedin size={18} color="#007bb6" />
                <TbBrandGoogle size={18} color="#77c720" />
                <PiYoutubeLogoLight size={18} color="red" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
