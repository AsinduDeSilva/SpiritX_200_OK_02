import React from "react";
import dummyPlayer from "../../assets/dummy-player.png";
import { Link } from "react-router-dom";

const Budget = () => {
  const initialBudget = 9000000;

  const selectedPlayers = [
    {
      id: 1,
      name: "Danushka Kumara",
      cost: 500000,
      image: dummyPlayer,
    },
    {
      id: 2,
      name: "Jeewan Thirimanne",
      cost: 750000,
      image: dummyPlayer,
    },
    {
      id: 3,
      name: "Charith Shanaka",
      cost: 600000,
      image: dummyPlayer,
    },

  ];

  const spent = selectedPlayers.reduce((total, player) => total + player.cost, 0);
  const remaining = initialBudget - spent;
  const spentPercentage = Math.round((spent / initialBudget) * 100);

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Budget Tracker</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Initial Budget</h2>
            <p className="text-3xl font-bold text-blue-600">Rs. {initialBudget.toLocaleString()}</p>
          </div>
          <div className="bg-red-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-red-800 mb-2">Spent</h2>
            <p className="text-3xl font-bold text-red-600">Rs. {spent.toLocaleString()}</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-green-800 mb-2">Remaining</h2>
            <p className="text-3xl font-bold text-green-600">Rs. {remaining.toLocaleString()}</p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Budget Usage</h2>
          <div className="w-full bg-gray-300 rounded-full h-6">
            <div
              className="bg-red-500 h-6 rounded-full transition-all duration-500"
              style={{ width: `${spentPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>0%</span>
            <span>{spentPercentage}% spent</span>
            <span>100%</span>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Players Contributing to Budget</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {selectedPlayers.map((player) => (
              <div
                key={player.id}
                className="flex items-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition"
              >
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{player.name}</h3>
                  <p className="text-gray-600">
                    Cost: Rs. {player.cost.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <p className="text-gray-700">
            The above breakdown shows each player's cost contribution. Manage your team selections carefully to stay within your allotted budget of Rs. {initialBudget.toLocaleString()}.
          </p>
        </div>
        <div className="text-center">
          <Link
            to="./select-team"
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105"
        >
                Update Budget
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Budget;
