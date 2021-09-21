import { useState, useEffect } from "react";

// initialize the empty cache
const localAnimalCache = {};

export default function useBreedList(animal) {
    const [animalBreedList, setAnimalBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    useEffect(() => {
        if (!animal) {
            setAnimalBreedList([]);
        } else if (localAnimalCache[animal]) {
            setAnimalBreedList(localAnimalCache[animal]);
        } else {
            requestAnimalBreedList();
        }

        async function requestAnimalBreedList() {
            setAnimalBreedList([]);
            setStatus("loading");
    
            const requestUrl = `http://pets-v2.dev-apis.com/breeds?animal=${animal}`;
            const response = await fetch(requestUrl);
            // has a breeds property
            const data = await response.json();
            localAnimalCache[animal] = data.breeds || [];
    
            setAnimalBreedList(localAnimalCache[animal]);
            setStatus("loaded");
        }
    }, [animal]);

    return [animalBreedList, status];
}