import { ReactElement } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/slices/cartSlice";

export function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState,
    route = "/",
  }: {
    preloadedState?: any;
    route?: string;
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
        <MemoryRouter initialEntries={[route]}>
          {ui}
        </MemoryRouter>
      </Provider>
    ),
  };
}