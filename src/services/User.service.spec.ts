import { mock } from 'jest-mock-extended';

import { UserRepository } from '@/repositories/User.repository';
import { UserService } from './User.service';
import { createTestingModule } from '@test/lib/create-testing-module';
import { UserModule } from '@/modules';
import { TYPES } from '@/utils/types';
import { UserRepositoryMock } from '@test/mocks';

describe('[service] - User', () => {
  let _service: UserService;
  const mockedUserRepository = mock<UserRepository>(new UserRepositoryMock());

  beforeEach(() => {
    // simulate inversify
    const _container = createTestingModule(UserModule);

    // mock repos
    _container
      .rebind<UserRepository>(TYPES.UserRepository)
      .toConstantValue(mockedUserRepository);

    _service = _container.get(TYPES.UserService);
  });

  it('should be defined', () => {
    expect(_service).toBeDefined();
  });

  it('GET /users', async () => {
    const users = await _service.getUsers();
    expect(users.length).toBe(2);
  });

  it('GET /users/:id', async () => {
    const res = await _service.getUser('1');
    expect(res.name).toEqual('Ted');
  });

  it('PUT /users/:id', async () => {
    const before = await _service.getUser('1');
    expect(before.name).toEqual('Ted');

    // action
    const after = await _service.updateUser('1', { name: 'another name' });
    expect(after.name).toEqual('another name');
  });

  it('DELETE /users/:id', async () => {
    const before = await _service.getUsers();
    expect(before.length).toEqual(2);

    await _service.delete('1');
    const after = await _service.getUsers();
    expect(after.length).toEqual(1);
  });
});
