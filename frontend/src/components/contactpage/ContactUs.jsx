import React from "react";
import ContactForm from "./ContactForm/ContactForm.jsx";
import HelpSection from "./HelpSection/HelpSection.jsx";
import PressContact from "./PressContact/PressContact.jsx";
import CorporateInfo from "./CorporateInfo/CorporateInfo.jsx";
import "./contact.css";

function ContactUs() {
  return (
    <div className="contact-page-6789">
      <div className="container">
        <h1 className="contact-title-6789">Contact Us</h1>
        <p className="contact-subtitle-6789">
          We offer unique properties suitable for any kind of comfort
        </p>

        <div className="row mt-5">
          <div className="col-md-6">
            <ContactForm />
          </div>
          <div className="col-md-3">
            <HelpSection />
          </div>
          <div className="col-md-3">
            <PressContact />
            <CorporateInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
