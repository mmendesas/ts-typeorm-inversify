import { UserRepository } from '@/repositories/User.repository';
import { UserRequestDTO } from '@/utils/types';

export class UserService {
  public constructor(public _repo: UserRepository) {}

  async createUser(user: UserRequestDTO) {
    return this._repo.createUser(user);
  }
}
