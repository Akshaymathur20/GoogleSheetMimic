import React, { createContext, useState, useEffect } from "react";

export const SpreadsheetContext = createContext();

const SpreadsheetProvider = ({ children }) => {
  const [grid, setGrid] = useState(() => {
    const savedGrid = localStorage.getItem("spreadsheet-data");
    return savedGrid ? JSON.parse(savedGrid) : Array.from({ length: 10 }, () => Array(10).fill(""));
  });

  const [columnWidths, setColumnWidths] = useState(Array(grid[0].length).fill(100)); // Default width 100px
  const [draggedCell, setDraggedCell] = useState(null); // Store dragged cell details
  const [selectedCells, setSelectedCells] = useState([]); // Store selected cells for multi-selection

  useEffect(() => {
    localStorage.setItem("spreadsheet-data", JSON.stringify(grid));
  }, [grid]);

  // ✅ Select multiple cells properly (Clears previous selection if clicking a new cell)
  const selectCells = (row, col, reset = false) => {
    if (reset) {
      setSelectedCells([{ row, col }]); // Reset selection if clicked outside
    } else {
      setSelectedCells((prev) => [...prev, { row, col }]);
    }
  };

  // ✅ Clear selection after dragging (Fixes the issue where selection stays)
  const clearSelection = () => {
    setTimeout(() => setSelectedCells([]), 100); // Delay ensures smooth UI reset
  };

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

  const clearAllCells = () => {
    setGrid((prevGrid) => prevGrid.map((row) => row.map(() => ""))); // Reset all cells to empty
  };

  // ✅ Start dragging a cell
  const startDrag = (row, col) => {
    setDraggedCell({ row, col, value: grid[row][col] });
  };

  // ✅ Drop a cell (copy value & auto-fill)
  const dropCell = (targetRow, targetCol) => {
    if (!draggedCell) return;

    const newGrid = [...grid];

    // ✅ Auto-Fill: Detect number sequence
    if (selectedCells.length > 1) {
      const values = selectedCells.map(({ row, col }) => parseFloat(grid[row][col]) || 0);
      
      // Detect if values form a sequence (e.g., 1, 2 → 3, 4)
      if (values.every((val) => !isNaN(val))) {
        const step = values.length > 1 ? values[1] - values[0] : 1;
        for (let i = selectedCells[selectedCells.length - 1].row + 1; i <= targetRow; i++) {
          newGrid[i][targetCol] = values[values.length - 1] + step * (i - selectedCells[selectedCells.length - 1].row);
        }
      }
    } else {
      // ✅ If dragging a formula, adjust its references dynamically
      if (typeof draggedCell.value === "string" && draggedCell.value.startsWith("=")) {
        const updatedFormula = draggedCell.value.replace(/\b[A-Z]+\d+\b/g, (match) => {
          const [colLetter, rowNumber] = [match.charAt(0), Number(match.slice(1))];
          const newRow = targetRow + (rowNumber - draggedCell.row);
          return `${colLetter}${newRow}`;
        });
        newGrid[targetRow][targetCol] = updatedFormula;
      } else {
        newGrid[targetRow][targetCol] = draggedCell.value; // Copy normal value
      }
    }

    setGrid(newGrid);
    setDraggedCell(null);
    setSelectedCells([]); // Clear selection after dragging
  };

  return (
    <SpreadsheetContext.Provider value={{ 
      grid, setGrid, updateCell, 
      selectedCell, setSelectedCell, 
      selectedCells, selectCells, clearSelection, 
      cellStyles, toggleCellStyle, 
      addRow, addColumn, deleteRow, deleteColumn, 
      columnWidths, resizeColumn, 
      startDrag, dropCell,clearAllCells
    }}>
      {children}
    </SpreadsheetContext.Provider>
  );
};

export default SpreadsheetProvider;
