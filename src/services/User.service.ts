import { inject, injectable } from 'inversify';

import { UserRepository } from '@/repositories/User.repository';
import { IUser, TYPES } from '@/utils/types';

export interface IUserService {
  getUsers(): Promise<IUser[]>;
  getUser(id: string): Promise<IUser>;
  newUser(user: IUser): void;
  updateUser(id: string, user: IUser): void;
  delete(id: string): Promise<boolean>;
}

@injectable()
export class UserService {
  public constructor(
    @inject(TYPES.UserRepository) private _repo: UserRepository,
  ) {}

  async getUsers(): Promise<IUser[]> {
    return this._repo.getUsers();
  }

  async getUser(id: string): Promise<IUser> {
    return this._repo.getUser(id);
  }

  async newUser(user: IUser) {
    return this._repo.newUser(user);
  }

  async updateUser(id: string, user: Pick<IUser, 'name'>) {
    return this._repo.updateUser(id, user);
  }

  async delete(id: string): Promise<boolean> {
    return this._repo.deleteUser(id);
  }
}
