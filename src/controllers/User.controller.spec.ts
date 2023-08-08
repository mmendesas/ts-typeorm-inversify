import { mock } from 'jest-mock-extended';

import { UserRepository } from '@/repositories/User.repository';
import { UserController } from './User.controller';
import { UserModule } from '@/modules/User.module';

import { createTestingModule } from '@test/lib/create-testing-module';
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

  it('GET /users', async () => {
    const users = await _controller.getUsers();
    expect(users.length).toEqual(2);
  });

  it('POST /users', async () => {
    await _controller.newUser({
      body: {
        name: 'emicida',
        email: 'emicida@emi.com',
      },
    } as Request);
  });
});
