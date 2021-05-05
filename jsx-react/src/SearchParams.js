import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./UseDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA"); //If statements never go inside of conditionals and loops.
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  console.log(useDropdown("Animal", "dog", ANIMALS));
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />

        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
