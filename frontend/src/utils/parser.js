import { SUM, AVERAGE, MAX, MIN, COUNT, TRIM, UPPER, LOWER, FIND_AND_REPLACE } from "./Function";

export const evaluateFormula = (formula, grid) => {
  try {
    const cleanFormula = formula.replace(/=/g, "").trim();

    
    const match = cleanFormula.match(/([A-Z]+[0-9]+:[A-Z]+[0-9]+|[A-Z]+[0-9]+)(?:, ?\"(.+?)\", ?\"(.+?)\")?/);
    
    if (!match) return "Invalid Formula";  

    const [_, range, find, replace] = match;
    const values = getCellValues(range, grid);

    // Math Functions
    if (cleanFormula.startsWith("SUM")) return SUM(values);
    if (cleanFormula.startsWith("AVERAGE")) return AVERAGE(values);
    if (cleanFormula.startsWith("MAX")) return MAX(values);
    if (cleanFormula.startsWith("MIN")) return MIN(values);
    if (cleanFormula.startsWith("COUNT")) return COUNT(values);

    // String Functions (NOW FIXED)
    if (cleanFormula.startsWith("TRIM")) return TRIM(values[0] || ""); 
    if (cleanFormula.startsWith("UPPER")) return UPPER(values[0] || ""); 
    if (cleanFormula.startsWith("LOWER")) return LOWER(values[0] || ""); 
    if (cleanFormula.startsWith("FIND_AND_REPLACE") && find && replace) 
      return FIND_AND_REPLACE(values[0], find, replace);

    return "Invalid Formula"; // If none of the above match
  } catch (error) {
    console.error("Formula Evaluation Error:", error);
    return "Error";
  }
};

// Fetches cell values from grid
const getCellValues = (range, grid) => {
  const [start, end] = range.split(":");
  const startRow = parseInt(start.match(/\d+/)[0], 10) - 1;
  const endRow = end ? parseInt(end.match(/\d+/)[0], 10) - 1 : startRow;
  const startCol = start.charCodeAt(0) - 65;
  const endCol = end ? end.charCodeAt(0) - 65 : startCol;

  const values = [];
  for (let row = startRow; row <= endRow; row++) {
    for (let col = startCol; col <= endCol; col++) {
      values.push(grid[row]?.[col] || "");  // Ensure empty cells return ""
    }
  }

  return values;
};
