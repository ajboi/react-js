import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results.js";
import useDropdown from "./UseDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA"); //If statements never go inside of conditionals and loops.
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });
    console.log(animals);
    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]); //cleaning up existing before updating.
    setBreed(""); //cleaning up existing before updating.

    pet.breeds(animal).then(
      ({ breeds }) => {
        const breedStrings = breeds.map(({ name }) => name);
        setBreeds(breedStrings);
      },
      (error) => console.error(`error ${error}`) // Error is also logged inside then because all network calls always resolve, if i am correct.
    );
  }, [animal, setBreed, setBreeds]);

  // pet.breeds("dog").then((result) => {
  //   const x = result.breeds.map((breed) => breed.name);
  //   console.log(x);
  // });

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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
      <Results pets={pets} />
    </div>
  );
};
export default SearchParams;
