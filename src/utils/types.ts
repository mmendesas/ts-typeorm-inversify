export interface IUser {
  id?: number;
  username: string;
}

export interface UserRequestDTO {
  username: string;
}

export interface IDatabaseState {
  users: IUser[];
}
