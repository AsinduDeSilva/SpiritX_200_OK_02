import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImg from "../../assets/background-image.jpg"
import player from "../../assets/player.jpg"
import team from "../../assets/team.jpg"
import leaderboard from "../../assets/leaderboard.png"
import about from "../../assets/about.jpg"
import { useSelector } from "react-redux";


const Home = () => {
  const {isLogged} = useSelector((state) => state.loggedUser);
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLogged){
      navigate("/signin")
    } 
  },[]);

  

  return (
    <div className="flex flex-col bg-gray-50">
      <section
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage:`url(${backgroundImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Welcome to Spirit11
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Draft your dream team and rule the fantasy cricket league!
          </p>
          <Link
            to="/select-team"
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 border border-gray-200">
              <img
                src={player}
                alt="Players"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-center mb-2 text-blue-600">
                Player Management
              </h3>
              <p className="text-gray-600 text-center">
                View detailed player profiles and statistics to make informed choices.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 border border-gray-200">
              <img
                src={team}
                alt="Team Selection"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-center mb-2 text-green-600">
                Team Selection
              </h3>
              <p className="text-gray-600 text-center">
                Easily build your team with our intuitive selection interface.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 border border-gray-200">
              <img
                src={leaderboard}
                alt="Live Updates"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-center mb-2 text-purple-600">
                Live Updates
              </h3>
              <p className="text-gray-600 text-center">
                Stay updated with real-time match statistics and leaderboard rankings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src={about}
              alt="About Spirit11"
              className="rounded-lg shadow-lg border border-gray-200"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">About Spirit11</h2>
            <p className="text-gray-600 mb-4">
              Spirit11 is where cricket fans and fantasy enthusiasts unite! Manage players,
              select your dream team, and compete for the top spot using real-time data and
              AI insights.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to dominate the league?</h2>
          <p className="text-xl mb-8">
            Join Spirit11 today and build your ultimate fantasy cricket team.
          </p>
          <Link
            to="/select-team"
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105"
          >
            Join Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;