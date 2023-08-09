import { UserRepositoryMock } from './UserRepository.mock';

// export to access from tests
interface IMockedClasses {
  [key: string]: any;
}
export const MockedClasses: IMockedClasses = {
  UserRepositoryMock: UserRepositoryMock,
};

export { UserRepositoryMock };
