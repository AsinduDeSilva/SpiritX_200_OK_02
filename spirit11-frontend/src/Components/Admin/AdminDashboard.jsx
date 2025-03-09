import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="players"
          className="block bg-white p-6 rounded-lg shadow hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Players Management</h2>
          <p className="text-gray-600">
            Manage players' data and perform CRUD operations.
          </p>
        </Link>
        <Link
          to="playerstats"
          className="block bg-white p-6 rounded-lg shadow hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Player Statistics</h2>
          <p className="text-gray-600">
            View detailed statistics for each player.
          </p>
        </Link>
        <Link
          to="summary"
          className="block bg-white p-6 rounded-lg shadow hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Tournament Summary</h2>
          <p className="text-gray-600">
            Overview of tournament performance and key metrics.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;