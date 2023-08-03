import { injectable } from 'inversify';

import Database from '@/utils/Database.fake';
import { IUser } from '@/utils/types';

@injectable()
export class UserRepository {
  public readonly _db = Database;

  async getAll() {
    return this._db.find();
  }

  async createUser(user: IUser) {
    return this._db.create(user);
  }

  async findById(id: string) {
    return this._db.findById(id);
  }
}
