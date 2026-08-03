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
        price: 700,
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
        price: 700,
        quantity: 2,
        weight: "250g",
      },
      {
        id: "karam-podi",
        name: "Karam Podi",
        image: "/menu/KaramPodi.png",
        price: 700,
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

    expect(screen.getByText("Items (2)")).toBeInTheDocument();
  });

  it("should display the correct subtotal", () => {
    renderWithProviders(<CartSummary />, {
      preloadedState: singleItemState,
    });

    // 700 × 2 = 1,400 (appears twice: Subtotal & Total)
    expect(screen.getAllByText("₹1,400")).toHaveLength(2);
  });

  it("should display courier partner delivery message and note", () => {
    renderWithProviders(<CartSummary />, {
      preloadedState: singleItemState,
    });

    expect(screen.getByText("Delivery Charges")).toBeInTheDocument();
    expect(screen.getByText("As per courier partner")).toBeInTheDocument();
    expect(
      screen.getByText(/Delivery charges vary based on order weight/i)
    ).toBeInTheDocument();
  });

  it("should display the correct total with exclude delivery note", () => {
    renderWithProviders(<CartSummary />, {
      preloadedState: singleItemState,
    });

    expect(screen.getByText("Items Total")).toBeInTheDocument();
    expect(
      screen.getByText("(Excl. delivery charges)")
    ).toBeInTheDocument();
    expect(screen.getAllByText("₹1,400")).toHaveLength(2);
  });

  it("should calculate totals correctly for multiple cart items", () => {
    renderWithProviders(<CartSummary />, {
      preloadedState: multipleItemsState,
    });

    // Total quantity = 2 + 1 = 3
    expect(screen.getByText("Items (3)")).toBeInTheDocument();

    // Total = (700 × 2) + (700 × 1) = 2,100
    expect(screen.getAllByText("₹2,100")).toHaveLength(2);

    expect(screen.getByText("As per courier partner")).toBeInTheDocument();
  });

  it("should display zero values for an empty cart", () => {
    renderWithProviders(<CartSummary />, {
      preloadedState: {
        cart: {
          items: [],
        },
      },
    });

    expect(screen.getByText("Items (0)")).toBeInTheDocument();
    expect(screen.getAllByText("₹0")).toHaveLength(2);
    expect(screen.getByText("As per courier partner")).toBeInTheDocument();
  });
});