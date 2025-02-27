import React, { useContext } from "react";
import { SpreadsheetContext } from "../context/SpreadsheetContext";
import Cell from "./Cell";

const Spreadsheet = () => {
  const { grid } = useContext(SpreadsheetContext);

  return (
    <div className="h-full w-full flex-grow overflow-auto border border-gray-300 rounded-lg shadow-sm bg-white">
      <table className="w-full h-full border-collapse">
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100 h-16">
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
