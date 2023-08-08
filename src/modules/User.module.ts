import { ContainerModule } from 'inversify';

import { UserController } from '@/controllers/User.controller';
import { UserRepository } from '@/repositories/User.repository';
import { UserService } from '@/services/User.service';
import { TYPES } from '@/utils/types';

export class UserModule extends ContainerModule {
  public constructor() {
    super((bind) => {
      bind(UserController).toSelf();

      bind<UserService>(TYPES.UserService).to(UserService);
      bind<UserRepository>(TYPES.UserRepository).to(UserRepository);
    });
  }
}
