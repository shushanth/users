import React from "react";

import * as Styled from "../../../common/components/styled";
import DropdownMenu, {
  DropDownItem,
} from "../../../common/components/dropdown/Dropdown";
import Pagination from "../../../common/components/Pagination";
import { PaginationKey } from "../store/userListSliceModel";

interface UserListPageActionsProps {
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  onListSearch: (value: string) => void;
  onListSort: (sortKey: DropDownItem) => void;
  onPaginateUserList: (type: PaginationKey) => void;
}

const sortOptions: DropDownItem[] = [
  { id: 1, label: "None", value: "none" },
  { id: 2, label: "Name", value: "firstName" },
  { id: 3, label: "Age", value: "age" },
];

const UserListPageActions = React.memo(
  ({
    totalItems,
    currentPage,
    itemsPerPage,
    onListSort,
    onListSearch,
    onPaginateUserList,
  }: UserListPageActionsProps) => {
    const [selectedSort, setSelectedSort] = React.useState<string>("");
    const onListInputSearch = (value: string) => {
      onListSearch(value);
    };

    const onSelectedSort = (item: DropDownItem) => {
      setSelectedSort(item.label);
      onListSort(item);
    };

    return (
      <Styled.PageActionsLayout>
        <Styled.Layout $type="row" $fullSize>
          <Styled.Input
            placeholder="search by name"
            $size="medium"
            onChange={(event) => onListInputSearch(event.target.value)}
          />
        </Styled.Layout>
        <Styled.Layout $type="row">
          <DropdownMenu
            withButton
            btnTitle={`Sort by ${selectedSort}`}
            items={sortOptions}
            onDropdownSelected={onSelectedSort}
          />
        </Styled.Layout>

        <Pagination
          totalItems={totalItems}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageIncrement={onPaginateUserList}
          onPageDecrement={onPaginateUserList}
        />
      </Styled.PageActionsLayout>
    );
  }
);

export default UserListPageActions;
