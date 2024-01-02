export type User = {
  id: number;
  firstName: string;
  lastName?: string;
  email: string;
  age: number;
  address?: string;
  avatarUrl?: string;
};

export type SortKey = "firstName" | "age" | "none";

export type SearchKey = "firstName";

export type PaginationKey = "increment" | "decrement" | "reset";

export interface UserListState {
  allUsers: User[]; //using this as API is not there
  users: {
    list: User[];
    loading: boolean;
    error: boolean;
  };
  sort: {
    key: SortKey;
  };
  search: {
    key: SearchKey;
    searchValue: string;
  };
  pagination: {
    pageNumber: number;
    itemsPerPage: number;
  };
}
