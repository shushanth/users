import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { RootStore, RootState } from "../../store/rootStore";

import appReducer from "../../store/appSlice";
import homeReducer from "../../pages/home/store/homeSlice";
import userListReducer from "../../pages/userList/store/userListSlice";
import userDetailReducer from "../../pages/userDetail/store/userDetailSlice";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?: RootStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: combineReducers({
        app: appReducer,
        homePage: homeReducer,
        userListPage: userListReducer,
        userDetailPage: userDetailReducer,
      }),
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
