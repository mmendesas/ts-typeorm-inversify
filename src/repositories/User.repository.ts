import Database, { IUser } from '@/utils/Database';

export class UserRepository {
  public readonly _db = Database;

  async createUser(user: IUser) {
    return this._db.create(user);
  }
}
