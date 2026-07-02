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
  
  it("should add a new item to the cart", () => {
  const state = cartReducer(
    undefined,
    addToCart(sampleItem)
  );

  expect(state.items).toHaveLength(1);

    expect(state.items[0]).toEqual(sampleItem);
    expect(state.items[0].name).toBe("Gongura Pickle");

expect(state.items[0].quantity).toBe(1);

expect(state.items[0].weight).toBe("250g");
  });
  it("should merge duplicate items by increasing quantity", () => {
  // Arrange
  let state = cartReducer(undefined, addToCart(sampleItem));

  // Act
  state = cartReducer(state, addToCart(sampleItem));

  // Assert
  expect(state.items).toHaveLength(1);

  
  expect(state.items[0].name).toBe("Gongura Pickle");

expect(state.items[0].weight).toBe("250g");
});
});