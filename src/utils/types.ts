export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
}

export interface IDatabaseState {
  users: IUser[];
}

interface ITYPES {
  [key: string]: symbol;
}

export const TYPES: ITYPES = {
  UserService: Symbol.for('UserService'),
  UserRepository: Symbol.for('UserRepository'),
};
