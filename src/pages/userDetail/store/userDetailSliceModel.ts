export interface UserDetail {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  address: string;
  avatarUrl: string;
}

export interface SelectedUser {
  user: UserDetail;
}
