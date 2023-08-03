import { injectable } from 'inversify';

import { UserRepository } from '@/repositories/User.repository';
import { IUser } from '@/utils/types';

@injectable()
export class UserService {
  public constructor(public _repo: UserRepository) {}

  async getAll() {
    return this._repo.getAll();
  }

  async findById(id: string) {
    return this._repo.findById(id);
  }

  async createUser(user: IUser) {
    return this._repo.createUser(user);
  }
}
