import React from "react";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";

const Toolbar = () => {
  return (
    <div className="w-full bg-gray-200 shadow-md py-3 flex justify-center">
      <div className="flex flex-wrap justify-center space-x-4 bg-gradient-to-r from-blue-500 to-blue-700 p-2 rounded-lg shadow-md">
        <button className="px-4 py-2 text-white rounded-lg flex items-center hover:bg-blue-800 transition-all">
          <FaBold className="mr-2" /> <span className="hidden sm:inline">Bold</span>
        </button>
        <button className="px-4 py-2 text-white rounded-lg flex items-center hover:bg-blue-800 transition-all">
          <FaItalic className="mr-2" /> <span className="hidden sm:inline">Italic</span>
        </button>
        <button className="px-4 py-2 text-white rounded-lg flex items-center hover:bg-blue-800 transition-all">
          <FaUnderline className="mr-2" /> <span className="hidden sm:inline">Underline</span>
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
