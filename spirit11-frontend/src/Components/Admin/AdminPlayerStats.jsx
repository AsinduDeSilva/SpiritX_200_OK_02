import React, { useState } from "react";

const AdminPlayerStats = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditing, setIsEditing] = useState(false);

  const player = {
    id: 1,
    name: "Danushka Kumara",
    university: "University A",
    role: "Batsman",
    runs: 1200,
    wickets: 15,
    battingAverage: 45.3,
    bawlingAverage: 50.0,
    strikeRate: 95.6,
    economy: 3.5,
    playerPoints: 250,
    highScores: [100, 120, 80],
    bestFigures: "3/20",
  };

  const [editedStats, setEditedStats] = useState({
    runs: player.runs,
    wickets: player.wickets,
    battingAverage: player.battingAverage,
    bawlingAverage: player.bawlingAverage,
    strikeRate: player.strikeRate,
    economy: player.economy,
    playerPoints: player.playerPoints,
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedStats((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saved stats:", editedStats);
    setIsEditing(false);
  };

  const renderContent = () => {
    if (isEditing) {
      return (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Edit Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(editedStats).map((key) => (
              <div key={key}>
                <label className="block text-gray-700 capitalize">{key}:</label>
                <input
                  type="number"
                  name={key}
                  value={editedStats[key]}
                  onChange={handleEditChange}
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="ml-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      );
    }

    switch (activeTab) {
      case "overview":
        return (
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Overview</h3>
            <p><strong>Name:</strong> {player.name}</p>
            <p><strong>University:</strong> {player.university}</p>
            <p><strong>Role:</strong> {player.role}</p>
            <p><strong>Player Points:</strong> {player.playerPoints}</p>
          </div>
        );
      case "batting":
        return (
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Batting Stats</h3>
            <p><strong>Runs:</strong> {player.runs}</p>
            <p><strong>Batting Average:</strong> {player.battingAverage}</p>
            <p><strong>Strike Rate:</strong> {player.strikeRate}</p>
            <p><strong>High Scores:</strong> {player.highScores.join(", ")}</p>
          </div>
        );
      case "bowling":
        return (
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Bowling Stats</h3>
            <p><strong>Wickets:</strong> {player.wickets}</p>
            <p><strong>Economy:</strong> {player.economy}</p>
            <p><strong>Best Figures:</strong> {player.bestFigures}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Player Stats</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex space-x-4 border-b mb-4">
          <button
            onClick={() => {
              setActiveTab("overview");
              setIsEditing(false);
            }}
            className={`pb-2 ${
              activeTab === "overview"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => {
              setActiveTab("batting");
              setIsEditing(false);
            }}
            className={`pb-2 ${
              activeTab === "batting"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            Batting
          </button>
          <button
            onClick={() => {
              setActiveTab("bowling");
              setIsEditing(false);
            }}
            className={`pb-2 ${
              activeTab === "bowling"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            Bowling
          </button>
        </div>
        {renderContent()}
        {!isEditing && (
          <div className="mt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition"
            >
              Edit Stats
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPlayerStats;
