import React, { useState } from "react";
import PlayerDetailsModal from "./PlayerDetailsModal";
import dummyPlayer from "../../assets/dummy-player.png";

const Players = () => {
  const players = [
    { 
      id: 1, 
      name: "Chamika Chandimal", 
      university: "University of the Visual & Performing Arts", 
      category: "Batsman",
      totalRuns: "530",
      ballsFaced: "588",
      inningsPlayed: "10",
      wickets: "0",
      oversBowled: "3",
      runsConceded: "21",
      image: dummyPlayer,
    },
    { 
      id: 2, 
      name: "Jeewan Thirimanne", 
      university: "University B", 
      role: "Bowler",
      details: "Known for his lethal pace and accurate bowling.",
      image: dummyPlayer,
    },
    { 
      id: 3, 
      name: "Charith Shanaka", 
      university: "University C", 
      role: "All-rounder",
      details: "Balances both batting and bowling exceptionally well.",
      image: dummyPlayer,
    },
  ];

  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const openModal = (player) => {
    setSelectedPlayer(player);
  };

  const closeModal = () => {
    setSelectedPlayer(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Players</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {players.map((player) => (
          <div
            key={player.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer transform hover:scale-105 flex flex-col justify-center items-center text-center"
            onClick={() => openModal(player)}
          >
            <img 
            src={player.image} 
            alt={player.name} 
            className="rounded-md mb-4 w-32 h-32 object-cover" 
            /> 
            <h2 className="text-xl font-semibold">{player.name}</h2>
            <p className="text-gray-600">{player.university}</p>
            <p className="text-sm text-gray-500 mt-2">{player.role || player.category}</p>
        </div>
        ))}
      </div>

      {selectedPlayer && (
        <PlayerDetailsModal player={selectedPlayer} onClose={closeModal} />
      )}
    </div>
  );
};

export default Players;