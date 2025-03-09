import React from "react";

const PlayerDetailsModal = ({ player, onClose }) => {
  if (!player) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg p-6 relative z-10 max-w-md w-full transform transition-all duration-300 scale-95 hover:scale-100">
        <button
          className="absolute top-2 right-2 text-gray-700 text-2xl font-bold hover:text-gray-900 transition-colors duration-200"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={player.image}
          alt={player.name}
          className="rounded-md mb-4 w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
        />
        <h2 className="text-2xl font-bold mb-2">{player.name}</h2>
        <p className="text-gray-600 mb-2">
          <strong>University:</strong> {player.university}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Category:</strong> {player.category}
        </p>
        <div className="space-y-1">
          <p className="text-gray-600">
            <strong>Total Runs:</strong> {player.totalRuns}
          </p>
          <p className="text-gray-600">
            <strong>Balls Faced:</strong> {player.ballsFaced}
          </p>
          <p className="text-gray-600">
            <strong>Innings Played:</strong> {player.inningsPlayed}
          </p>
          <p className="text-gray-600">
            <strong>Wickets:</strong> {player.wickets}
          </p>
          <p className="text-gray-600">
            <strong>Overs Bowled:</strong> {player.oversBowled}
          </p>
          <p className="text-gray-600">
            <strong>Runs Conceded:</strong> {player.runsConceded}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetailsModal;