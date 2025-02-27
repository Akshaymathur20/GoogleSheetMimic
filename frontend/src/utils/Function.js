export const SUM = (values) => values.reduce((acc, val) => acc + parseFloat(val || 0), 0);
export const AVERAGE = (values) => (values.length ? SUM(values) / values.length : 0);
export const MAX = (values) => Math.max(...values.map((val) => parseFloat(val || 0)));
export const MIN = (values) => Math.min(...values.map((val) => parseFloat(val || 0)));
export const COUNT = (values) => values.filter((val) => !isNaN(val) && val !== "").length;

// Text Functions
export const TRIM = (value) => value.trim();
export const UPPER = (value) => value.toUpperCase();
export const LOWER = (value) => value.toLowerCase();
export const FIND_AND_REPLACE = (values, find, replace) => values.map((val) => val.replace(new RegExp(find, "g"), replace));
