import React, { useEffect, useState } from "react";
import PlayerDetailsModal from "./PlayerDetailsModal";
import dummyPlayer from "../../assets/dummy-player.png";
import { backendSocket } from "../../constants/backendInfo";

const Players = () => {
  const [players, setPlayers] = useState([]);

  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const openModal = (player) => {
    setSelectedPlayer(player);
  };

  const closeModal = () => {
    setSelectedPlayer(null);
  };

  useEffect(()=> {
    loadPlayers();
  })

  const loadPlayers = () => {
    fetch(`${backendSocket}/player`,{
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
      <h1 className="text-3xl font-bold mb-6 text-center">Players</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {players.map((player) => (
          <div
            key={player.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer transform hover:scale-105 flex flex-col justify-center items-center text-center"
            onClick={() => openModal(player)}
          >
            <img 
            src={dummyPlayer} 
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