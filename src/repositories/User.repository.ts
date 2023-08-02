import Database from '@/utils/Database';
import { IUser, UserRequestDTO } from '@/utils/types';

export interface IUserRepository {
  _db: any;
  createUser(user: UserRequestDTO): Promise<IUser>;
}

export class UserRepository implements IUserRepository {
  public readonly _db = Database;

  async createUser(user: UserRequestDTO) {
    return this._db.create(user);
  }
}
