import { UserRepository } from '@/repositories/User.repository';
import { UserService } from './User.service';

describe('[service] - User', () => {
  const service: UserService = new UserService(new UserRepository());

  afterEach(() => {
    service._repo._db.clear();
  });

  it('should have access to repository', () => {
    expect(service._repo).toBeDefined();
  });

  it('should have method called createUser', () => {
    expect(service.createUser).toBeDefined();
  });

  it('should call createUser from repo', async () => {
    const spy = jest.spyOn(service._repo, 'createUser');
    await service.createUser({ username: 'Someone' });

    expect(spy).toHaveBeenCalled();
  });

  it('should return created user', async () => {
    const user01 = await service.createUser({ username: 'user 001' });
    const user02 = await service.createUser({ username: 'user 002' });

    expect(user01).toEqual({ id: 1, username: 'user 001' });
    expect(user02).toEqual({ id: 2, username: 'user 002' });
  });
});
