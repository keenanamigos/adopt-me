import { useState, useEffect } from "react";
import { Animal, BreedListApiResponse } from "./ApiResponseTypes";

// initialize the empty cache
const localAnimalCache: {
    [index: string]: string[]
} = {};

type Status = "loading" | "loaded" | "unloaded";

export default function useBreedList(animal: Animal): [string[], Status] {
    const [animalBreedList, setAnimalBreedList] = useState([] as string[]);
    const [status, setStatus] = useState("unloaded" as Status);

    useEffect(() => {
        if (!animal) {
            setAnimalBreedList([]);
        } else if (localAnimalCache[animal]) {
            setAnimalBreedList(localAnimalCache[animal]);
        } else {
            void requestAnimalBreedList();
        }

        async function requestAnimalBreedList(): Promise<void> {
            setAnimalBreedList([]);
            setStatus("loading");
    
            const requestUrl = `http://pets-v2.dev-apis.com/breeds?animal=${animal}`;
            const response = await fetch(requestUrl);
            // has a breeds property
            const data = (await response.json()) as BreedListApiResponse;
            localAnimalCache[animal] = data.breeds || [];
    
            setAnimalBreedList(localAnimalCache[animal]);
            setStatus("loaded");
        }
    }, [animal]);

    return [animalBreedList, status];
}