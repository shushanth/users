import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import homeSlice from "../pages/home/store/homeSlice";
import userListSlice from "../pages/userList/store/userListSlice";

const rootStore = configureStore({
  reducer: {
    app: appSlice,
    homePage: homeSlice,
    userListPage: userListSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof rootStore.getState>;

export default rootStore;
