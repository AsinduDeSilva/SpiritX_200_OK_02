import React from "react";

const AdminPlayerStats = () => {
  const player = {
    id: 1,
    name: "Danushka Kumara",
    university: "University A",
    role: "Batsman",
    runs: 1200,
    wickets: 15,
    battingAverage: 45.3,
    strikeRate: 95.6,
    economy: 3.5,
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Player Stats</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">{player.name}</h2>
        <p className="mb-1"><strong>University:</strong> {player.university}</p>
        <p className="mb-1"><strong>Role:</strong> {player.role}</p>
        <p className="mb-1"><strong>Runs:</strong> {player.runs}</p>
        <p className="mb-1"><strong>Wickets:</strong> {player.wickets}</p>
        <p className="mb-1"><strong>Batting Average:</strong> {player.battingAverage}</p>
        <p className="mb-1"><strong>Strike Rate:</strong> {player.strikeRate}</p>
        <p className="mb-1"><strong>Economy:</strong> {player.economy}</p>
      </div>
    </div>
  );
};

export default AdminPlayerStats;
