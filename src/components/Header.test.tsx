import { describe, it, expect} from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../test/test-utils";
import Header from "./Header";
import { fireEvent } from "@testing-library/react";


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
  it("should apply the scrolled styles after scrolling", () => {
  Object.defineProperty(window, "scrollY", {
    writable: true,
    configurable: true,
    value: 20,
  });

  const { container } = renderWithProviders(<Header />);

  fireEvent.scroll(window);

  const header = container.querySelector("header");

  expect(header).toHaveClass("bg-white/80");
  });
  it("should highlight the Contact navigation when on the contact page", () => {
  const { container } = renderWithProviders(<Header />, {
    route: "/contact",
  });

  const activeIcons = container.querySelectorAll(".animate-soft-float");

  expect(activeIcons).toHaveLength(1);

  expect(
    screen.getAllByText("Contact").length
  ).toBeGreaterThan(0);
  });
  it("should highlight the Menu navigation when on the menu page", () => {
  const { container } = renderWithProviders(<Header />, {
    route: "/menu",
  });

  const activeIcons = container.querySelectorAll(".animate-soft-float");

  expect(activeIcons).toHaveLength(1);

  expect(
    screen.getAllByText("Menu").length
  ).toBeGreaterThan(0);
  });
  it("should highlight the Cart navigation when on the cart page", () => {
  const { container } = renderWithProviders(<Header />, {
    route: "/cart",
    preloadedState: {
      cart: {
        items: [],
      },
    },
  });

  const activeIcons = container.querySelectorAll(".animate-soft-float");

  // Cart becomes active, but only Home/Menu/Contact use the
  // animate-soft-float class, so there should be no animated icons.
  expect(activeIcons).toHaveLength(0);

  expect(
    screen.getAllByText("Cart").length
  ).toBeGreaterThan(0);
});
});