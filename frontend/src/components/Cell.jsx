import React, { useContext } from "react";
import { SpreadsheetContext } from "../context/SpreadsheetContext";

const Cell = ({ row, col }) => {
  const { grid, updateCell } = useContext(SpreadsheetContext);

  return (
    <td className="border border-gray-300 w-20 h-10 text-center">
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
