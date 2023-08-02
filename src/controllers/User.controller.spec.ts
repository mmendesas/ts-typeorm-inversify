import { UserController } from './User.controller';
import { IUserService } from '@/services/User.service';

class MockedUserService implements IUserService {
  public readonly repo: unknown;
  async createUser(data: unknown) {
    return data;
  }
}

describe('[controller] - User', () => {
  const controller: UserController = new UserController(
    new MockedUserService(),
  );

  it('should have access to service', () => {
    expect(controller._service).toBeDefined();
  });

  it('should have method called createUser', () => {
    expect(controller.createUser).toBeDefined();
  });

  it('should call method from service', async () => {
    const spy = jest.spyOn(controller._service, 'createUser');
    await controller.createUser({ username: 'someone' });
    expect(spy).toHaveBeenCalled();
  });

  it('should return created user', async () => {
    const user001 = await controller.createUser({ username: 'user001' });
    const user002 = await controller.createUser({ username: 'user002' });

    expect(user001).toEqual({ username: 'user001' });
    expect(user002).toEqual({ username: 'user002' });
  });
});
