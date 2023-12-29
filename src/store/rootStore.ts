import { configureStore } from "@reduxjs/toolkit";

const rootStore = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof rootStore.getState>;

export default rootStore;
