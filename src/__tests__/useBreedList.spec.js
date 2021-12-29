import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import useBreedList from "../useBreedList";

function getBreedList(animal) {
    let list;

    function TestComponent() {
        list = useBreedList(animal);
        return null;
    }

    render(<TestComponent />);

    return list;
}

describe("useBreedList", () => {
    test("gives an empty array with no animal", async () => {
        const [breedList, status] = getBreedList();

        expect(breedList.length).toEqual(0);
        expect(status).toEqual("unloaded");
    });
});