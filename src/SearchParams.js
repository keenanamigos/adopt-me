import { useState } from "react";

const ANIMALS = ['cat', 'dog', 'bird', 'reptile', 'rabbit'];
const BREEDS = [];

const SearchParams = () => {
    const [location, setLocation] = useState("Washington, DC");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" onChange={event => setLocation(event.target.value)} value={location} placeholder="Location" />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={event => setAnimal(event.target.value)}
                        onBlur={event => setAnimal(event.target.value)}
                    >
                        <option />
                        {
                            ANIMALS.map(animal => (
                                <option value={animal} key={animal}>
                                    {animal}
                                </option>
                            ))
                        }
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={event => setBreed(event.target.value)}
                        onBlur={event => setBreed(event.target.value)}
                    >
                        <option />
                        {
                            BREEDS.map(breed => (
                                <option value={breed} key={breed}>
                                    {breed}
                                </option>
                            ))
                        }
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default SearchParams;