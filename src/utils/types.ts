export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
}

export interface IDatabaseState {
  users: IUser[];
}

export const TYPES = {
  UserService: Symbol.for('UserService'),
  UserRepository: Symbol.for('UserRepository'),
};
