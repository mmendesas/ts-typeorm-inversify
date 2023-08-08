import { Container } from 'inversify';

import '@/controllers/User.controller';
import { DBService } from './db-service';
import * as AllModules from '@/modules';

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
    // setup bindings for modules
    const modules = Object.values(AllModules);
    this._container.load(...modules.map((m) => new m()));

    // enable DBService
    this._container.bind(DBService).toSelf();
  }
}
