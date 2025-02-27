export const validateCell = (value, type) => {
    if (type === "number" && isNaN(value)) {
        // Allow string formulas like "=UPPER(A1)"
        if (typeof value === "string" && value.startsWith("=")) {
            return true;
        }
        return false;
    }
    return true;
};
