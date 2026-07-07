import {  it, expect } from "vitest";
import { screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { renderWithProviders } from "../test/test-utils";
import userEvent from "@testing-library/user-event";

const sampleProduct = {
  id: "gongura-pickle",
  nameEnglish: "Gongura Pickle",
  nameTelugu: "గోంగూర పచ్చడి",
  image: "/menu/GonguraPacchadi.png",
  category: "pacchadi",
  basePrice: 600,
};

const expectedPrices = {
  "100g": sampleProduct.basePrice * 0.1,
  "250g": sampleProduct.basePrice * 0.25,
  "500g": sampleProduct.basePrice * 0.5,
  "1kg": sampleProduct.basePrice,
};


it("should render product information correctly", () => {
renderWithProviders(
  <ProductCard product={sampleProduct} />
);
  expect(
    screen.getByText("గోంగూర పచ్చడి")
  ).toBeInTheDocument();

  expect(
    screen.getByText("Gongura Pickle")
  ).toBeInTheDocument();

  expect(
    screen.getByText("₹150")
  ).toBeInTheDocument();

  expect(
    screen.getByRole("button", {
      name: /add to cart/i,
    })
  ).toBeInTheDocument();
});
it("should update the selected weight when the user clicks a different weight", async () => {

  renderWithProviders(

    <ProductCard product={sampleProduct} />

  );

  const user = userEvent.setup();

  const button500 = screen.getByRole("button", {

    name: "500g",

  });

  await user.click(button500);

  expect(button500).toHaveClass("bg-orange-600");

});

it("should recalculate the displayed price when the selected weight changes", async () => {

  renderWithProviders(

    <ProductCard product={sampleProduct} />

  );

  const user = userEvent.setup();

  // Default (250g)

  expect(screen.getByText(`₹${expectedPrices["250g"]}`)).toBeInTheDocument();

  // 100g

  await user.click(

    screen.getByRole("button", {

      name: "100g",

    })

  );

  expect(screen.getByText(`₹${expectedPrices["100g"]}`)).toBeInTheDocument();

  // 500g

  await user.click(

    screen.getByRole("button", {

      name: "500g",

    })

  );

expect(
  screen.getByText(`₹${expectedPrices["500g"]}`)
).toBeInTheDocument();
  // 1kg

  await user.click(

    screen.getByRole("button", {

      name: "1kg",

    })

  );

expect(
  screen.getByText(`₹${expectedPrices["1kg"]}`)
).toBeInTheDocument();
});