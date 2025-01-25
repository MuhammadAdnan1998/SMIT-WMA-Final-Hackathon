// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Check if token exists (or your preferred auth check)
  
  if (!token) {
    return <Navigate to="/login" />; // Redirect to login if no token
  }

  return children; // Allow access to children if authenticated
};

export default PrivateRoute;
