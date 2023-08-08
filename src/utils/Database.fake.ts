import { IDatabaseState, IUser } from './types';

class DatabaseFake {
  private state: IDatabaseState = {
    users: [],
  };

  async init() {
    this.state.users = [
      { _id: '1', name: 'Ted', email: 'ted@mail.com', password: '1234' },
      { _id: '2', name: 'Bob', email: 'bob@mail.com', password: '4321' },
    ];
  }

  async create(user: Omit<IUser, 'id'>) {
    if (!user) {
      throw new Error('Missing user data');
    }

    const userIndex = this.state.users.findIndex((i) => i.email === user.email);
    if (userIndex > -1) {
      throw new Error('Email already exist');
    }

    const createdUser = {
      _id: Math.random().toString(32),
      ...user,
    };

    this.state.users.push(createdUser);

    return createdUser;
  }

  async findById(id: string): Promise<IUser> {
    const user = this.state.users.find((item) => item?._id === id);
    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  async find(): Promise<IUser[]> {
    return this.state.users;
  }

  async update(id: string, user: IUser): Promise<IUser> {
    const userIdx = this.state.users.findIndex((item) => item._id === id);

    if (userIdx > -1) {
      const dbUser = this.state.users[userIdx];
      const newUser = { ...dbUser, ...user };
      this.state.users[userIdx] = newUser;

      return this.state.users[userIdx];
    }

    throw new Error('User not found');
  }

  async deleteById(id: string) {
    this.state.users = this.state.users.filter((item) => item._id !== id);
  }

  public clear() {
    this.state.users = [];
  }
}

export default new DatabaseFake();
