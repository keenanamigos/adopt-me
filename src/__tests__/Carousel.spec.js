import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Carousel from "../Carousel";

describe("Carousel Component UI", () => {
    test("Users are able to click on a thumbnail and make that thumbnail the hero image", async () => {
        const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
        const carousel = render(<Carousel images={images} />);
        const heroImage = await carousel.findByTestId("heroImage");

        expect(heroImage.src).toContain(images[0]);

        for (let i = 0; i < images.length; i++) {
            const currentImage = images[i];
            const thumbnail = await carousel.findByTestId(`thumbnail${i}`);

            thumbnail.click();

            expect(heroImage.src).toContain(currentImage);
            expect(thumbnail.classList).toContain("active");
        }
    });
});
