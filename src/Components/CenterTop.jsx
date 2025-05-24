// import React from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import BASE_URL from "./utils/config";

// const CenterTop = ({ setIsAuthenticated }) => {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await axios.post(`${BASE_URL}/api/auth/logout`, {}, { withCredentials: true });

//       localStorage.clear();
//       sessionStorage.clear();

//       window.location.href = "/";
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   return (
//     <div className="w-full bg-cyan-200 flex flex-col md:flex-row items-center justify-between px-4 py-4 md:h-[20vh] gap-4 md:gap-0">
//       <h3 className="text-3xl md:text-4xl font-semibold text-center md:text-left w-full md:w-auto">
//         Dashboard
//       </h3>

//       <div className="slider w-full md:w-[40vw] h-[5vh] flex items-center justify-center relative bg-red-500 overflow-hidden rounded">
//         <h3 className="ticker text-sm sm:text-lg md:text-xl text-white whitespace-nowrap animate-marquee px-2">
//           Today Trending News: जनहित मिशन डॉट कॉम समाचार विचार पोर्टल
//         </h3>
//       </div>

//       <button
//         onClick={handleLogout}
//         className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 w-full md:w-auto"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default CenterTop;



import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "./utils/config";

const CenterTop = ({ onToggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(`${BASE_URL}/api/auth/logout`, {}, { withCredentials: true });
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="w-full bg-cyan-200 flex flex-col md:flex-row items-center justify-between px-4 py-4 md:h-[20vh] gap-4 md:gap-0">
      
      <h3 className="text-3xl md:text-4xl font-semibold text-center md:text-left w-full md:w-auto">
        Dashboard
      </h3>

      <div className="slider w-full md:w-[40vw] h-[5vh] flex items-center justify-center relative bg-red-500 overflow-hidden rounded">
        <h3 className="ticker text-sm sm:text-lg md:text-xl text-white whitespace-nowrap animate-marquee px-2">
          Today Trending News: जनहित मिशन डॉट कॉम समाचार विचार पोर्टल
        </h3>
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
        {/* Mobile menu icon: visible only on small screens */}
        <button
          onClick={onToggleSidebar}
          className="block md:hidden text-3xl p-2 rounded hover:bg-red-600 transition-colors"
          aria-label="Toggle sidebar menu"
        >
          <i className="ri-menu-line"></i> {/* Remix Icon hamburger */}
        </button>

        {/* Logout button: visible on all screens */}
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 w-fit md:w-auto"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default CenterTop;
