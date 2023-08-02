// import 'tsconfig-paths/register';
import 'dotenv/config';

import { App } from './app';

import { UserRepository } from './repositories/User.repository';
import { UserService } from './services/User.service';
import { UserController } from './controllers/User.controller';

console.clear();

(async () => {
  try {
    // testing out service-repository structure
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
