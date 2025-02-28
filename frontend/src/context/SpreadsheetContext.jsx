import React, { createContext, useState, useEffect } from "react";

export const SpreadsheetContext = createContext();

const SpreadsheetProvider = ({ children }) => {
  const [grid, setGrid] = useState(() => {
    const savedGrid = localStorage.getItem("spreadsheet-data");
    return savedGrid ? JSON.parse(savedGrid) : Array.from({ length: 10 }, () => Array(10).fill(""));
  });

  // Store formatting (bold, italic, underline,fontSize, Color) for each cell
  const [cellStyles, setCellStyles] = useState({});

  const [selectedCell, setSelectedCell] = useState({ row: null, col: null });

  useEffect(() => {
    localStorage.setItem("spreadsheet-data", JSON.stringify(grid));
  }, [grid]);

  const updateCell = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  // Toggle formatting (bold, italic, underline)
  const toggleCellStyle = (style,value=null) => {
    if (selectedCell.row === null || selectedCell.col === null) return;

    const cellKey = `${selectedCell.row}-${selectedCell.col}`;
    setCellStyles((prevStyles) => ({
      ...prevStyles,
      [cellKey]: {
        ...prevStyles[cellKey],
        [style]: value!=null ? value: !prevStyles[cellKey]?.[style], // Toggle true/false
      },
    }));
  };

  return (
    <SpreadsheetContext.Provider value={{ 
      grid, setGrid, updateCell, 
      selectedCell, setSelectedCell, 
      cellStyles, toggleCellStyle 
    }}>
      {children}
    </SpreadsheetContext.Provider>
  );
};

export default SpreadsheetProvider;
