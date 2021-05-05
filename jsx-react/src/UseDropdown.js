// Creating my first React Hook.
import React, { useState } from "react";
const useDropdown = (label, defaultState, array) => {
  const [state, setState] = useState(defaultState);

  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const Dropdown = () => {
    return (
      <label htmlFor={id}>
        {label}
        <select
          value={state}
          id={id}
          onChange={(e) => setState(e.target.value)}
          onBlur={(e) => setState(e.target.value)}
          disabled={array.length === 0}
        >
          <option>All</option>
          {array.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    );
  };

  return [state, Dropdown, setState];
};

export default useDropdown;
