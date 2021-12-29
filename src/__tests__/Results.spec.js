import { describe, expect, test } from "@jest/globals";
import { create } from "react-test-renderer";
import Results from "../Results";

describe ("Results Component UI", () => {
    test("renders snapshot with no pets", () => {
        const tree = create(<Results pets={[]} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});