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

    test("displays a non-default thumbnail image when one is given", async () => {
        const pet = render(
            <StaticRouter>
                <Pet images={["1.jpg", "2.jpg", "3.jpg"]} />
            </StaticRouter>
        );
        const thumbnailImage = await pet.findByTestId("thumbnail");
        // It grabs the first item in the array of images
        expect(thumbnailImage.src).toContain("1.jpg");
    });
});
