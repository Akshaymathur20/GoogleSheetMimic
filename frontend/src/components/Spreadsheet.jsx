import React, { useContext } from "react";
import { SpreadsheetContext } from "../context/SpreadsheetContext";
import Cell from "./Cell";

const Spreadsheet = () => {
  const { grid, columnWidths, resizeColumn } = useContext(SpreadsheetContext);

  const handleResize = (colIndex, event) => {
    const startX = event.clientX;
    const startWidth = columnWidths[colIndex];

    const onMouseMove = (e) => {
      const newWidth = startWidth + (e.clientX - startX);
      resizeColumn(colIndex, newWidth);
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div className="h-full w-full overflow-auto border border-gray-300 rounded-lg shadow-sm bg-white">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {grid[0].map((_, colIndex) => (
              <th key={colIndex} style={{ width: columnWidths[colIndex] + "px" }}>
                <div className="relative flex justify-between items-center">
                  <span>Col {colIndex + 1}</span>
                  <div className="w-2 h-full cursor-ew-resize bg-gray-400" onMouseDown={(e) => handleResize(colIndex, e)} />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((_, colIndex) => (
                <Cell key={colIndex} row={rowIndex} col={colIndex} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;
