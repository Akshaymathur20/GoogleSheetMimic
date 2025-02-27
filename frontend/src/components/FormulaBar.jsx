import React, { useState } from "react";

const FormulaBar = () => {
  const [formula, setFormula] = useState("");

  return (
    <div className="w-full bg-gray-100 p-3 rounded-md flex items-center">
      <span className="text-gray-500 text-sm font-medium mr-2">fx</span>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded outline-none focus:ring focus:ring-blue-300"
        value={formula}
        onChange={(e) => setFormula(e.target.value)}
        placeholder="Enter formula..."
      />
    </div>
  );
};

export default FormulaBar;
