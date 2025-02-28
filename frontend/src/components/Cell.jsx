import React, { useContext, useState } from "react";
import { SpreadsheetContext } from "../context/SpreadsheetContext";

const Cell = ({ row, col }) => {
  const { grid, updateCell, setSelectedCell, cellStyles, selectCells, selectedCells, clearSelection, startDrag, dropCell } = useContext(SpreadsheetContext);

  const cellKey = `${row}-${col}`;
  const styles = cellStyles[cellKey] || {}; // Get styles for the current cell
  const isSelected = selectedCells.some((cell) => cell.row === row && cell.col === col);

  const [isDragging, setIsDragging] = useState(false);
  const [startRow, setStartRow] = useState(null);
  const [startCol, setStartCol] = useState(null);

  return (
    <td 
      className={`border border-gray-300 w-32 h-12 text-center cursor-pointer relative 
        ${isSelected ? "bg-blue-200" : "bg-white"}`}
      onMouseDown={(e) => {
        setIsDragging(true);
        setStartRow(row);
        setStartCol(col);
        selectCells(row, col, row, col);
      }}
      onMouseEnter={(e) => {
        if (isDragging) {
          selectCells(startRow, startCol, row, col);
        }
      }}
      onMouseUp={() => {
        setIsDragging(false);
        clearSelection();
      }}
      onClick={() => setSelectedCell({ row, col })}
      draggable="true"
      onDragStart={() => startDrag(row, col)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => dropCell(row, col)}
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
