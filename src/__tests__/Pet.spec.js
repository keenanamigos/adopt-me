import { describe, expect, test } from "@jest/globals";
import { StaticRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Pet from "../Pet";

describe("Pet Component UI", () => {
    test("displays a default thumbnail image", async () => {
        const pet = render(
            <StaticRouter>
                <Pet />
            </StaticRouter>
        );
        const thumbnailImage = await pet.findByTestId("thumbnail");

        expect(thumbnailImage.src).toContain("none.jpg");
    });
});
