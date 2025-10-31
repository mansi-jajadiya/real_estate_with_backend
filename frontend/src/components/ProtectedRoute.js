import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    if (role === "user") return <Navigate to="/" replace />;
    if (role === "admin") return <Navigate to="/admin/dashboard" replace />;
    return null;
  }
  return <Component />;
};

export default ProtectedRoute;
