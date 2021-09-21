import { useState, useEffect } from "react";
import Pet from "./pet";

const ANIMALS = ['cat', 'dog', 'bird', 'reptile', 'rabbit'];
const BREEDS = [];

const SearchParams = () => {
    const [location, setLocation] = useState("Washington, DC");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pet, setPets] = useState([]);

    useEffect(() => {
        requestPetData()
    });

    async function requestPetData() {
        const requestUrl = `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`;
        const response = await fetch(requestUrl);
        // contains a pets property
        const data = await response.json();

        console.log(data);

        setPets(data.pets);
    }

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