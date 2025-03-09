import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Components/User/NavBar";
import Home from "./Components/User/Home";
import Players from "./Components/User/Players";
import Team from "./Components/User/Team";
import Budget from "./Components/User/Budget";
import Leaderboard from "./Components/User/Leaderboard";
import Chatbot from "./Components/User/Chatbot";
import Footer from "./Components/Footer";
import TeamSelection from "./Components/User/TeamSelection";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import { useSelector } from "react-redux";
import AdminNavbar from "./Components/Admin/AdminNavbar";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import AdminPlayers from "./Components/Admin/AdminPlayers";
import AdminTournamentSummary from "./Components/Admin/AdminTournamentSummary";
import AdminPlayerStats from "./Components/Admin/AdminPlayerStats";

function App() {
  const {role, isLogged} = useSelector((state) => state.loggedUser);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <div className="flex-grow">

          {role == "ROLE_USER"? <Navbar/>: null}
          {role == "ROLE_ADMIN"? <AdminNavbar/>: null}

          <Routes>
            <Route path="/" element={<Home />} />
            {(role == "ROLE_USER") ? 
              <>
                
                <Route path="/players" element={<Players />} />
                <Route path="/team" element={<Team />} />
                <Route path="/budget" element={<Budget />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/select-team" element={<TeamSelection />} />
              </> : null
            }

            <Route path="/admin" element={<AdminDashboard />} />

            {(role == "ROLE_ADMIN") ? 
              <>
                <Route path="/admin/players" element={<AdminPlayers/>} />
                <Route path="/admin/playerstats" element={<AdminPlayerStats />} />
                <Route path="/admin/summary" element={<AdminTournamentSummary />} />
                
              </> : null
            }
            

            {!isLogged ? 
              <>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
              </> : null
            }

          </Routes>
        </div>
        {(role == "ROLE_USER") ? <Footer/>: null}
      </div>
    </Router>
  );
}

export default App;