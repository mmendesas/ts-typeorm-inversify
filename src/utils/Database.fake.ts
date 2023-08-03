import { IDatabaseState, IUser } from './types';

class Database {
  private state: IDatabaseState = {
    users: [],
  };

  async create(user: Omit<IUser, 'id'>) {
    if (!user) {
      throw new Error('Missing user data');
    }

    const createdUser = {
      id: Math.random().toString(32),
      ...user,
    };

    this.state.users.push(createdUser);

    return createdUser;
  }

  async findById(id: string): Promise<IUser | undefined> {
    return this.state.users.find((item) => item.id === id);
  }

  async all(): Promise<IUser[]> {
    return this.state.users;
  }

  public clear() {
    this.state.users = [];
  }
}

export default new Database();
