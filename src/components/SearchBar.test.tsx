import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("renders the search input", () => {
    render(
      <SearchBar
        value=""
        onChange={vi.fn()}
      />
    );

    expect(
      screen.getByPlaceholderText(/search products/i)
    ).toBeInTheDocument();
  });
  it("calls onChange when the user types", async () => {
  const user = userEvent.setup();
  const handleChange = vi.fn();

  render(
    <SearchBar
      value=""
      onChange={handleChange}
    />
  );

  const input = screen.getByPlaceholderText(/search products/i);

  await user.type(input, "Garlic");

  expect(handleChange).toHaveBeenCalled();
  });
  it("displays the value provided by the parent", () => {
  render(
    <SearchBar
      value="Garlic"
      onChange={vi.fn()}
    />
  );

  const input = screen.getByPlaceholderText(
    /search products/i
  ) as HTMLInputElement;

  expect(input.value).toBe("Garlic");
});
});