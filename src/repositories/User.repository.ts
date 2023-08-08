import { injectable } from 'inversify';

import { IUser } from '@/utils/types';
import { DBService } from '@/lib/db-service';

@injectable()
export class UserRepository {
  constructor(public readonly _db: DBService) {}

  async getUsers(): Promise<IUser[]> {
    return this._db.user.find().select('name email role');
  }

  async newUser(user: IUser): Promise<IUser> {
    await this._db.user.create(user);
    return user;
  }

  async getUser(id: string): Promise<IUser> {
    return this._db.user.findById(id).select('name email role');
  }

  async updateUser(id: string, user: Pick<IUser, 'name'>): Promise<IUser> {
    await this._db.user.findByIdAndUpdate(id, user);
    return this._db.user.findById(id).select('name email role');
  }

  async deleteUser(id: string): Promise<boolean> {
    await this._db.user.findByIdAndDelete(id);
    return true;
  }
}
