import React, { useState } from "react";

const useSelect = (initialState, options) => {
  const [category, updateCategory] = useState(initialState);

  const Select = () => (
    <select
      className="browser-default"
      value={category}
      onChange={(e) => updateCategory(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
  return [category, Select, updateCategory];
};

export default useSelect;
