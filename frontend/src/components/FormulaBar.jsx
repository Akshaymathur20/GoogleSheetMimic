import React, { useState, useContext, useEffect } from "react";
import { SpreadsheetContext } from "../context/SpreadsheetContext";
import { evaluateFormula } from "../utils/parser";

const FormulaBar = () => {
  const { grid, updateCell, selectedCell } = useContext(SpreadsheetContext);
  const [formula, setFormula] = useState("");

  // Sync the formula bar with the selected cell's value
  useEffect(() => {
    if (selectedCell.row !== null && selectedCell.col !== null) {
      setFormula(grid[selectedCell.row][selectedCell.col] || "");
    }
  }, [selectedCell, grid]);

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (selectedCell.row === null || selectedCell.col === null) {
        console.log("No cell selected!");
        return; // No cell is selected
      }

      console.log("Selected Cell: ", selectedCell);
      console.log("Formula Entered: ", formula);

      // Check if input starts with "=" (formula)
      const result = formula.startsWith("=") ? evaluateFormula(formula, grid) : formula;
      
      console.log("Evaluated Result: ", result);

      // Update the selected cell with the computed result
      updateCell(selectedCell.row, selectedCell.col, result);
      
      // Clear formula bar after evaluation (optional)
      setFormula(result);
    }
  };

  return (
    <div className="w-full bg-gray-100 p-3 flex items-center justify-center">
      <span className="text-gray-500 text-sm font-medium mr-2">fx</span>
      <input
        type="text"
        className="w-full max-w-3xl p-2 border border-gray-300 rounded outline-none focus:ring focus:ring-blue-300"
        value={formula}
        onChange={(e) => setFormula(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter formula..."
      />
    </div>
  );
};

export default FormulaBar;
