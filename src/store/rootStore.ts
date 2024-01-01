import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import homeSlice from "../pages/home/store/homeSlice";

const rootStore = configureStore({
  reducer: {
    app: appSlice,
    homePage: homeSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof rootStore.getState>;

export default rootStore;
