export interface IUser {
  id?: number;
  username: string;
}

export interface IDatabaseState {
  users: IUser[];
}

class Database {
  private state: IDatabaseState = {
    users: [],
  };

  async create(user: Omit<IUser, 'id'>) {
    if (!user) {
      throw new Error('Missing user data');
    }

    const createdUser = {
      id: this.state.users.length + 1,
      ...user,
    };

    this.state.users.push(createdUser);

    return createdUser;
  }

  async findById(id: number): Promise<IUser | undefined> {
    return this.state.users.find((i) => i.id === id);
  }

  async all(): Promise<IUser[]> {
    return this.state.users;
  }

  public clear() {
    this.state.users = [];
  }
}

export default new Database();
