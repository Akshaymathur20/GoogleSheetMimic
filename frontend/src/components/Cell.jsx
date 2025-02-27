import React, { useContext } from "react";
import { SpreadsheetContext } from "../context/SpreadsheetContext";

const Cell = ({ row, col }) => {
  const { grid, updateCell, setSelectedCell } = useContext(SpreadsheetContext);

  return (
    <td 
      className="border border-gray-300 w-32 h-12 text-center cursor-pointer" 
      onClick={() => {
        console.log(`Cell Selected: Row ${row}, Col ${col}`);
        setSelectedCell({ row, col });
      }}
    >
      <input
        type="text"
        className="w-full h-full text-center border-none outline-none bg-transparent focus:bg-gray-200"
        value={grid[row][col]}
        onChange={(e) => updateCell(row, col, e.target.value)}
      />
    </td>
  );
};

export default Cell;
