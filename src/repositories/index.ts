import { UserRepository } from './User.repository';

export { UserRepository } from './User.repository';

interface IMockedRepos {
  [key: string]: any;
}

export const MockedRepos: IMockedRepos = {
  UserRepository: UserRepository,
};
