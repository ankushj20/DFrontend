import React from 'react';
import 'remixicon/fonts/remixicon.css';
import SideNavTop from './SideNavTop';
import SideNavBottom from './SideNavBottom';

const SideNav = ({ closeSidebar }) => {
  return (
    <div className="sideNav h-full  w-full md:w-[25vw] border-b md:border-b-0 md:border-r-4 border-gray-300">
      <SideNavTop />
      <SideNavBottom closeSidebar={closeSidebar} />
    </div>
  );
};

export default SideNav;
