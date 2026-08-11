import { it, expect } from "vitest";
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
  ingredients: [
    "Gongura leaves",
    "Red chillies",
    "Garlic",
    "Salt",
    "Oil",
  ],
  processOfMaking: [
    "Clean and cook the gongura leaves.",
    "Prepare the spice mixture.",
    "Combine the ingredients.",
    "Cook until the pickle reaches the desired consistency.",
  ],
  quantities: [
    { weight: "100g", price: 70 },
    { weight: "250g", price: 175 },
    { weight: "500g", price: 350 },
    { weight: "1kg", price: 700 },
  ],
};

const preloadedState = {
  cart: {
    items: [],
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
    screen.getByText("₹175")
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

it("should update the displayed price when the selected weight changes", async () => {
  renderWithProviders(
    <ProductCard product={sampleProduct} />
  );

  const user = userEvent.setup();

  // Default: 250g
  expect(
    screen.getByText("₹175")
  ).toBeInTheDocument();

  // 100g
  await user.click(
    screen.getByRole("button", {
      name: "100g",
    })
  );

  expect(
    screen.getByText("₹70")
  ).toBeInTheDocument();

  // 500g
  await user.click(
    screen.getByRole("button", {
      name: "500g",
    })
  );

  expect(
    screen.getByText("₹350")
  ).toBeInTheDocument();

  // 1kg
  await user.click(
    screen.getByRole("button", {
      name: "1kg",
    })
  );

  expect(
    screen.getByText("₹700")
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
    quantity: 1,
    price: 175,
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

  expect(
    screen.getByTestId("quantity-display")
  ).toHaveTextContent("1");

  await user.click(plusButton);

  expect(
    screen.getByTestId("quantity-display")
  ).toHaveTextContent("2");
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

  // Increase first: 1 -> 2
  await user.click(plusButton);

  expect(
    screen.getByTestId("quantity-display")
  ).toHaveTextContent("2");

  // Decrease back: 2 -> 1
  await user.click(minusButton);

  expect(
    screen.getByTestId("quantity-display")
  ).toHaveTextContent("1");
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

it("should reset selected weight to the first quantity after adding to cart", async () => {
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
    name: "100g",
  });

  expect(defaultWeight).toHaveAttribute(
    "aria-pressed",
    "true"
  );
});