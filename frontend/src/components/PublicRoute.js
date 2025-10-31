import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ element: Component }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (token) {
    return role === "admin" ? (
      <Navigate to="/admin/dashboard" replace />
    ) : (
      <Navigate to="/" replace />
    );
  }

  return <Component />;
};

export default PublicRoute;
