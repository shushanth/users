import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/rootStore";
import { userListMockResponse } from "../../common/services/mockUserResponse";
import * as Styled from "../../common/components/styled";
import * as userListSliceAction from "./store/userListSlice";
import * as UserListSliceModel from "./store/userListSliceModel";

import { DropDownItem } from "../../common/components/dropdown/Dropdown";

import UserListPageActions from "./components/UserListPageActions";
import * as userListSelectors from "./store/userListSelectors";
import UserListView from "./components/UserListView";

const UserList = (): JSX.Element => {
  const dispatch = useDispatch();
  const pagination = useSelector(
    (state: RootState) => state.userListPage.pagination
  );

  const { usersList, totalUsers } = useSelector(
    userListSelectors.applyPageFilters
  );

  const requestUserList = React.useCallback(async () => {
    const userListMocks = userListMockResponse();
    await dispatch(userListSliceAction.fetchUserList(userListMocks));
    await dispatch(userListSliceAction.paginateUserList("reset"));
  }, [dispatch]);

  const onUserListSort = async ({ value }: DropDownItem) => {
    await dispatch(
      userListSliceAction.filterUserListSort(
        value as UserListSliceModel.SortKey
      )
    );
    await dispatch(userListSliceAction.paginateUserList("reset"));
  };

  const onUserSearchByName = async (value: string) => {
    await dispatch(
      userListSliceAction.filterUserSearchByName({
        searchValue: value,
        searchKey: "firstName",
      })
    );
    await dispatch(userListSliceAction.paginateUserList("reset"));
  };

  const onPaginateUserList = (paginate: UserListSliceModel.PaginationKey) => {
    dispatch(userListSliceAction.paginateUserList(paginate));
  };

  React.useEffect(() => {
    requestUserList();
  }, [requestUserList]);

  return (
    <Styled.PageLayout>
      <UserListPageActions
        onListSearch={onUserSearchByName}
        onListSort={onUserListSort}
        totalItems={totalUsers}
        currentPage={pagination.pageNumber}
        itemsPerPage={pagination.itemsPerPage}
        onPaginateUserList={onPaginateUserList}
      />
      <Styled.ListContainer>
        <UserListView users={usersList} />
      </Styled.ListContainer>
    </Styled.PageLayout>
  );
};

export default UserList;
