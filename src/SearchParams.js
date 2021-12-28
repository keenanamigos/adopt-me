import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Results from "./Results";
import useBreedList from "./useBreedList";

const ANIMALS = ['cat', 'dog', 'bird', 'reptile', 'rabbit'];

const SearchParams = () => {
    const animal = useSelector(state => state.animal);
    const location = useSelector(state => state.location);
    const breed = useSelector(state => state.breed);
    const theme = useSelector(state => state.theme);
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
                <label htmlFor="theme">
                    Theme
                    <select
                        id="theme"
                        value={theme}
                        onChange={ event => setTheme(event.target.value) }
                        onBlur={ event => setTheme(event.target.value) }
                    >
                        <option value="pink">Pink</option>
                        <option value="orange">Orange</option>
                        <option value="turquoise">Turquoise</option>
                        <option value="red">Red</option>
                    </select>
                </label>
                <button style={{ backgroundColor: theme }}>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )
};

export default SearchParams;