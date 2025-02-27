import React, { useContext } from "react";
import Spreadsheet from "./components/Spreadsheet";
import Toolbar from "./components/Toolbar";
import FormulaBar from "./components/FormulaBar";
import ChartComponent from "./components/ChartComponent";
import { SpreadsheetContext } from "./context/SpreadsheetContext";

const App = () => {
  const { grid } = useContext(SpreadsheetContext);

  const chartData = grid.reduce((acc, row, index) => {
    acc[`Row ${index + 1}`] = row.reduce((sum, val) => sum + (parseFloat(val) || 0), 0);
    return acc;
  }, {});

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
         <div className="w-full bg-blue-600 text-white text-center py-3 shadow-md">
        <h1 className="text-2xl font-bold">Google Sheets Clone</h1>
      </div>
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-4">
        <Toolbar />
        <FormulaBar />
        <Spreadsheet />
       <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">Data Visualization</h2>
        <ChartComponent data={chartData} />
      </div>
      </div>
    </div>
  );
};

export default App;
