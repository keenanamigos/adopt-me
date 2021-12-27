import { useState, useEffect, useContext, FunctionComponent } from "react";
import { RouteComponentProps } from "react-router";
import { Animal, Pet, PetApiResponse } from "./ApiResponseTypes";
import Results from "./Results";
import ThemeContext from "./ThemeContext";
import useBreedList from "./useBreedList";

const ANIMALS: Animal[] = ['cat', 'dog', 'bird', 'reptile', 'rabbit'];

const SearchParams: FunctionComponent<RouteComponentProps> = () => {
    const [location, setLocation] = useState("Washington, DC");
    const [animal, setAnimal] = useState("" as Animal);
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([] as Pet[]);
    const [breeds] = useBreedList(animal);
    const [theme, setTheme] = useContext(ThemeContext);

    useEffect(() => {
        void requestPetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function requestPetData(): Promise<void> {
        const requestUrl = `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`;
        const response = await fetch(requestUrl);
        // contains a pets property
        const data = (await response.json()) as PetApiResponse;

        setPets(data.pets);
    }

    return (
        <div className="search-params">
            <form
                onSubmit={event => {
                    event.preventDefault();
                    void requestPetData();
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
                        onChange={event => setAnimal(event.target.value as Animal)}
                        onBlur={event => setAnimal(event.target.value as Animal)}
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