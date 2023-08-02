import { injectable } from 'inversify';

import { UserRepository } from '@/repositories/User.repository';
import { UserRequestDTO } from '@/utils/types';

export interface IUserService {
  createUser(user: UserRequestDTO): void;
  getAll(): void;
}

@injectable()
export class UserService {
  public constructor(public _repo: UserRepository) {}

  async createUser(user: UserRequestDTO) {
    return this._repo.createUser(user);
  }

  async getAll() {
    return this._repo.getAll();
  }
}
