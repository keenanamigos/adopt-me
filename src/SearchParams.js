import { useState, useEffect } from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";

const ANIMALS = ['cat', 'dog', 'bird', 'reptile', 'rabbit'];

const SearchParams = () => {
    const [location, setLocation] = useState("Washington, DC");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);

    useEffect(() => {
        requestPetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function requestPetData() {
        const requestUrl = `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`;
        const response = await fetch(requestUrl);
        // contains a pets property
        const data = await response.json();

        setPets(data.pets);
    }

    return (
        <div className="search-params">
            <form
                onSubmit={event => {
                    event.preventDefault();
                    requestPetData();
                }}
            >
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
                            breeds.map(breed => (
                                <option value={breed} key={breed}>
                                    {breed}
                                </option>
                            ))
                        }
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )
};

export default SearchParams;