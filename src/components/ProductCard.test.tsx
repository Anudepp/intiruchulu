import {  it, expect } from "vitest";
import { screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { renderWithProviders } from "../test/test-utils";
import userEvent from "@testing-library/user-event";
import type { Product } from "../types/product";

const sampleProduct: Product = {
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

const preloadedState = {
  cart: {
    items: [
      {
        id: sampleProduct.id,
        name: sampleProduct.nameEnglish,
        image: sampleProduct.image,
        price: 150,
        quantity: 2,
        weight: "250g",
      },
    ],
  },
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

expect(button500).toHaveAttribute(

  "aria-pressed",

  "true"

);
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

it("should add the selected product to the cart when Add to Cart is clicked", async () => {
  const { store } = renderWithProviders(
    <ProductCard product={sampleProduct} />,

  {

    preloadedState,

  }
  );

  const user = userEvent.setup();

  await user.click(
    screen.getByRole("button", {
      name: /add to cart/i,
    })
  );

  const cartItems = store.getState().cart.items;

  expect(cartItems).toHaveLength(1);

  expect(cartItems[0]).toMatchObject({
    id: sampleProduct.id,
    name: sampleProduct.nameEnglish,
    weight: "250g",
    quantity: 3,
    price: 150,
  });
});

it("should increase quantity when + button is clicked", async () => {
  renderWithProviders(
    <ProductCard product={sampleProduct} />
  );

  const user = userEvent.setup();

  const plusButton = screen.getByRole("button", {
    name: /increase quantity/i,
  });

  expect(screen.getByText("1")).toBeInTheDocument();

  await user.click(plusButton);

  expect(screen.getByText("2")).toBeInTheDocument();
});


it("should decrease quantity when - button is clicked", async () => {
  renderWithProviders(
    <ProductCard product={sampleProduct} />
  );

  const user = userEvent.setup();

  const plusButton = screen.getByRole("button", {
    name: /increase quantity/i,
  });

  const minusButton = screen.getByRole("button", {
    name: /decrease quantity/i,
  });

  // Increase first (1 -> 2)
  await user.click(plusButton);

  expect(screen.getByText("2")).toBeInTheDocument();

  // Decrease back (2 -> 1)
  await user.click(minusButton);

  expect(screen.getByText("1")).toBeInTheDocument();
});


it("should reset quantity after adding product to cart", async () => {
  renderWithProviders(
    <ProductCard product={sampleProduct} />
  );

  const user = userEvent.setup();

  const plusButton = screen.getByRole("button", {
    name: /increase quantity/i,
  });

  await user.click(plusButton);

  expect(
    screen.getByTestId("quantity-display")
  ).toHaveTextContent("2");

  await user.click(
    screen.getByRole("button", {
      name: /add to cart/i,
    })
  );

  expect(
    screen.getByTestId("quantity-display")
  ).toHaveTextContent("1");
});

it("should reset selected weight to 250g after adding to cart", async () => {
  renderWithProviders(
    <ProductCard product={sampleProduct} />
  );

  const user = userEvent.setup();

  const button500 = screen.getByRole("button", {
    name: "500g",
  });

  await user.click(button500);

expect(button500).toHaveAttribute(

  "aria-pressed",

  "true"

);
  await user.click(
    screen.getByRole("button", {
      name: /add to cart/i,
    })
  );

  const defaultWeight = screen.getByRole("button", {
    name: "250g",
  });

  expect(defaultWeight).toHaveClass("bg-orange-600");
});

