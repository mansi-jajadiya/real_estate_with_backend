import React from "react";
import { TfiHome } from "react-icons/tfi";
import { FiUsers, FiLayers } from "react-icons/fi";
import { TbLayoutDashboard } from "react-icons/tb";
import { RiUserSettingsLine } from "react-icons/ri";
import { AiOutlineContacts } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { IoBagCheckOutline } from "react-icons/io5";
import "./AdminHeader.css";
import { IoMdLogIn } from "react-icons/io";

const AdminHeader = () => {
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
    <header className="admin-header-section d-flex align-items-center justify-content-between px-3 py-2 shadow-sm">
      <div className="admin-brand-container d-flex align-items-center">
        <div className="admin-logo-icon me-2">
          <TfiHome size={28} />
        </div>
        <h4 className="admin-brand-name mb-0">houzez</h4>
      </div>

      <div className="d-flex align-items-center">
        <p className="analytics-button me-3 d-none d-md-block">Analytics</p>
        <div className="admin-profile d-flex align-items-center d-none d-md-flex">
          <div className="text-end me-4">
            <h6 className="mb-0 profile-name">Henry Jr.</h6>
            <small className=" profile-role">Admin</small>
          </div>
          <img src="/images/admin.jpg" alt="profile" className="profile-img" />
        </div>
        <button
          className="btn btn-link custom-nav-link nav-link"
          onClick={handleLogout}
          aria-label="Logout"
          title="Logout"
        >
          <IoMdLogIn size={24} />
        </button>
        <button
          className="btn btn-outline-secondary admin-toggle-btn ms-3"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#adminSidebarOffcanvas"
          aria-controls="adminSidebarOffcanvas"
        >
          ☰
        </button>
        <div
          className="offcanvas offcanvas-start adminhello"
          tabIndex="-1"
          id="adminSidebarOffcanvas"
          aria-labelledby="adminSidebarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body p-0">
            <nav className="admin-navigation-panel">
              <ul className="admin-menu-list">
                <li className="admin-menu-item">
                  <div
                    className="admin-menu-link"
                    onClick={() => navigate("/admin/dashboard")}
                  >
                    <TbLayoutDashboard size={32} className="admin-menu-icon" />
                    <span className="admin-menu-text mt-2">Dashboard</span>
                  </div>
                </li>
                <li className="admin-menu-item">
                  <div
                    className="admin-menu-link"
                    onClick={() => navigate("/admin/agent")}
                  >
                    <FiUsers size={20} className="admin-menu-icon" />
                    <span className="admin-menu-text mt-2">Agents</span>
                  </div>
                </li>
                <li className="admin-menu-item">
                  <div
                    className="admin-menu-link"
                    onClick={() => navigate("/admin/adminrent")}
                  >
                    <FiLayers size={20} className="admin-menu-icon" />
                    <span className="admin-menu-text mt-2">For Rent</span>
                  </div>
                </li>
                <li className="admin-menu-item">
                  <div
                    className="admin-menu-link"
                    onClick={() => navigate("/admin/user")}
                  >
                    <RiUserSettingsLine size={32} className="admin-menu-icon" />
                    <span className="admin-menu-text mt-2">Users</span>
                  </div>
                </li>
                <li
                  className="admin-menu-item"
                  onClick={() => navigate("/admin/contact")}
                >
                  <div className="admin-menu-link">
                    <AiOutlineContacts size={32} className="admin-menu-icon" />
                    <span className="admin-menu-text mt-2">Contact Us</span>
                  </div>
                </li>
                <li
                  className="admin-menu-item"
                  onClick={() => navigate("/admin/booking")}
                >
                  <div className="admin-menu-link">
                    <IoBagCheckOutline size={32} className="admin-menu-icon" />
                    <span className="admin-menu-text mt-2">Bookings</span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
