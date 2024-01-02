import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import * as UserListSliceModel from "./userListSliceModel";

const initialState: UserListSliceModel.UserListState = {
  allUsers: [],
  users: {
    list: [],
    loading: false,
    error: false,
  },
  search: {
    key: "firstName",
    searchValue: "",
  },
  sort: {
    key: "none",
  },
  pagination: {
    pageNumber: 1,
    itemsPerPage: 10,
  },
};

const userListSlice = createSlice({
  name: "userListPage",
  initialState,
  reducers: {
    fetchUserList(
      state,
      { payload }: PayloadAction<UserListSliceModel.User[]>
    ) {
      state.users.list = payload;
    },
    filterUserSearchByName(
      state,
      {
        payload: { searchValue, searchKey },
      }: PayloadAction<{
        searchValue: string;
        searchKey: UserListSliceModel.SearchKey;
      }>
    ) {
      state.search.key = searchKey;
      state.search.searchValue = searchValue;
    },
    filterUserListSort(
      state,
      { payload }: PayloadAction<UserListSliceModel.SortKey>
    ) {
      state.sort.key = payload;
    },
    paginateUserList(
      state,
      { payload }: PayloadAction<UserListSliceModel.PaginationKey>
    ) {
      switch (payload) {
        case "increment": {
          const pageNumber = state.pagination.pageNumber + 1;
          state.pagination.pageNumber = pageNumber;
          break;
        }
        case "decrement": {
          const pageNumber = state.pagination.pageNumber - 1;
          state.pagination.pageNumber = pageNumber;
          break;
        }
        case "reset": {
          state.pagination.pageNumber = 1;
          break;
        }
        default:
          break;
      }
    },
  },
});

export const {
  fetchUserList,
  paginateUserList,
  filterUserListSort,
  filterUserSearchByName,
} = userListSlice.actions;

export default userListSlice.reducer;
