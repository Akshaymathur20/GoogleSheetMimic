export const validateCell = (value, type) => {
    if (type === "number" && isNaN(value)) return false;
    return true;
  };
  