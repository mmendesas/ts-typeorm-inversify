// import 'tsconfig-paths/register';
import 'dotenv/config';
import 'reflect-metadata';

import { App } from './app';

import { UserRepository } from './repositories/User.repository';
import { UserService } from './services/User.service';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';

console.clear();

import '@/controllers/User.controller';

(async () => {
  try {
    const container = new Container();

    container.bind(UserRepository).toSelf();
    container.bind(UserService).toSelf();

    const server = new InversifyExpressServer(container);

    const app = server.build();
    app.listen(5000, () => {
      console.log('Server running with inversify express');
    });

    // new App().setup();
  } catch (err) {
    console.error('[server] Something went wrong', err);
  }
})();
