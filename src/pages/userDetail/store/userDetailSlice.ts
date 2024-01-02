import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import * as UserDetailSliceModel from "./userDetailSliceModel";

const initialState: UserDetailSliceModel.SelectedUser = {
  user: {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    address: "",
    avatarUrl: "",
  },
};

const userDetailSlice = createSlice({
  name: "userDetailsPage",
  initialState,
  reducers: {
    updateUserDetails(
      state,
      {
        payload: { id, firstName, lastName, age, address, email, avatarUrl },
      }: PayloadAction<UserDetailSliceModel.UserDetail>
    ) {
      state.user.firstName = firstName;
      state.user.lastName = lastName;
      state.user.id = id;
      state.user.address = address;
      state.user.age = age;
      state.user.email = email;
      state.user.avatarUrl = avatarUrl;
    },
  },
});

export const { updateUserDetails } = userDetailSlice.actions;

export default userDetailSlice.reducer;
