export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface IDatabaseState {
  users: IUser[];
}
