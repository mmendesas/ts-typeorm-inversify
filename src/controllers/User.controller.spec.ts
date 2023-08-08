import { mock } from 'jest-mock-extended';

import { UserRepository } from '@/repositories/User.repository';
import { UserController } from './User.controller';
import { UserModule } from '@/modules/User.module';

import { createTestingModule } from '@test/create-testing-module';
import { UserRepositoryMock } from '@test/mocks';
import { TYPES } from '@/utils/types';
import { Request } from 'express-serve-static-core';

describe('[controller] - User', () => {
  const mockedUserRepository = mock<UserRepository>(new UserRepositoryMock());

  let _controller: UserController;

  beforeEach(() => {
    // simulate DI
    const container = createTestingModule(UserModule);

    // rebind repo to mocked instance
    container
      .rebind<UserRepository>(TYPES.UserRepository)
      .toConstantValue(mockedUserRepository);

    // inversify get controller
    _controller = container.get(UserController);
  });

  it('should be defined', () => {
    expect(_controller).toBeDefined();
  });

  it('should register an user', async () => {
    await _controller.newUser({
      body: {
        name: 'emicida',
        email: 'emicida@emi.com',
      },
    } as Request);
  });
});
