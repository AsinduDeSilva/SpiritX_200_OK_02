import React from "react";

const Leaderboard = () => {
  const leaderboard = [
    { id: 1, username: "spiritx_2025", points: 1500 },
    { id: 2, username: "user1", points: 1200 },
    { id: 3, username: "user2", points: 1100 },
    { id: 4, username: "user3", points: 900 },
    { id: 5, username: "user4", points: 800 },
  ];

  const currentUser = "spiritx_2025";

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Leaderboard
      </h1>
      <div className="max-w-4xl mx-auto">
        {leaderboard.map((user, index) => (
          <div
            key={user.id}
            className={`flex items-center justify-between p-4 rounded-lg mb-4 shadow transition transform hover:scale-105 ${
              user.username === currentUser
                ? "bg-green-100 border-2 border-green-500"
                : "bg-white"
            }`}
          >
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold mr-4">
                {index + 1}
              </div>
              <div>
                <h2 className="text-xl font-semibold">{user.username}</h2>
                <p className="text-sm text-gray-500">{user.points} Points</p>
              </div>
            </div>
            <div>
              {index === 0 && (
                <span className="text-yellow-500 text-3xl">🏆</span>
              )}
              {index === 1 && (
                <span className="text-gray-400 text-3xl">🥈</span>
              )}
              {index === 2 && (
                <span className="text-yellow-600 text-3xl">🥉</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
