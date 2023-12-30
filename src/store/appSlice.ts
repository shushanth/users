import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "../common/components/ThemeProvider";

interface AppInitState {
  theme: {
    value: Theme;
  };
}

const initialState: AppInitState = {
  theme: {
    value: "light",
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeTheme(state, { payload }: PayloadAction<Theme>) {
      state.theme.value = payload;
    },
  },
});

export const { changeTheme } = appSlice.actions;

export default appSlice.reducer;
