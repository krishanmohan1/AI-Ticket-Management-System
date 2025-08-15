// src/components/check-auth.jsx
import React from "react";
import { Navigate } from "react-router-dom";

function CheckAuth({ children, protectedRoute }) {
  const token = localStorage.getItem("token");

  if (protectedRoute && !token) {
    // Protected route but no token → go to login
    return <Navigate to="/login" replace />;
  }

  if (!protectedRoute && token) {
    // Public route but already logged in → go to home
    return <Navigate to="/" replace />;
  }

  // Otherwise render page
  return children;
}

export default CheckAuth;
