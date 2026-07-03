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
  it("should keep different weights as separate cart items", () => {
  // Arrange
  const item250 = sampleItem;

  const item500 = {
    ...sampleItem,
    id: "gongura-500g",
    weight: "500g",
    price: 300,
  };

  // Act
  let state = cartReducer(undefined, addToCart(item250));

  state = cartReducer(state, addToCart(item500));

  // Assert
expect(state.items).toHaveLength(2);

expect(state.items[0]).toEqual(item250);

expect(state.items[1]).toEqual(item500);
  });
 it("should increase the quantity of an existing item", () => {
  let state = cartReducer(undefined, addToCart(sampleItem));

  state = cartReducer(
    state,
    increaseQuantity({
      id: sampleItem.id,
      weight: sampleItem.weight,
    })
  );

  expect(state.items).toHaveLength(1);
  expect(state.items[0].quantity).toBe(2);
});
it("should decrease the quantity of an item", () => {
  let state = cartReducer(undefined, addToCart(sampleItem));

  state = cartReducer(
    state,
    increaseQuantity({
      id: sampleItem.id,
      weight: sampleItem.weight,
    })
  );

  state = cartReducer(
    state,
    decreaseQuantity({
      id: sampleItem.id,
      weight: sampleItem.weight,
    })
  );

  expect(state.items[0].quantity).toBe(1);
});
it("should remove the item when quantity reaches zero", () => {
  let state = cartReducer(undefined, addToCart(sampleItem));

  state = cartReducer(
    state,
    decreaseQuantity({
      id: sampleItem.id,
      weight: sampleItem.weight,
    })
  );

  expect(state.items).toHaveLength(0);
});
});