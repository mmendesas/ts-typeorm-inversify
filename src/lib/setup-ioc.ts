import { Container } from 'inversify';

import { UserRepository } from '@/repositories/User.repository';
import { UserService } from '@/services/User.service';

import { DBService } from './db-service';

import '@/controllers/User.controller';
import { UserController } from '@/controllers/User.controller';
import { TYPES } from '@/utils/types';

export class SetupIOC {
  private _container: Container;

  constructor() {
    this._container = new Container({ defaultScope: 'Singleton' });
  }

  public init() {
    this._setupDependencies();
    return this._container;
  }

  _setupDependencies() {
    // setup bindings
    this._container.bind(UserController).toSelf();

    this._container.bind<UserService>(TYPES.UserService).to(UserService);

    this._container
      .bind<UserRepository>(TYPES.UserRepository)
      .to(UserRepository);

    this._container.bind(DBService).toSelf();
  }
}
