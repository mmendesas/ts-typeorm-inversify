// import 'tsconfig-paths/register';
import 'dotenv/config';

import { App } from './app';

import Database, { IUser } from './utils/Database';

console.clear();

export class UserRepository {
  private readonly _db = Database;

  async createUser(user: IUser) {
    return this._db.create(user);
  }
}

export class UserService {
  constructor(private readonly _repo: UserRepository) {}

  async createUser(user: IUser) {
    return this._repo.createUser(user);
  }
}

export class UserController {
  constructor(private readonly _service: UserService) {}

  async createUser(user: IUser) {
    return this._service.createUser(user);
  }
}

(async () => {
  try {
    const repo = new UserRepository();
    const service = new UserService(repo);
    const controller = new UserController(service);

    controller.createUser({ username: 'Marcio' }).then(console.log);
    controller.createUser({ username: 'Mendes' }).then(console.log);

    new App().setup();
  } catch (err) {
    console.error('[server] Something went wrong', err);
  }
})();
