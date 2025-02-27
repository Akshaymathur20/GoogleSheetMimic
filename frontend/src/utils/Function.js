export const SUM = (values) => values.reduce((acc, val) => acc + parseFloat(val || 0), 0);
export const AVERAGE = (values) => (values.length ? SUM(values) / values.length : 0);
export const MAX = (values) => Math.max(...values.map((val) => parseFloat(val || 0)));
export const MIN = (values) => Math.min(...values.map((val) => parseFloat(val || 0)));
export const COUNT = (values) => values.filter((val) => val !== "").length;

// String Functions
export const TRIM = (value) => (typeof value === "string" ? value.trim() : value);
export const UPPER = (value) => (typeof value === "string" ? value.toUpperCase() : value);
export const LOWER = (value) => (typeof value === "string" ? value.toLowerCase() : value);
export const FIND_AND_REPLACE = (value, find, replace) => (typeof value === "string" ? value.replace(new RegExp(find, "g"), replace) : value);
