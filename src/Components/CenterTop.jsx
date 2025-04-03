import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "./utils/config";

const CenterTop = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(`${BASE_URL}/api/auth/logout`, {}, { withCredentials: true });

      // ✅ Authentication state reset
      setIsAuthenticated(false);

      // ✅ Local & session storage clear
      localStorage.clear();
      sessionStorage.clear();

      // ✅ SPA behavior ke liye navigate use karo
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="w-full h-[20vh] bg-cyan-200 flex items-center justify-between px-4">
      <h3 className="text-4xl font-semibold">Dashboard</h3>

      {/* 🔵 Smooth Scrolling Marquee */}
      <div className="relative overflow-hidden w-[40vw] h-[5vh] bg-red-500 flex items-center">
        <h3 className="text-xl text-white whitespace-nowrap animate-marquee">
          Today Trending News: जनहित मिशन डॉट कॉम समाचार विचार पोर्टल
        </h3>
      </div>

      <button 
        onClick={handleLogout} 
        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default CenterTop;
