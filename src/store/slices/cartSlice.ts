import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type {
  CartItem,
  CartState,
  CartItemIdentifier,
} from "../../types/cart";

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
const existingItem = state.items.find(
  (item) =>
    item.id === action.payload.id &&
    item.weight === action.payload.weight
);

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },

 removeFromCart(
  state,
  action: PayloadAction<CartItemIdentifier>
) {
  state.items = state.items.filter(
    (item) =>
      !(
        item.id === action.payload.id &&
        item.weight === action.payload.weight
      )
  );
},

increaseQuantity(

  state,

  action: PayloadAction<CartItemIdentifier>

) {
    const item = state.items.find(
  (item) =>
    item.id === action.payload.id &&
    item.weight === action.payload.weight
);

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity(
  state,
  action: PayloadAction<CartItemIdentifier>
) {
 const item = state.items.find(
  (item) =>
    item.id === action.payload.id &&
    item.weight === action.payload.weight
);

      if (!item) return;

      if (item.quantity === 1) {
 state.items = state.items.filter(
  (i) =>
    !(
      i.id === action.payload.id &&
      i.weight === action.payload.weight
    )
);
      } else {
        item.quantity -= 1;
      }
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;