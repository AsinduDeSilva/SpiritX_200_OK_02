import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logout from "../../assets/logout.png"
import { useDispatch } from "react-redux";
import { setLoggedUser } from "../../redux/actions";

const AdminNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutOnClick = () => {
      navigate("/signin")
      dispatch(setLoggedUser(null, null, false, null, null))
  }
  return (
    <nav className="bg-[#023E8A] text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Spirit11 Admin" className="h-10 mr-3" />
          <span className="text-xl font-bold">Spirit11 Admin Panel</span>
        </div>
        <div className="flex items-center space-x-3">
          <Link to="/admin/players" className="hover:text-gray-300">
            Players
          </Link>
          <Link to="/admin/playerstats" className="hover:text-gray-300">
            Player Stats
          </Link>
          <Link to="/admin/summary" className="hover:text-gray-300">
            Tournament Summary
          </Link>
          <img src={logout} alt="logout" className="w-14 h-14" onClick={logoutOnClick}/>

        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
