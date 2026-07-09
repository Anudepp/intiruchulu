import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../test/test-utils";
import Header from "./Header";

// Mock sound utility


describe("Header", () => {
  it("should render the application logo", () => {
    renderWithProviders(<Header />);

    expect(
      screen.getByText("ఇంటి రుచులు")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Inti Ruchulu")
    ).toBeInTheDocument();
  });

  it("should render desktop and mobile navigation links", () => {
    renderWithProviders(<Header />);

    expect(
      screen.getAllByText("Home").length
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText("Menu").length
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText("Contact").length
    ).toBeGreaterThan(0);
  });

  it("should display the cart badge with the correct item count", () => {
    renderWithProviders(<Header />, {
      preloadedState: {
        cart: {
          items: [
            {
              id: "gongura-pickle",
              name: "Gongura Pickle",
              image: "/menu/GonguraPacchadi.png",
              price: 150,
              quantity: 3,
              weight: "250g",
            },
          ],
        },
      },
    });

    // Desktop + Mobile CartIcon
    expect(
      screen.getAllByText("3")
    ).toHaveLength(2);
  });

  it("should hide the cart badge when the cart is empty", () => {
    renderWithProviders(<Header />, {
      preloadedState: {
        cart: {
          items: [],
        },
      },
    });

    expect(
      screen.queryByText("1")
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText("2")
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText("3")
    ).not.toBeInTheDocument();
  });

  it("should contain links to the cart page", () => {
    renderWithProviders(<Header />, {
      preloadedState: {
        cart: {
          items: [],
        },
      },
    });

    const cartLinks = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("href") === "/cart");

    // Desktop + Mobile cart links
    expect(cartLinks).toHaveLength(2);
  });
});