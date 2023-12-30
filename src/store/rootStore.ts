import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const rootStore = configureStore({
  reducer: {
    app: appSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof rootStore.getState>;

export default rootStore;
