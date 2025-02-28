import React, { useContext } from "react";
import Spreadsheet from "./components/Spreadsheet";
import Toolbar from "./components/Toolbar";
import FormulaBar from "./components/FormulaBar";
import ChartComponent from "./components/ChartComponent";
import { SpreadsheetContext } from "./context/SpreadsheetContext";

const App = () => {
  const { grid } = useContext(SpreadsheetContext);

  // ✅ Compute SUM, AVERAGE, MAX, MIN, COUNT for each row
  const chartData = grid.reduce((acc, row, index) => {
    const rowValues = row.map((val) => parseFloat(val)).filter((num) => !isNaN(num)); // ✅ Exclude NaN values

    acc[`Row ${index + 1}`] = {
      SUM: rowValues.reduce((sum, val) => sum + val, 0),
      AVERAGE: rowValues.length > 0 ? rowValues.reduce((sum, val) => sum + val, 0) / rowValues.length : 0,
      MAX: rowValues.length > 0 ? Math.max(...rowValues) : 0,
      MIN: rowValues.length > 0 ? Math.min(...rowValues) : 0, // ✅ Ensure MIN handles empty rows
      COUNT: rowValues.length,
    };

    return acc;
  }, {});

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      {/* ✅ Header Section */}
      <div className="w-full bg-blue-600 text-white text-center py-3 shadow-md">
        <h1 className="text-2xl font-bold">Google Sheets Clone</h1>
      </div>

      {/* ✅ Spreadsheet Container */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-4">
        <Toolbar />
        <FormulaBar />
        <Spreadsheet />

        {/* ✅ Chart Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">Data Visualization</h2>
          <ChartComponent data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default App;
