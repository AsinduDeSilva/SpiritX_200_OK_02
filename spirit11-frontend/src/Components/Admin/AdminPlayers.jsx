import React, { useState } from "react";

const AdminPlayers = () => {
  const initialPlayers = [
    { id: 1, name: "Danushka Kumara", university: "University A", role: "Batsman", runs: 1200, wickets: 15 },
    { id: 2, name: "Jeewan Thirimanne", university: "University B", role: "Bowler", runs: 800, wickets: 30 },
    { id: 3, name: "Charith Shanaka", university: "University C", role: "All-rounder", runs: 1000, wickets: 20 },
  ];
  const [players, setPlayers] = useState(initialPlayers);

  const handleDelete = (id) => {
    setPlayers(players.filter(player => player.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit player with id ${id}`);
  };

  const handleAdd = () => {
    alert("Add new player");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Players Management</h1>
      <button onClick={handleAdd} className="mb-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
        Add New Player
      </button>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">University</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Runs</th>
            <th className="py-2 px-4 border-b">Wickets</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-center">{player.id}</td>
              <td className="py-2 px-4 border-b">{player.name}</td>
              <td className="py-2 px-4 border-b">{player.university}</td>
              <td className="py-2 px-4 border-b">{player.role}</td>
              <td className="py-2 px-4 border-b text-center">{player.runs}</td>
              <td className="py-2 px-4 border-b text-center">{player.wickets}</td>
              <td className="py-2 px-4 border-b text-center">
                <button onClick={() => handleEdit(player.id)} className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2">
                  Edit
                </button>
                <button onClick={() => handleDelete(player.id)} className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPlayers;
