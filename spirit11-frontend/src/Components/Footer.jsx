import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#023E8A] text-white py-4 mt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="Spirit11 Logo" className="h-8 mr-2" />
            <span className="font-bold">Spirit11 Fantasy Cricket League</span>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/players" className="hover:underline">Players</Link>
            <Link to="/team" className="hover:underline">Team</Link>
            <Link to="/budget" className="hover:underline">Budget</Link>
            <Link to="/leaderboard" className="hover:underline">Leaderboard</Link>
            <Link to="/chatbot" className="hover:underline">Spiriter</Link>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Spirit11. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
