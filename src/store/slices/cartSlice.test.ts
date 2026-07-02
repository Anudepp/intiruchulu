import { describe, it, expect } from "vitest";

import cartReducer, {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "./cartSlice";

const sampleItem = {
  id: "gongura-250g",
  name: "Gongura Pickle",
  image: "/menu/GonguraPacchadi.png",
  price: 150,
  quantity: 1,
  weight: "250g",
};

describe("Cart Slice", () => {
  it("should setup the cart reducer test suite", () => {
    expect(true).toBe(true);
  });
});