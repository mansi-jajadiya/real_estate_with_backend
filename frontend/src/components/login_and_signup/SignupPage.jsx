import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignupPage.css";

const RealnestSignup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullname) newErrors.fullname = "Full Name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Split fullname into first and last name
        const nameParts = formData.fullname.trim().split(" ");
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(" ") || "";

        const response = await fetch(
          "http://localhost:1155/user/registeruser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName,
              lastName,
              userName: formData.fullname.replace(/\s+/g, "").toLowerCase(),
              email: formData.email,
              password: formData.password,
              role: "user",
            }),
          }
        );
        console.log("response is:", response);
        const data = await response.json();
        console.log("data of response", data);

        if (response.ok) {
          toast.success("Registration Successful! Redirecting...", {
            position: "top-right",
            autoClose: 2500,
            theme: "colored",
          });

          setTimeout(() => {
            navigate("/login");
          }, 2500);
        } else {
          toast.error(data.message || "Registration failed.", {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
          });
        }
      } catch (error) {
        toast.error("Something went wrong! Please try again later.", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
      }
    }
  };

  return (
    <div className="signin-page-6789">
      <div className="signin-container-6789">
        <div className="main-card2-6789">
          <div className="left-column2-6789">
            <div className="left-sections2-6789">
              <div className="left-content2-6789">
                <h1 className="main-heading2-6789">Find Your Sweet Home</h1>
                <p className="main-subtitle2-6789">
                  Visiting your dream project is now just a few clicks away —
                  fast, easy, reliable.
                </p>
              </div>
            </div>
          </div>

          <div className="right-column2-6789">
            <div className="right-section2-6789">
              <button
                className="log-in-btn-6789"
                onClick={() => navigate("/login")}
              >
                Login
              </button>

              <h2 className="welcome-title2-6789">Create Your Account</h2>
              <p className="welcome-subtitle2-6789">Sign up to get started</p>

              <form onSubmit={handleSubmit}>
                <div
                  className={`form-group ${errors.fullname ? "has-error" : ""}`}
                >
                  <label
                    className="form-label-6789"
                    style={{ fontSize: "14px" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    className="form-control formcontrol-6789"
                    placeholder="John Doe"
                    value={formData.fullname}
                    onChange={handleChange}
                    style={{ height: "30px", fontSize: "13px" }}
                  />
                  {errors.fullname && (
                    <div className="error-message2-6789">
                      <FaExclamationCircle className="error-icon-6789" />{" "}
                      {errors.fullname}
                    </div>
                  )}
                </div>

                <div
                  className={`form-group ${errors.email ? "has-error" : ""}`}
                >
                  <label
                    className="form-label-6789"
                    style={{ fontSize: "14px" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control formcontrol-6789"
                    placeholder="johndoe@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ height: "30px", fontSize: "13px" }}
                  />
                  {errors.email && (
                    <div className="error-message2-6789">
                      <FaExclamationCircle className="error-icon-6789" />{" "}
                      {errors.email}
                    </div>
                  )}
                </div>

                <div
                  className={`form-group ${errors.password ? "has-error" : ""}`}
                >
                  <label
                    className="form-label-6789"
                    style={{ fontSize: "14px" }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control formcontrol-6789"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    style={{ height: "30px", fontSize: "13px" }}
                  />
                  {errors.password && (
                    <div className="error-message2-6789">
                      <FaExclamationCircle className="error-icon-6789" />{" "}
                      {errors.password}
                    </div>
                  )}
                </div>

                <div
                  className={`form-group ${
                    errors.confirmPassword ? "has-error" : ""
                  }`}
                >
                  <label
                    className="form-label-6789"
                    style={{ fontSize: "14px" }}
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control formcontrol-6789"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    style={{ height: "30px", fontSize: "13px" }}
                  />
                  {errors.confirmPassword && (
                    <div className="error-message2-6789">
                      <FaExclamationCircle className="error-icon-6789" />{" "}
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>

                <button type="submit" className="signin-btn-6789">
                  Sign Up
                </button>
              </form>

              <div className="register-link-6789" style={{ fontSize: "15px" }}>
                Already have an account?{" "}
                <span
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={() => navigate("/login")}
                >
                  {" "}
                  login
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />

      {/* INLINE CSS for form + errors only */}
      <style>{`
        .form-group {
          margin-bottom: 20px;
          position: relative;
        }

        .form-control {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
          transition: border-color 0.3s;
        }

        .form-group.has-error .form-control {
          border-color: #ff4d4f;
        }

        .error-message {
          display: flex;
          align-items: center;
          color: #ff4d4f;
          font-size: 14px;
          margin-top: 5px;
          animation: fadeIn 0.3s ease-in-out;
        }

        .error-icon {
          margin-right: 5px;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default RealnestSignup;
