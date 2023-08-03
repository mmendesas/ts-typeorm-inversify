import { injectable } from 'inversify';

import Database from '@/utils/Database.fake';
import { IUser } from '@/utils/types';

@injectable()
export class UserRepository {
  public readonly _db = Database;

  async getAll() {
    return this._db.all();
  }

  async createUser(user: IUser) {
    return this._db.create(user);
  }
}
