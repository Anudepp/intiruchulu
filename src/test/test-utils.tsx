import { ReactElement } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "../store/rootReducer";
import type { RootState } from "../store";

export function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState,
    route = "/",
  }: {
    preloadedState?: Partial<RootState>;
    route?: string;
  } = {}
) {
  const store = configureStore({
    reducer: rootReducer,
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