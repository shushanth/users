import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import homeSlice from "../pages/home/store/homeSlice";
import userListSlice from "../pages/userList/store/userListSlice";
import userDetailSlice from "../pages/userDetail/store/userDetailSlice";

const reducers = combineReducers({
  app: appSlice,
  homePage: homeSlice,
  userListPage: userListSlice,
  userDetailPage: userDetailSlice,
});

const rootStore = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
});

export function setupAppStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: reducers,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootStore.getState>;

export type RootStore = ReturnType<typeof setupAppStore>;

export default rootStore;
