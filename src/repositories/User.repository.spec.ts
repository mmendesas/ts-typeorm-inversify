import { UserRepository } from './User.repository';

describe('[repository] User', () => {
  const repo: UserRepository = new UserRepository();
  const userData = {
    name: 'Someone',
    email: 'some@mail.com',
    password: '12344321',
  };

  afterEach(() => {
    repo._db.clear();
  });

  it('should have access to database connection', () => {
    expect(repo._db).toBeDefined();
  });

  it('should have a method called createUser', () => {
    expect(repo.createUser).toBeDefined();
  });

  it('should call method on database when called from repo', async () => {
    const spyCreate = jest.spyOn(repo._db, 'create');
    await repo.createUser(userData);
    expect(spyCreate).toHaveBeenCalledTimes(1);
  });

  it('should return created user', async () => {
    const result = await repo.createUser(userData);
    expect(result.name).toEqual(userData.name);
    expect(result.email).toEqual(userData.email);
  });
});
