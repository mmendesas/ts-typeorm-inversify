import { injectable } from 'inversify';

import { IUser } from '@/utils/types';
import { DBService } from '@/lib/db-service';

@injectable()
export class UserRepository {
  constructor(public readonly _db: DBService) {}

  async getAll() {
    return this._db.user.find().select('name email role');
  }

  async createUser(user: IUser) {
    return this._db.user.create(user);
  }

  async findById(id: string) {
    return this._db.user.findById(id).select('name email role');
  }

  async updateOne(id: string, user: Pick<IUser, 'name'>) {
    await this._db.user.findByIdAndUpdate(id, user);
    return this._db.user.findById(id).select('name email role');
  }

  async delete(id: string) {
    return this._db.user.findByIdAndDelete(id);
  }
}
