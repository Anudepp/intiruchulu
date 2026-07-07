import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { renderWithProviders } from "../test/test-utils";


const sampleProduct = {
  id: "gongura-pickle",
  nameEnglish: "Gongura Pickle",
  nameTelugu: "గోంగూర పచ్చడి",
  image: "/menu/GonguraPacchadi.png",
  category: "pacchadi",
  basePrice: 600,
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