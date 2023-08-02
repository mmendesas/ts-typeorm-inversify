import { UserRepository } from '@/repositories/User.repository';
import { UserService } from '@/services/User.service';
import { Container } from 'inversify';

export class SetupIOC {
  private _container: Container;

  constructor() {
    this._container = new Container();
  }

  public init() {
    this._setupDependencies();
    return this._container;
  }

  _setupDependencies() {
    // setuup bindings
    this._container.bind(UserRepository).toSelf();
    this._container.bind(UserService).toSelf();
  }
}
