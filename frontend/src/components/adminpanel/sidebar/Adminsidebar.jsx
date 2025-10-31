import React from "react";
import { useNavigate } from "react-router-dom";
import { FiUsers, FiLayers } from "react-icons/fi";
import { TfiHome } from "react-icons/tfi";
import { TbLayoutDashboard } from "react-icons/tb";
import { RiUserSettingsLine } from "react-icons/ri";
import { AiOutlineContacts } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import "./Adminsidebar.css";

const Adminsidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-sidebar-wrapper">
      <div className=" d-none d-md-block">
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
            <li
              className="admin-menu-item"
              onClick={() => navigate("/admin/user")}
            >
              <div className="admin-menu-link">
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
  );
};

export default Adminsidebar;
