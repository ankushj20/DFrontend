import React from "react";
import { Link } from "react-router-dom";

// NavItem takes closeSidebar and calls it on link click
const NavItem = ({ to, icon, text, closeSidebar }) => (
  <div
    className="w-full h-16 border-t border-gray-300 transition-all hover:bg-sky-100 px-8 flex items-center justify-between"
    onClick={closeSidebar}
  >
    <h3 className="text-xl font-semibold cursor-pointer flex items-center gap-2">
      <Link to={to} className="flex items-center gap-2 w-full h-full">
        <i className={`text-2xl ${icon}`}></i> {text}
      </Link>
    </h3>
    <i className="text-2xl ri-arrow-right-s-line"></i>
  </div>
);

const SideNavBottom = ({ closeSidebar }) => {
  return (
    <div className="w-full pt-5">
      <NavItem to="/dashboard/" icon="ri-home-line" text="Home" closeSidebar={closeSidebar} />
      <NavItem to="/dashboard/upload-advertise" icon="ri-advertisement-line" text="Upload Advertise" closeSidebar={closeSidebar} />
      <NavItem to="/dashboard/category" icon="ri-menu-search-line" text="Category" closeSidebar={closeSidebar} />
      <NavItem to="/dashboard/upload-post" icon="ri-upload-2-line" text="Upload Post" closeSidebar={closeSidebar} />
      <NavItem to="/dashboard/manage-post"  icon="ri-stack-line" text="Manage Post" closeSidebar={closeSidebar} />
    </div>
  );
};

export default SideNavBottom;
