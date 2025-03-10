import React, { useEffect, useState } from "react";
import dummyPlayer from "../../assets/dummy-player.png";
import { backendSocket } from "../../constants/backendInfo";

const TeamSelection = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
/*
  const players = [
    { id: 1, name: "Alex Morgan", role: "Batter", image: dummyPlayer, university: "University A", budget: "1,000,000" },
    { id: 2, name: "Chris Jordan", role: "Bowler", image: dummyPlayer, university: "University B", budget: "1,000,000" },
    { id: 3, name: "Sam Taylor", role: "Allrounder", image: dummyPlayer, university: "University C", budget: "1,000,000" },
    { id: 4, name: "Jamie Smith", role: "Batter", image: dummyPlayer, university: "University D", budget: "1,000,000" },
    { id: 5, name: "Jordan Lee", role: "Bowler", image: dummyPlayer, university: "University E", budget: "1,000,000" },
    { id: 6, name: "Casey Brown", role: "Allrounder", image: dummyPlayer, university: "University F", budget: "1,000,000" },
  ];*/

  const [players, setPlayers] = useState([]);

  useEffect(()=> {
    loadPlayers("Batsman");
  },[])

  
  const loadPlayers = (category) => {
    fetch(`${backendSocket}/player/category/${category}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa("spiritx_2025:SpiritX@2025")}`,
      },
    })
    .then((response) => response.json())
    .then((data) => setPlayers(data));
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">Select Your Team</h1>
      <div className="flex justify-center mb-6">
        <button
          onClick={() => loadPlayers("Batsman")}
          className={`px-4 py-2 mx-2 rounded transition-all duration-300 hover:bg-blue-600 hover:text-white ${
            selectedCategory === "batter"
              ? "bg-blue-700 text-white shadow-lg"
              : "bg-blue-200 text-blue-800"
          }`}
        >
          Batsman
        </button>
        <button
          onClick={() => loadPlayers("Bowler")}
          className={`px-4 py-2 mx-2 rounded transition-all duration-300 hover:bg-green-600 hover:text-white ${
            selectedCategory === "bowler"
              ? "bg-green-700 text-white shadow-lg"
              : "bg-green-200 text-green-800"
          }`}
        >
          Bowler
        </button>
        <button
          onClick={() => loadPlayers("All-Rounder")}
          className={`px-4 py-2 mx-2 rounded transition-all duration-300 hover:bg-purple-600 hover:text-white ${
            selectedCategory === "allrounder"
              ? "bg-purple-700 text-white shadow-lg"
              : "bg-purple-200 text-purple-800"
          }`}
        >
          All-Rounder
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {players.map((player) => (
          <div
            key={player.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border flex flex-col justify-center items-center text-center border-gray-100"
          >
            <img
              src={dummyPlayer}
              alt={player.name}
              className="rounded-md mb-4 w-36 h-36 object-cover"
            />
            <h2 className="text-xl font-semibold text-blue-800">{player.name}</h2>
            <p className="text-gray-600">{player.university}</p>
            <p className="text-gray-600">LKR {player.budget}</p>
            <p className="text-sm mt-2">
              <span
                className={`px-2 py-1 rounded-full text-sm font-semibold ${
                  player.role === "batter"
                    ? "bg-blue-100 text-blue-800"
                    : player.role === "bowler"
                    ? "bg-green-100 text-green-800"
                    : "bg-purple-100 text-purple-800"
                }`}
              >
                {player.category}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSelection;