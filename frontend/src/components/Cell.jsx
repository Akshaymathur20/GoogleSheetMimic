import React, { useContext } from "react";
import { SpreadsheetContext } from "../context/SpreadsheetContext";

const Cell = ({ row, col }) => {
  const { grid, updateCell, setSelectedCell, cellStyles } = useContext(SpreadsheetContext);

  const cellKey = `${row}-${col}`;
  const styles = cellStyles[cellKey] || {}; // Get styles for the current cell

  return (
    <td 
      className="border border-gray-300 w-32 h-12 text-center cursor-pointer" 
      onClick={() => setSelectedCell({ row, col })}
    >
      <input
        type="text"
        className="w-full h-full text-center border-none outline-none bg-transparent focus:bg-gray-200"
        style={{
          fontWeight: styles.bold ? "bold" : "normal",
          fontStyle: styles.italic ? "italic" : "normal",
          textDecoration: styles.underline ? "underline" : "none",
          fontSize: styles.fontSize || "14px",
          color: styles.color ? styles.color : "black",
        }}
        value={grid[row][col]}
        onChange={(e) => updateCell(row, col, e.target.value)}
      />
    </td>
  );
};

export default Cell;
