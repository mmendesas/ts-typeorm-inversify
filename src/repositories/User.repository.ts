import { injectable } from 'inversify';

import FakeDB from '@/utils/Database.fake';
import { IUser } from '@/utils/types';

@injectable()
export class UserRepository {
  public _db: any;

  constructor(db?: any) {
    this._db = db || FakeDB;
  }

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
