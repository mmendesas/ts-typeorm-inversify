import { UserRepository } from './User.repository';

describe('[repository] User', () => {
  const repo: UserRepository = new UserRepository();

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
    await repo.createUser({ username: 'Someone' });
    expect(spyCreate).toHaveBeenCalledTimes(1);
  });

  it('should return created user', async () => {
    const expected = { id: 1, username: 'Someone Somewhere' };
    const result = await repo.createUser({ username: 'Someone Somewhere' });
    expect(result).toEqual(expected);
  });
});
