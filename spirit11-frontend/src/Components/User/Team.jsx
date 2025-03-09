import React, { useState } from "react";
import dummyPlayer from "../../assets/dummy-player.png";

const Team = () => {
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Danushka Kumara",
      role: "Batsman",
      university: "University A",
      image:dummyPlayer,
      points: 120,
    },
    {
      id: 2,
      name: "Jeewan Thirimanne",
      role: "Bowler",
      university: "University B",
      image: dummyPlayer,
      points: 110,
    },
    {
      id: 3,
      name: "Charith Shanaka",
      role: "All-Rounder",
      university: "University C",
      image: dummyPlayer,
      points: 130,
    },
  ]);

  const maxTeamSize = 11;
  const teamCount = team.length;
  const totalPoints = team.reduce((sum, player) => sum + player.points, 0);
  const initialBudget = 9000000;
  const spent = teamCount * 500000;
  const remainingBudget = initialBudget - spent;

  const removePlayer = (id) => {
    setTeam(team.filter((player) => player.id !== id));
  };

  return (
    <div className="p-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Your Dream Team</h1>
        <p className="text-lg text-gray-700">
          Team Completeness: {teamCount}/{maxTeamSize} Players
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mb-8 gap-4">
        <div className="bg-white shadow rounded-lg p-6 w-full md:w-1/3">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Remaining Budget
          </h2>
          <p className="text-3xl font-bold text-center">
            Rs. {remainingBudget.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {team.map((player) => (
          <div
            key={player.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border flex flex-col justify-center items-center text-center border-gray-100"
          >
            <img
              src={player.image}
              alt={player.name}
              className="rounded-md mb-4 w-36 h-36 object-cover"
            />
            <div className="mb-2">
              <h2 className="text-xl font-semibold">{player.name}</h2>
              <p className="text-gray-600">{player.role}</p>
              <p className="text-gray-500 text-sm">{player.university}</p>
            </div>
            <button
              onClick={() => removePlayer(player.id)}
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
