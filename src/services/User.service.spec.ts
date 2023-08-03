import { UserRepository } from '@/repositories/User.repository';
import { UserService } from './User.service';
import DatabaseFake from '@/utils/Database.fake';

describe('[service] - User', () => {
  const service: UserService = new UserService(new UserRepository());
  const userData = {
    name: 'Someone',
    email: 'some@mail.com',
    password: '12344321',
  };

  afterEach(() => {
    DatabaseFake.clear();
  });

  it('should have access to repository', () => {
    expect(service._repo).toBeDefined();
  });

  it('should have method called createUser', () => {
    expect(service.createUser).toBeDefined();
  });

  it('should call createUser from repo', async () => {
    const spy = jest.spyOn(service._repo, 'createUser');
    await service.createUser(userData);

    expect(spy).toHaveBeenCalled();
  });

  it('should return created user', async () => {
    const user01 = await service.createUser(userData);
    const user02 = await service.createUser(userData);

    expect(user01).toEqual({ id: 1, username: 'user 001' });
    expect(user02).toEqual({ id: 2, username: 'user 002' });
  });
});
