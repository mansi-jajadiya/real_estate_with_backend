import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdLogIn } from "react-icons/io";
import "./Navbar.css";
export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("role");
    } catch (e) {
      console.error("Error during logout:", e);
    }
    navigate("/login");
  };
  return (
    <>
      <nav className="custom-navbar navbar navbar-expand-lg bg-white">
        <div className="container px-3">
          <div className="mobile-navbar d-flex d-lg-none align-items-center justify-content-between w-100">
            <button
              className="custom-toggler navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileMenu"
              aria-controls="mobileMenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <a className="custom-brand navbar-brand mx-auto" href="#">
              <img src="/images/logo.png" alt="Logo" />
            </a>
          </div>

          <div
            className="custom-collapse collapse navbar-collapse d-none d-lg-flex"
            id="mainNavbar"
          >
            <a className="custom-brand navbar-brand" href="#">
              <img src="/images/logo.png" alt="Logo" />
            </a>
            <ul className="custom-nav navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="custom-nav-item nav-item">
                <Link className="custom-nav-link nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="custom-nav-item nav-item">
                <Link className="custom-nav-link nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="custom-nav-item nav-item">
                <Link className="custom-nav-link nav-link" to="/forrent">
                  For Rent
                </Link>
              </li>
              <li className="custom-nav-item nav-item">
                <Link className="custom-nav-link nav-link" to="/ouragents">
                  Our Agents
                </Link>
              </li>
              <li className="custom-nav-item nav-item">
                <Link className="custom-nav-link nav-link" to="/blogpage">
                  Blog
                </Link>
              </li>
              <li className="custom-nav-item nav-item">
                <Link className="custom-nav-link nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="custom-nav-item nav-item">
                <Link className="custom-nav-link nav-link" to="/addtocart">
                  <TiShoppingCart size={24} />
                </Link>
              </li>
              <li className="custom-nav-item nav-item">
                <Link className="custom-nav-link nav-link" to="/wishlist">
                  <FaRegHeart size={24} />
                </Link>
              </li>
              {/* logout */}
              <li className="custom-nav-item nav-item">
                <button
                  className="btn btn-link custom-nav-link nav-link"
                  onClick={handleLogout}
                  aria-label="Logout"
                  title="Logout"
                >
                  <IoMdLogIn size={24} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="custom-offcanvas offcanvas offcanvas-start"
        tabIndex="-1"
        id="mobileMenu"
      >
        <div className="custom-offcanvas-header offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="custom-offcanvas-body offcanvas-body">
          <ul className="custom-offcanvas-nav navbar-nav">
            <li className="custom-offcanvas-item nav-item">
              <Link className="custom-offcanvas-link nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="custom-offcanvas-item nav-item">
              <Link className="custom-offcanvas-link nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="custom-offcanvas-item nav-item">
              <Link className="custom-offcanvas-link nav-link" to="/forrent">
                For Rent
              </Link>
            </li>
            <li className="custom-offcanvas-item nav-item">
              <Link className="custom-offcanvas-link nav-link" to="/ouragents">
                Our Agents
              </Link>
            </li>
            <li className="custom-offcanvas-item nav-item">
              <Link className="custom-offcanvas-link nav-link" to="/blogpage">
                Blog
              </Link>
            </li>
            <li className="custom-offcanvas-item nav-item">
              <Link className="custom-offcanvas-link nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="custom-offcanvas-item nav-item">
              <Link className="custom-offcanvas-link nav-link" to="/addtocart">
                <TiShoppingCart size={24} />
              </Link>
            </li>
            <li className="custom-offcanvas-item nav-item">
              <Link className="custom-offcanvas-link nav-link" to="/wishlist">
                <FaRegHeart size={24} />
              </Link>
            </li>
            {/* logout */}
            <li className="custom-offcanvas-item nav-item">
              <button
                className="btn btn-link custom-nav-link nav-link"
                onClick={handleLogout}
                aria-label="Logout"
                title="Logout"
              >
                <IoMdLogIn size={24} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
