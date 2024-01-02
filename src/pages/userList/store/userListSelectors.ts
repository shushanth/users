import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "./../../../store/rootStore";
import * as UserListSliceModel from "../store/userListSliceModel";

export const applyPageFilters = createSelector(
  (state: RootState) => state.userListPage,
  (state: RootState) => state.userListPage.search,
  (state: RootState) => state.userListPage.sort,
  (state: RootState) => state.userListPage.pagination,
  (userListPage, search, sort, pagination) => {
    const searchedValue: string = search.searchValue;
    const searchedKey: UserListSliceModel.SearchKey = search.key;
    const sortKey: UserListSliceModel.SortKey = sort.key;
    const { itemsPerPage, pageNumber } = pagination;

    let usersList = [...userListPage.users.list];
    let totalUsersLength = 0;

    if (searchedValue) {
      const searchResults = usersList.filter(
        (user: UserListSliceModel.User) => {
          return user[searchedKey]
            .toLocaleLowerCase()
            .includes(searchedValue.toLocaleLowerCase());
        }
      );
      usersList = [...searchResults];
    }

    if (sortKey !== "none") {
      const sortResults = usersList.sort((userA, userB) => {
        return userA[sortKey]
          ?.toString()
          .localeCompare(userB[sortKey].toString());
      });
      usersList = [...sortResults];
    }
    totalUsersLength = usersList.length;

    if (pageNumber === 1) {
      usersList = usersList.slice(0, itemsPerPage);
    }
    if (pageNumber > 1) {
      usersList = usersList.slice(
        (pageNumber - 1) * 10,
        itemsPerPage * pageNumber
      );
    }
    return { usersList, totalUsers: totalUsersLength };
  }
);
