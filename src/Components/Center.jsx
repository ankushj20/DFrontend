import React from "react";
import CenterTop from "./CenterTop";

import CenterBottom from "./CenterBottom";

const Center = ({ onToggleSidebar }) => {
  return (
    <div className="w-full md:w-auto h-full bg-blue-500">
      <CenterTop onToggleSidebar={onToggleSidebar} />
      <CenterBottom />
    </div>
  );
};

export default Center;
