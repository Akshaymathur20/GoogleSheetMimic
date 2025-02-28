import React, { createContext, useState, useEffect } from "react";

export const SpreadsheetContext = createContext();

const SpreadsheetProvider = ({ children }) => {
  const [grid, setGrid] = useState(() => {
    const savedGrid = localStorage.getItem("spreadsheet-data");
    return savedGrid ? JSON.parse(savedGrid) : Array.from({ length: 10 }, () => Array(10).fill(""));
  });

  const [columnWidths, setColumnWidths] = useState(Array(grid[0].length).fill(100)); // Default width 100px

  useEffect(() => {
    localStorage.setItem("spreadsheet-data", JSON.stringify(grid));
  }, [grid]);

  // ✅ Preserve existing function
  const updateCell = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  // ✅ Preserve cell formatting
  const [cellStyles, setCellStyles] = useState({});
  const [selectedCell, setSelectedCell] = useState({ row: null, col: null });

  const toggleCellStyle = (style, value = null) => {
    if (selectedCell.row === null || selectedCell.col === null) return;

    const cellKey = `${selectedCell.row}-${selectedCell.col}`;
    setCellStyles((prevStyles) => ({
      ...prevStyles,
      [cellKey]: {
        ...prevStyles[cellKey],
        [style]: value !== null ? value : !prevStyles[cellKey]?.[style],
      },
    }));
  };

  // ✅ Add a new row
  const addRow = () => {
    setGrid((prevGrid) => [...prevGrid, Array(prevGrid[0].length).fill("")]);
  };

  // ✅ Add a new column
  const addColumn = () => {
    setGrid((prevGrid) => prevGrid.map((row) => [...row, ""]));
    setColumnWidths((prevWidths) => [...prevWidths, 100]);
  };

  // ✅ Delete a row
  const deleteRow = (rowIndex) => {
    if (grid.length > 1) {
      setGrid((prevGrid) => prevGrid.filter((_, i) => i !== rowIndex));
    }
  };

  // ✅ Delete a column
  const deleteColumn = (colIndex) => {
    if (grid[0].length > 1) {
      setGrid((prevGrid) => prevGrid.map((row) => row.filter((_, i) => i !== colIndex)));
      setColumnWidths((prevWidths) => prevWidths.filter((_, i) => i !== colIndex));
    }
  };

  // ✅ Resize a column
  const resizeColumn = (colIndex, newWidth) => {
    setColumnWidths((prevWidths) => prevWidths.map((width, i) => (i === colIndex ? newWidth : width)));
  };

  return (
    <SpreadsheetContext.Provider value={{ 
      grid, setGrid, updateCell, 
      selectedCell, setSelectedCell, 
      cellStyles, toggleCellStyle, 
      addRow, addColumn, deleteRow, deleteColumn, 
      columnWidths, resizeColumn 
    }}>
      {children}
    </SpreadsheetContext.Provider>
  );
};

export default SpreadsheetProvider;
