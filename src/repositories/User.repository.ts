import Database from '@/utils/Database';
import { UserRequestDTO } from '@/utils/types';

export class UserRepository {
  public readonly _db = Database;

  async createUser(user: UserRequestDTO) {
    return this._db.create(user);
  }
}
