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
 it("should return the initial state", () => {
  const state = cartReducer(undefined, {
    type: "@@INIT",
  });

  expect(state).toEqual({
    items: [],
  });
});
});