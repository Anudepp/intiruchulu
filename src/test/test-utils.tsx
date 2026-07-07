import { ReactElement } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../store/slices/cartSlice";

export function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState,
  }: {
    preloadedState?: any;
  } = {}
) {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
    preloadedState,
  });

  return {
    store,
    ...render(
      <Provider store={store}>
        {ui}
      </Provider>
    ),
  };
}