import { Request } from 'express-serve-static-core';

import { UserController } from './User.controller';
import { setupTestContainer } from '@test/lib/setup-test-container';

describe('[controller] - User', () => {
  let _controller: UserController;

  beforeEach(() => {
    // simulate DI (auto define mocked Repositories)
    const { mockedContainer } = setupTestContainer();
    // inversify get controller
    _controller = mockedContainer.get(UserController);
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

    const users = await _controller.getUsers();
    expect(users.length).toEqual(3);
  });
});
