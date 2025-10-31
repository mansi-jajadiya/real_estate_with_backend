import React from "react";
import "./News.css";

export default function NewsletterSignup() {
  return (
    <section className="newsletter-section py-5">
      <div className="container newsletter-container">
        <div className="row align-items-center justify-content-between newsletter-row">
          <div className="col-md-4 text-md-start text-center mb-3 mb-md-0 newsletter-col-md-4">
            <h5 className="newsletter-title m-0">NEWSLETTER SIGN UP</h5>
          </div>

          <div className="col-md-8 newsletter-col-md-8">
            <form className="d-flex justify-content-md-end justify-content-center">
              <input
                type="email"
                className="form-control me-2 newsletter-input"
                placeholder="Enter your email"
              />
              <button type="submit" className="btn newsletter-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
