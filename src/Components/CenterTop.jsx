import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import cookies from 'cookie'

const CenterTop = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5100/api/auth/logout", {}, { withCredentials: true });
  
      localStorage.clear();
      sessionStorage.clear();
  
      window.location.href = "/"; // ✅ Reliable redirect
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  

  return (
    <div className="w-full h-[20vh] bg-cyan-200 flex items-center justify-between px-4">
      <h3 className="text-4xl font-semibold">Dashboard</h3>

      <div className="slider w-[40vw] h-[5vh] flex items-center justify-center relative bg-red-500 overflow-hidden">
        <h3 className="ticker text-xl text-white whitespace-nowrap animate-marquee">
          Today Trending News: जनहित मिशन डॉट कॉम समाचार विचार पोर्टल
        </h3>
      </div>

      <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
        Logout
      </button>
    </div>
  );
};

export default CenterTop;
