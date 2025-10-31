import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginPage.css";

const RealnestLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    let formErrors = {};

    if (!email) {
      formErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      formErrors.email = "Enter a valid email";
    }

    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    if (!role) {
      formErrors.role = "Please select a role";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:1155/user/loginUser", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        console.log("Login response:", data);

        if (response.ok) {
          localStorage.setItem("token", data.accessToken);
          localStorage.setItem("user", JSON.stringify({ ...data, role }));
          localStorage.setItem("role", data.role);

          toast.success("Login successful! Redirecting...", {
            position: "top-right",
            autoClose: 2000,
            theme: "colored",
          });

          setTimeout(() => {
            if (role === "admin") {
              navigate("/admin/dashboard");
            } else {
              navigate("/");
            }
          }, 2000);
        } else {
          toast.error(data.message || "Invalid credentials", {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
          });
        }
      } catch (error) {
        console.error("Login Error:", error);
        toast.error("Something went wrong. Please try again later.", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
      }
    }
  };

  const handleGoogleLogin = () => {
    window.location.href =
      "https://accounts.google.com/o/oauth2/v2/auth?" +
      "client_id=1234567890-abcxyz.apps.googleusercontent.com&" +
      "redirect_uri=http://localhost:3000/auth/callback&" +
      "response_type=token&" +
      "scope=email%20profile&" +
      "prompt=consent";
  };

  const handleFacebookLogin = () => {
    window.location.href =
      "https://www.facebook.com/v16.0/dialog/oauth?" +
      "client_id=987654321012345&" +
      "redirect_uri=http://localhost:3000/auth/callback&" +
      "state=abc123";
  };

  return (
    <div className="login-page-6789">
      <div className="login-container-6789">
        <div className="main-card-6789">
          {/* LEFT SIDE */}
          <div className="left-column-6789">
            <div className="left-sections-6789">
              <div className="left-content-6789">
                <h1 className="main-heading-6789">Find Your Sweet Home</h1>
                <p className="main-subtitle-6789">
                  Visiting your dream project is now just a few clicks away —
                  fast, easy, reliable.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="right-column-6789">
            <div className="right-section-6789">
              <div>
                <button
                  className="sign-in-btn-6789"
                  onClick={() => navigate("/register")}
                >
                  Sign In
                </button>
                <h2 className="welcome-title-6789">
                  Welcome Back to Realnest!
                </h2>
                <p className="welcome-subtitle-6789">Sign into account</p>
                <br />

                <div>
                  {/* EMAIL */}
                  <div
                    className={`form-group formgroup-5678 ${
                      errors.email ? "has-error haserror5678" : ""
                    }`}
                  >
                    <label
                      className="form-label-6789"
                      style={{ fontSize: "15px" }}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control formcontrol-6789"
                      placeholder="alexander79@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                      <div className="error-message-6789">
                        <FaExclamationCircle className="error-icon-6789" />{" "}
                        {errors.email}
                      </div>
                    )}
                  </div>

                  {/* PASSWORD */}
                  <div
                    className={`form-group form-group5678 ${
                      errors.password ? "has-error haserror-5678" : ""
                    }`}
                  >
                    <label
                      className="form-label-6789"
                      style={{ fontSize: "15px" }}
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control formcontrol-6789"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && (
                      <div className="error-message-6789">
                        <FaExclamationCircle className="error-icon" />{" "}
                        {errors.password}
                      </div>
                    )}
                  </div>

                  <div
                    className={`form-group form-group5678 ${
                      errors.role ? "has-error haserror-5678" : ""
                    }`}
                  >
                    <label
                      className="form-label-6789"
                      style={{ fontSize: "15px" }}
                    >
                      Select Role
                    </label>
                    <div
                      style={{ display: "flex", gap: "15px", marginTop: "5px" }}
                    >
                      <label style={{ fontSize: "14px" }}>
                        <input
                          type="radio"
                          name="role"
                          value="user"
                          checked={role === "user"}
                          onChange={(e) => setRole(e.target.value)}
                        />{" "}
                        User
                      </label>
                      <label style={{ fontSize: "14px" }}>
                        <input
                          type="radio"
                          name="role"
                          value="admin"
                          checked={role === "admin"}
                          onChange={(e) => setRole(e.target.value)}
                        />{" "}
                        Admin
                      </label>
                    </div>
                    {errors.role && (
                      <div className="error-message-6789">
                        <FaExclamationCircle className="error-icon-6789" />{" "}
                        {errors.role}
                      </div>
                    )}
                  </div>

                  {/* REMEMBER ME */}
                  <div className="remember-forgot-6789">
                    <label
                      className="remember-me-6789"
                      style={{ fontSize: "13px" }}
                    >
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <span>Remember Me</span>
                    </label>
                  </div>

                  {/* LOGIN BTN */}
                  <button
                    type="button"
                    className="login-btn-6789"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </div>

                {/* DIVIDER */}
                <div className="divider-6789">
                  <span style={{ fontSize: "10px" }}>Or continue with</span>
                </div>

                {/* SOCIAL LOGIN */}
                <div className="social-buttons-6789">
                  <button
                    className="social-btn-6789"
                    style={{ fontSize: "13px" }}
                    onClick={handleGoogleLogin}
                  >
                    Continue with Google
                  </button>
                  <button
                    className="social-btn-6789"
                    style={{ fontSize: "13px" }}
                    onClick={handleFacebookLogin}
                  >
                    Continue with Facebook
                  </button>
                </div>

                {/* REGISTER LINK */}
                <div
                  className="register-link-6789"
                  style={{ fontSize: "13px" }}
                >
                  Don't have any account?{" "}
                  <span
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />

      {/* INLINE STYLES (form + error styles only) */}
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

export default RealnestLogin;
