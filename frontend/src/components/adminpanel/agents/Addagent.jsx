import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { VscError } from "react-icons/vsc";
import { FaRegCheckCircle } from "react-icons/fa";
import "./Addagent.css";

const Addagent = () => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    cname: "",
    office: "",
    mobile: "",
    fax: "",
    email: "",
    location: "",
    description: "",
    role: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files[0]) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check empty fields
    for (let key in formData) {
      if (key !== "image" && formData[key].toString().trim() === "") {
        setError(`Please fill in the ${key} field.`);
        return false;
      }
    }

    if (!nameRegex.test(formData.name)) {
      setError("Agent name must contain only alphabets and spaces.");
      return false;
    }

    if (
      !phoneRegex.test(formData.office) ||
      !phoneRegex.test(formData.mobile) ||
      !phoneRegex.test(formData.fax)
    ) {
      setError("Office, Mobile, and Fax numbers must be 10 digits.");
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (!formData.image) {
      setError("Please upload an agent image.");
      return false;
    }

    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!validateForm()) return;
    
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Please login first.");
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    if (formDataToSend.get("image")) {
      console.log("File appended:", formDataToSend.get("image"));
    } else {
      console.warn("No file appended to FormData under key 'image'");
    }

    try {
      const res = await axios.post(
        "http://localhost:1155/agents/upload",
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Upload response:", res.data);
      setSuccess("Agent added successfully!");
      setFormData({
        image: "",
        name: "",
        cname: "",
        office: "",
        mobile: "",
        fax: "",
        email: "",
        location: "",
        description: "",
        role: "",
      });

      const fileInput = document.querySelector('input[name="image"]');
      if (fileInput) fileInput.value = "";

      setTimeout(() => navigate("/admin/agent"), 1200);
    } catch (err) {
      console.error("Error adding agent:", err.response || err);
      const serverMsg = err?.response?.data?.message;
      setError(serverMsg || "Failed to add agent. Try again.");
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <div className="mb-4 add-agent-path d-flex align-items-center">
            <span
              className="add-span-main"
              onClick={() => navigate("/admin/agent")}
              style={{ cursor: "pointer" }}
            >
              Agents
            </span>
            <span className="add-span">/Add Agent</span>
          </div>
          <div className="add-age-card shadow-sm p-4 rounded-3">
            {error && (
              <div className="alert alert-danger d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <VscError />
                  <div className="ms-3">{error}</div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setError("")}
                  aria-label="Close"
                ></button>
              </div>
            )}

            {success && (
              <div className="alert alert-success d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <FaRegCheckCircle />
                  <div className="ms-3">{success}</div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSuccess("")}
                  aria-label="Close"
                ></button>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label add-age-name">Agent Name</label>
                  <input
                    type="text"
                    className="form-control add-age-input"
                    name="name"
                    placeholder="Michelle Ramirez"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label add-age-name">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="form-control add-age-input"
                    name="cname"
                    placeholder="Company Agent at Realtory Inc."
                    value={formData.cname}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label add-age-name">Office</label>
                  <input
                    type="text"
                    className="form-control add-age-input"
                    name="office"
                    placeholder="7894563210"
                    value={formData.office}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label add-age-name">Mobile</label>
                  <input
                    type="text"
                    className="form-control add-age-input"
                    name="mobile"
                    placeholder="3214569874"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label add-age-name">Fax</label>
                  <input
                    type="text"
                    className="form-control add-age-input"
                    name="fax"
                    placeholder="8976541258"
                    value={formData.fax}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label add-age-name">Email</label>
                  <input
                    type="text"
                    className="form-control add-age-input"
                    name="email"
                    placeholder="michelle@houzez.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label add-age-name">Location</label>
                  <input
                    type="text"
                    className="form-control add-age-input"
                    name="location"
                    placeholder="New York, USA"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label add-age-name">Description</label>
                  <textarea
                    className="form-control add-age-input"
                    name="description"
                    rows="4"
                    placeholder="Enter agent description"
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="col-md-6">
                  <label className="form-label add-age-name">Agent Image</label>
                  <input
                    type="file"
                    className="form-control add-age-input"
                    name="image"
                    onChange={handleChange}
                    accept="image/*"
                  />
                </div>
                 <div className="col-md-6">
                  <label className="form-label add-age-name">Role</label>
                  <input
                    type="text"
                    className="form-control add-age-input"
                    name="role"
                    placeholder="Property Consultant"
                    value={formData.role}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 mt-3 text-end">
                  <button type="submit" className="btn add-age-btns px-4">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addagent;