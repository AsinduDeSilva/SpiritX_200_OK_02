import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const adminSections = [
  {
    id: "players",
    title: "Players Management",
    description:
      "Manage players' data, perform CRUD operations, and update player details seamlessly.",
    route: "players",
    details: [
      { label: "Total Players", value: "150" },
      { label: "Active Players", value: "120" },
      { label: "Pending Approvals", value: "5" },
    ],
  },
  {
    id: "playerstats",
    title: "Player Statistics",
    description:
      "View detailed statistics for each player including runs, wickets, and performance trends.",
    route: "playerstats",
    details: [
      { label: "Average Runs", value: "45.6" },
      { label: "Average Wickets", value: "2.3" },
      { label: "Top Scorer", value: "Danushka Kumara" },
    ],
  },
  {
    id: "summary",
    title: "Tournament Summary",
    description:
      "Overview of tournament performance including total runs, wickets, and key performer highlights.",
    route: "summary",
    details: [
      { label: "Total Runs", value: "45,000" },
      { label: "Total Wickets", value: "320" },
      { label: "Highest Run Scorer", value: "Jeewan Thirimanne" },
    ],
  },
];

const AdminDashboard = () => {

  const [activeCard, setActiveCard] = useState(null);
  const {isLogged} = useSelector((state) => state.loggedUser);
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLogged){
      navigate("/signin")
    } 
  },[]);

  const toggleCard = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {adminSections.map((section) => (
          <div
            key={section.id}
            onClick={() => toggleCard(section.id)}
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition transform hover:scale-105 cursor-pointer"
          >
            <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-600">
              {activeCard === section.id
                ? section.description
                : "Click to expand for more details"}
            </p>
            {activeCard === section.id && (
              <div className="mt-4">
                <ul className="mb-4 space-y-1">
                  {section.details.map((detail, index) => (
                    <li key={index} className="text-sm text-gray-700">
                      <span className="font-semibold">{detail.label}:</span> {detail.value}
                    </li>
                  ))}
                </ul>
                <Link
                  to={section.route}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Go to {section.title}
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
