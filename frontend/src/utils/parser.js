import { SUM, AVERAGE, MAX, MIN, COUNT, TRIM, UPPER, LOWER, FIND_AND_REPLACE } from "./Function";

export const evaluateFormula = (formula, cellValues) => {
  try {
    const cleanFormula = formula.replace(/=/g, "").trim();
    
    // Extract arguments inside parentheses
    const match = cleanFormula.match(/([A-Z]+[0-9]+:[A-Z]+[0-9]+|[A-Z]+[0-9]+)(?:, ?\"(.+?)\", ?\"(.+?)\")?/);
    if (!match) return "Invalid Formula";

    const [_, range, find, replace] = match;
    const values = getCellValues(range, cellValues);

    if (cleanFormula.startsWith("SUM")) return SUM(values);
    if (cleanFormula.startsWith("AVERAGE")) return AVERAGE(values);
    if (cleanFormula.startsWith("MAX")) return MAX(values);
    if (cleanFormula.startsWith("MIN")) return MIN(values);
    if (cleanFormula.startsWith("COUNT")) return COUNT(values);
    if (cleanFormula.startsWith("TRIM")) return `"${TRIM(values[0])}"`;
    if (cleanFormula.startsWith("UPPER")) return `"${UPPER(values[0])}"`;
    if (cleanFormula.startsWith("LOWER")) return `"${LOWER(values[0])}"`;
    if (cleanFormula.startsWith("FIND_AND_REPLACE") && find && replace) return `"${FIND_AND_REPLACE(values, find, replace)}"`;

    return "Invalid Formula";
  } catch {
    return "Error";
  }
};
