import React from "react";
import { Outlet } from "react-router-dom";
import Adminsidebar from "./sidebar/Adminsidebar";
import AdminHeader from "./header/AdminHeader";
import "./AdminLayout.css";

const AdminLayout = () => {
  return (
    <div className="w-100">
      <AdminHeader />
      <div style={{ display: "flex" }}>
        <Adminsidebar />
        <main className="width_manage">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
