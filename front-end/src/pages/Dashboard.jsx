import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token on logout
    alert("Logged out successfully!");
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Dashboard</h1>
      
      {/* Add some dashboard content */}
      <div className="mb-4">
        <p>Welcome to your dashboard! Here you can manage your account, view analytics, and more.</p>
      </div>

      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
