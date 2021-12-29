import { describe, expect, test } from "@jest/globals";
import { renderHook } from "@testing-library/react-hooks";
import useBreedList from "../useBreedList";

describe("useBreedList", () => {
    test("gives an empty array with no animal", async () => {
        const { result } = renderHook(() => useBreedList());
        const [breedList, status] = result.current;

        expect(breedList.length).toEqual(0);
        expect(status).toEqual("unloaded");
    });
});