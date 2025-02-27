import React from "react";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";

const Toolbar = () => {
  return (
    <div className="flex space-x-2 bg-gray-200 p-3 rounded-md shadow-md mb-2">
      <button className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center">
        <FaBold className="mr-1" /> B
      </button>
      <button className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center">
        <FaItalic className="mr-1" /> I
      </button>
      <button className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center">
        <FaUnderline className="mr-1" /> U
      </button>
    </div>
  );
};

export default Toolbar;
