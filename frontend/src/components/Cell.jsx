import React, { useContext } from "react";
import { SpreadsheetContext } from "../context/SpreadsheetContext";
import { validateCell } from "../utils/DataValidation";

const Cell = ({ row, col }) => {
  const { grid, updateCell } = useContext(SpreadsheetContext);

  const handleChange = (e) => {
    const value = e.target.value;
    if (!validateCell(value, "number")) return;
    updateCell(row, col, value);
  };

  return (
    <td className="border border-gray-300 w-20 h-10 text-center">
      <input
        type="text"
        className="w-full h-full text-center border-none outline-none bg-transparent"
        value={grid[row][col]}
        onChange={handleChange}
      />
    </td>
  );
};

export default Cell;
