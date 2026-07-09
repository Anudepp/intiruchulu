import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CartItem from "./CartItem";
import { renderWithProviders } from "../test/test-utils";

const sampleItem = {
  id: "gongura-pickle",
  name: "Gongura Pickle",
  image: "/menu/GonguraPacchadi.png",
  price: 150,
  quantity: 2,
  weight: "250g",
};

const preloadedState = {
  cart: {
    items: [sampleItem],
  },
};

describe("CartItem Component", () => {
  it("should render the cart item details correctly", () => {
    renderWithProviders(<CartItem item={sampleItem} />, {
      preloadedState,
    });

    expect(
      screen.getByText("Gongura Pickle")
    ).toBeInTheDocument();

    expect(
      screen.getByText("250g")
    ).toBeInTheDocument();

    expect(
      screen.getByText("₹150 × 2")
    ).toBeInTheDocument();

    expect(
      screen.getByAltText("Gongura Pickle")
    ).toBeInTheDocument();
  });

  it("should display the correct subtotal", () => {
    renderWithProviders(<CartItem item={sampleItem} />, {
      preloadedState,
    });

    expect(
      screen.getByText("₹300")
    ).toBeInTheDocument();
  });

  it("should increase the quantity when + button is clicked", async () => {
    const user = userEvent.setup();

    const { store } = renderWithProviders(
      <CartItem item={sampleItem} />,
      {
        preloadedState,
      }
    );

    const increaseButton = screen.getByRole("button", {
      name: /increase quantity/i,
    });

    await user.click(increaseButton);

    expect(
      store.getState().cart.items[0].quantity
    ).toBe(3);
  });

  it("should decrease the quantity when − button is clicked", async () => {
    const user = userEvent.setup();

    const { store } = renderWithProviders(
      <CartItem item={sampleItem} />,
      {
        preloadedState,
      }
    );

    const decreaseButton = screen.getByRole("button", {
      name: /decrease quantity/i,
    });

    await user.click(decreaseButton);

    expect(
      store.getState().cart.items[0].quantity
    ).toBe(1);
  });

  it("should remove the item when remove button is clicked", async () => {
    const user = userEvent.setup();

    const { store } = renderWithProviders(
      <CartItem item={sampleItem} />,
      {
        preloadedState,
      }
    );

    const removeButton = screen.getByRole("button", {
      name: /remove item/i,
    });

    await user.click(removeButton);

    expect(
      store.getState().cart.items
    ).toHaveLength(0);
  });
});