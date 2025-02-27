import React, { useContext } from "react";
import { FaBold, FaItalic, FaUnderline, FaPlus, FaMinus } from "react-icons/fa";
import { SpreadsheetContext } from "../context/SpreadsheetContext";
 
const Toolbar = () => {
  const { toggleCellStyle, addRow, addColumn, deleteRow, deleteColumn, grid,clearAllCells } = useContext(SpreadsheetContext);

  return (
    <div className="w-full bg-gray-200 shadow-md py-3 flex justify-center">
      <div className="flex flex-wrap justify-center space-x-4 bg-gradient-to-r from-blue-500 to-blue-700 p-2 rounded-lg shadow-md">
        
        {/* Bold Button */}
        <button 
          onClick={() => toggleCellStyle("bold")} 
          className="px-4 py-2 text-white rounded-lg flex items-center hover:bg-blue-800 transition-all"
        >
          <FaBold className="mr-2" /> <span className="hidden sm:inline">Bold</span>
        </button>

        {/* Italic Button */}
        <button 
          onClick={() => toggleCellStyle("italic")} 
          className="px-4 py-2 text-white rounded-lg flex items-center hover:bg-blue-800 transition-all"
        >
          <FaItalic className="mr-2" /> <span className="hidden sm:inline">Italic</span>
        </button>

        {/* Underline Button */}
        <button 
          onClick={() => toggleCellStyle("underline")} 
          className="px-4 py-2 text-white rounded-lg flex items-center hover:bg-blue-800 transition-all"
        >
          <FaUnderline className="mr-2" /> <span className="hidden sm:inline">Underline</span>
        </button>

        {/* Font Size Selector */}
        <select 
          onChange={(e) => toggleCellStyle("fontSize", e.target.value)} 
          className="px-3 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all"
        >
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
        </select>
        {/* Add Row */}
        <button 
          onClick={addRow} 
          className="px-4 py-2 text-white rounded-lg flex items-center hover:bg-blue-800 transition-all"
        >
          <FaPlus className="mr-2" /> Add Row
        </button>

        {/* Add Column */}
        <button 
          onClick={addColumn} 
          className="px-4 py-2 text-white rounded-lg flex items-center hover:bg-blue-800 transition-all"
        >
          <FaPlus className="mr-2" /> Add Column
        </button>

        {/* Delete Row (Removes Last Row) */}
        <button 
          onClick={() => deleteRow(grid.length - 1)} 
          className="px-4 py-2 text-white rounded-lg flex items-center hover:bg-blue-800 transition-all"
        >
          <FaMinus className="mr-2" /> Delete Row
        </button>

        {/* Delete Column (Removes Last Column) */}
        <button 
          onClick={() => deleteColumn(grid[0].length - 1)} 
          className="px-4 py-2 text-white rounded-lg flex items-center hover:bg-blue-800 transition-all"
        >
          <FaMinus className="mr-2" /> Delete Column
        </button>

      {/* ✅ Clear All Data Button */}
      <button 
        onClick={clearAllCells} 
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
      >
        Clear All Data
      </button>
          {/* Font Color Picker */}
          <input 
          type="color" 
          onChange={(e) => toggleCellStyle("color", e.target.value)} 
          className="w-10 h-10 rounded-lg border-none cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Toolbar;
