import React, { useContext } from "react";
import { SpreadsheetContext } from "../context/SpreadsheetContext";
import Cell from "./Cell";

const Spreadsheet = () => {
  const { grid } = useContext(SpreadsheetContext);

  return (
    <div className="overflow-auto rounded-lg border border-gray-300 shadow-sm mt-4">
      <table className="w-full border-collapse">
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
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
