import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import AdminPanel from "./Components/Admin/AdminPanel";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<Players />} />
            <Route path="/team" element={<Team />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/select-team" element={<TeamSelection />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/admin/*" element={<AdminPanel />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;