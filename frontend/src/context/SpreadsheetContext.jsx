import React, { createContext, useState, useEffect } from "react";

export const SpreadsheetContext = createContext();

const SpreadsheetProvider = ({ children }) => {
  const [grid, setGrid] = useState(() => {
    const savedGrid = localStorage.getItem("spreadsheet-data");
    return savedGrid ? JSON.parse(savedGrid) : Array.from({ length: 10 }, () => Array(10).fill(""));
  });

  useEffect(() => {
    localStorage.setItem("spreadsheet-data", JSON.stringify(grid));
  }, [grid]);

  const updateCell = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  return (
    <SpreadsheetContext.Provider value={{ grid, setGrid, updateCell }}>
      {children}
    </SpreadsheetContext.Provider>
  );
};

export default SpreadsheetProvider;
