import { IUser } from '@/utils/types';

import DatabaseFake from '@/utils/Database.fake';

export class UserRepositoryMock {
  constructor() {
    // seed DB
    DatabaseFake.init();
  }

  async getUsers(): Promise<IUser[]> {
    return DatabaseFake.find();
  }

  async newUser(user: IUser): Promise<IUser> {
    await DatabaseFake.create(user);
    return user;
  }

  async getUser(id: string): Promise<IUser> {
    return DatabaseFake.findById(id);
  }

  async updateUser(id: string, user: IUser): Promise<IUser> {
    return DatabaseFake.update(id, user);
  }

  async deleteUser(id: string): Promise<boolean> {
    await DatabaseFake.deleteById(id);
    return true;
  }
}

export const Groosa = {
  UserGrosa: UserRepositoryMock,
};
