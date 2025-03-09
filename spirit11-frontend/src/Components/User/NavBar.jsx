import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#023E8A]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img className="h-10 w-auto" src={logo} alt="Spirit11 Logo" />
            <span className="ml-2 text-white font-bold text-xl">Spirit11</span>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/players" className="text-white hover:text-gray-300">
              Players
            </Link>
            <Link to="/select-team" className="text-white hover:text-gray-300">
              Select Team
            </Link>
            <Link to="/team" className="text-white hover:text-gray-300">
              Team
            </Link>
            <Link to="/budget" className="text-white hover:text-gray-300">
              Budget
            </Link>
            <Link to="/leaderboard" className="text-white hover:text-gray-300">
              Leaderboard
            </Link>
            <Link to="/chatbot" className="text-white hover:text-gray-300">
              Spiriter
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-white hover:bg-blue-500"
          >
            Home
          </Link>
          <Link
            to="/players"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-white hover:bg-blue-500"
          >
            Players
          </Link>
          <Link
            to="/select-team"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-white hover:bg-blue-500"
          >
            Select Team
          </Link>
          <Link
            to="/team"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-white hover:bg-blue-500"
          >
            Team
          </Link>
          <Link
            to="/budget"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-white hover:bg-blue-500"
          >
            Budget
          </Link>
          <Link
            to="/leaderboard"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-white hover:bg-blue-500"
          >
            Leaderboard
          </Link>
          <Link
            to="/chatbot"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-white hover:bg-blue-500"
          >
            Spiriter
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
