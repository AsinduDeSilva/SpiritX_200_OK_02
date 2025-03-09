import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Spirit11 Admin" className="h-10 mr-3" />
          <span className="text-xl font-bold">Spirit11 Admin Panel</span>
        </div>
        <div className="space-x-4">
          <Link to="/admin/players" className="hover:text-gray-300">
            Players
          </Link>
          <Link to="/admin/player-stats" className="hover:text-gray-300">
            Player Stats
          </Link>
          <Link to="/admin/tournament-summary" className="hover:text-gray-300">
            Tournament Summary
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
