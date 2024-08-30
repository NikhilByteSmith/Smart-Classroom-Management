import React from 'react';
import { useLocation } from 'react-router-dom';
import {FaSearch} from "react-icons/fa"

const Topbar = () => {
  const location = useLocation();
  
  // Extract the page name from the current route
  const pageName = location.pathname.split('/').pop() || 'Home';
  const capitalizedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  
  return (
    <div className="bg-white shadow-md p-4 flex items-center justify-between w-full h-14">
      <div className="text-3xl font-bold text-blue-900">{capitalizedPageName}</div>
      <div className="flex flex-1 justify-end ml-4">
        <div className="relative w-64">
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 w-full p-2 border border-gray-300 rounded-2xl"
          />
          <FaSearch 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" 
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
