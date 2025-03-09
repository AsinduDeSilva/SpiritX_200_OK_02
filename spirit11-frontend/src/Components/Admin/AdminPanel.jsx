import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminDashboard from "./AdminDashboard";
import AdminPlayers from "./AdminPlayers";
import AdminPlayerStats from "./AdminPlayerStats";
import AdminTournamentSummary from "./AdminTournamentSummary";

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      <div className="p-4">
        <Routes>
          <Route index element={<AdminDashboard />} />
          <Route path="players" element={<AdminPlayers />} />
          <Route path="playerstats" element={<AdminPlayerStats />} />
          <Route path="summary" element={<AdminTournamentSummary />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPanel;