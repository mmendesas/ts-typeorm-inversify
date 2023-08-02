import { IUserRepository } from '@/repositories/User.repository';
import { UserRequestDTO } from '@/utils/types';

export interface IUserService {
  createUser(user: UserRequestDTO): void;
}

export class UserService implements IUserService {
  public constructor(public _repo: IUserRepository) {}

  async createUser(user: UserRequestDTO) {
    return this._repo.createUser(user);
  }
}
