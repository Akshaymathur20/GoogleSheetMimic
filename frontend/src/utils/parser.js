import { SUM, AVERAGE, MAX, MIN, COUNT } from "./Functions";

export const evaluateFormula = (formula, cellValues) => {
  try {
    const cleanFormula = formula.replace(/=/g, "").trim();
    const args = cleanFormula.match(/[A-Z]+\d+/g) || [];
    const values = args.map((cell) => cellValues[cell] || 0);

    if (cleanFormula.startsWith("SUM")) return SUM(values);
    if (cleanFormula.startsWith("AVERAGE")) return AVERAGE(values);
    if (cleanFormula.startsWith("MAX")) return MAX(values);
    if (cleanFormula.startsWith("MIN")) return MIN(values);
    if (cleanFormula.startsWith("COUNT")) return COUNT(values);

    return "Invalid Formula";
  } catch {
    return "Error";
  }
};
