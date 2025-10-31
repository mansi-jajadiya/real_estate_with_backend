import React, { useState } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import "./ContactForm.css";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSubmitted(false);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateName = (name) => {
    const regex = /^[A-Za-z]+$/;
    return regex.test(name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!validateName(formData.firstName)) {
      newErrors.firstName = "First name must contain only letters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!validateName(formData.lastName)) {
      newErrors.lastName = "Last name must contain only letters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        await axios.post("http://localhost:1155/contacts/add", formData);
        setSubmitted(true);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } catch (err) {
        console.error("Error submitting contact form:", err);
        setSubmitted(false);
        alert("Something went wrong. Please try again.");
      }
    } else {
      setSubmitted(false);
    }
  };

  const inputWrapperStyle = {
    position: "relative",
    marginBottom: "15px",
  };

  const iconStyle = {
    position: "absolute",
    right: "30px",
    top: "38px",
    fontSize: "18px",
  };

  const getInputStyle = (field) => ({
    border: errors[field] ? "1px solid red" : "1px solid #ccc",
    boxShadow: errors[field] ? "0 0 6px rgba(241, 70, 70, 0.6)" : "none",
    transition: "0.3s ease-in-out",
    padding: "10px",
    borderRadius: "6px",
    width: "100%",
  });

  return (
    <form className="contact-form-6789" onSubmit={handleSubmit}>
      <p className="form-title-6789">
        This form is customizable and designed to work with Houzez CRM.
      </p>

      <div className="row my-custom-row-6789">
        <div
          className="col-md-6 my-custom-class-6789"
          style={inputWrapperStyle}
        >
          <label className="label-firstname-contact-6789">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control input-small-6789"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            style={getInputStyle("firstName")}
          />
          {errors.firstName ? (
            <FaExclamationCircle style={{ ...iconStyle, color: "red" }} />
          ) : (
            formData.firstName && (
              <FaCheckCircle style={{ ...iconStyle, color: "green" }} />
            )
          )}
          {errors.firstName && (
            <small style={{ color: "red" }}>{errors.firstName}</small>
          )}
        </div>

        <div
          className="col-md-6 my-custom-class-6789"
          style={inputWrapperStyle}
        >
          <label className="label-lastname-contact-6789">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control input-small-6789"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            style={getInputStyle("lastName")}
          />
          {errors.lastName ? (
            <FaExclamationCircle style={{ ...iconStyle, color: "red" }} />
          ) : (
            formData.lastName && (
              <FaCheckCircle style={{ ...iconStyle, color: "green" }} />
            )
          )}
          {errors.lastName && (
            <small style={{ color: "red" }}>{errors.lastName}</small>
          )}
        </div>
      </div>

      <div style={inputWrapperStyle}>
        <label className="label-email-contact-6789">Email</label>
        <input
          type="text"
          name="email"
          className="form-control input-email-6789"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={getInputStyle("email")}
        />
        {errors.email ? (
          <FaExclamationCircle style={{ ...iconStyle, color: "red" }} />
        ) : (
          formData.email && (
            <FaCheckCircle style={{ ...iconStyle, color: "green" }} />
          )
        )}
        {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
      </div>

      <div style={inputWrapperStyle}>
        <label className="label-message-contact-6789">Message</label>
        <textarea
          name="message"
          className="form-control input-message-6789"
          rows="4"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          style={getInputStyle("message")}
        ></textarea>
        {errors.message ? (
          <FaExclamationCircle
            style={{ ...iconStyle, top: "60px", color: "red" }}
          />
        ) : (
          formData.message && (
            <FaCheckCircle
              style={{ ...iconStyle, top: "60px", color: "green" }}
            />
          )
        )}
        {errors.message && (
          <small style={{ color: "red" }}>{errors.message}</small>
        )}
      </div>

      <button type="submit" className="custom-submit-btn-6789">
        Submit
      </button>

      {submitted && (
        <div
          style={{
            marginTop: "15px",
            padding: "12px",
            backgroundColor: "#d4edda",
            border: "1px solid #c3e6cb",
            borderRadius: "6px",
            color: "#155724",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            fontFamily: "Dosis",
          }}
        >
          <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
          Message Sent Successfully!
        </div>
      )}
    </form>
  );
}

export default ContactForm;
