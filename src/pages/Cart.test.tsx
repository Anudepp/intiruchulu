import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Cart from "./Cart";
import { renderWithProviders } from "../test/test-utils";

const sampleCartItem = {
  id: "gongura-pickle",
  name: "Gongura Pickle",
  image: "/menu/GonguraPacchadi.png",
  price: 150,
  quantity: 2,
  weight: "250g",
};

const preloadedState = {
  cart: {
    items: [sampleCartItem],
  },
};

const emptyCartState = {
  cart: {
    items: [],
  },
};

const renderCart = (state = preloadedState) =>
  renderWithProviders(<Cart />, {
    preloadedState: state,
  });

const setup = (state = preloadedState) => {
  const user = userEvent.setup();
  renderCart(state);

  return { user };
};

const getIncreaseButton = () =>
  screen.getByRole("button", {
    name: /increase quantity/i,
  });

const getDecreaseButton = () =>
  screen.getByRole("button", {
    name: /decrease quantity/i,
  });

const getRemoveButton = () =>
  screen.getByRole("button", {
    name: /remove item/i,
  });

describe("Cart Page", () => {
  it("should render the empty cart UI when the cart has no items", () => {
    renderCart(emptyCartState);

    expect(
      screen.getByText("Your cart is empty")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Explore our authentic homemade Andhra & Telangana delicacies.")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /browse menu/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.queryByText(/order summary/i)
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "My Cart",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /back to menu/i,
      })
    ).toBeInTheDocument();
  });

  it("should render cart items when the cart contains products", () => {
    renderCart();

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
      screen.getAllByText("₹300")
    ).toHaveLength(3);

    expect(
      screen.getByAltText("Gongura Pickle")
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Your cart is empty")
    ).not.toBeInTheDocument();
  });

  it("should increase the quantity when + button is clicked", async () => {
    const { user } = setup();

    await user.click(getIncreaseButton());

    expect(
      screen.getByText("₹150 × 3")
    ).toBeInTheDocument();

    expect(
      screen.getAllByText("₹450")
    ).toHaveLength(3);
  });

  it("should decrease the quantity when − button is clicked", async () => {
    const { user } = setup();

    await user.click(getDecreaseButton());

    expect(
      screen.getByText("₹150 × 1")
    ).toBeInTheDocument();

    expect(
      screen.getAllByText("₹150")
    ).toHaveLength(3);
  });

  it("should remove the cart item when the remove button is clicked", async () => {
    const { user } = setup();

    await user.click(getRemoveButton());

    expect(
      screen.getByText("Your cart is empty")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /browse menu/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Gongura Pickle")
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText("Order Summary")
    ).not.toBeInTheDocument();
  });
});