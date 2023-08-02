import Database from '@/utils/Database';
import { IUser, UserRequestDTO } from '@/utils/types';
import { injectable } from 'inversify';

export interface IUserRepository {
  _db: unknown;
  createUser(user: UserRequestDTO): Promise<IUser>;
}

@injectable()
export class UserRepository implements IUserRepository {
  public readonly _db = Database;

  async createUser(user: UserRequestDTO) {
    return this._db.create(user);
  }

  async getAll() {
    return this._db.all();
  }
}
