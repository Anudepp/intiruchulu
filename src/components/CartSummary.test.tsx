import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import CartSummary from "./CartSummary";
import { renderWithProviders } from "../test/test-utils";

const singleItemState = {
  cart: {
    items: [
      {
        id: "gongura-pickle",
        name: "Gongura Pickle",
        image: "/menu/GonguraPacchadi.png",
        price: 150,
        quantity: 2,
        weight: "250g",
      },
    ],
  },
};

const multipleItemsState = {
  cart: {
    items: [
      {
        id: "gongura-pickle",
        name: "Gongura Pickle",
        image: "/menu/GonguraPacchadi.png",
        price: 150,
        quantity: 2,
        weight: "250g",
      },
      {
        id: "karam-podi",
        name: "Karam Podi",
        image: "/menu/KaramPodi.png",
        price: 350,
        quantity: 1,
        weight: "500g",
      },
    ],
  },
};

describe("CartSummary", () => {
  it("should render the order summary heading", () => {
    renderWithProviders(<CartSummary />, {
      preloadedState: singleItemState,
    });

    expect(
      screen.getByRole("heading", {
        name: /order summary/i,
      })
    ).toBeInTheDocument();
  });

  it("should display the correct item count", () => {
    renderWithProviders(<CartSummary />, {
      preloadedState: singleItemState,
    });

    expect(
      screen.getByText("Items")
    ).toBeInTheDocument();

    expect(
      screen.getByText("2")
    ).toBeInTheDocument();
  });

  it("should display the correct subtotal", () => {
    renderWithProviders(<CartSummary />, {
      preloadedState: singleItemState,
    });

    expect(
      screen.getAllByText("₹300")
    ).toHaveLength(2);
  });

  it("should display FREE delivery", () => {
    renderWithProviders(<CartSummary />, {
      preloadedState: singleItemState,
    });

    expect(
      screen.getByText("Delivery")
    ).toBeInTheDocument();

    expect(
      screen.getByText("FREE")
    ).toBeInTheDocument();
  });

  it("should display the correct total", () => {
    renderWithProviders(<CartSummary />, {
      preloadedState: singleItemState,
    });

    expect(
      screen.getAllByText("₹300")
    ).toHaveLength(2);
  });

  it("should calculate totals correctly for multiple cart items", () => {
    renderWithProviders(<CartSummary />, {
      preloadedState: multipleItemsState,
    });

    // Total quantity = 2 + 1 = 3
    expect(
      screen.getByText("3")
    ).toBeInTheDocument();

    // Total = (150 × 2) + (350 × 1) = 650
    expect(
      screen.getAllByText("₹650")
    ).toHaveLength(2);

    expect(
      screen.getByText("FREE")
    ).toBeInTheDocument();
  });

  it("should display zero values for an empty cart", () => {
    renderWithProviders(<CartSummary />, {
      preloadedState: {
        cart: {
          items: [],
        },
      },
    });

    expect(
      screen.getByText("Items")
    ).toBeInTheDocument();

    expect(
      screen.getByText("0")
    ).toBeInTheDocument();

    expect(
      screen.getAllByText("₹0")
    ).toHaveLength(2);

    expect(
      screen.getByText("FREE")
    ).toBeInTheDocument();
  });
});