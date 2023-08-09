import { Container, ContainerModule } from 'inversify';
import { mock } from 'jest-mock-extended';

import { TYPES } from '@/utils/types';
import { MockedClasses } from '@test/mocks';

export type Constr<T> = new () => T;

/**
 * simulate load modules for test inversify
 * @param modules container modules
 * @returns container
 */
export function createTestingModule(
  ...modules: Constr<ContainerModule>[]
): Container {
  const container = new Container();
  container.load(...modules.map((M) => new M()));
  return container;
}

export function rebindToMockedEntities(
  entities: Array<string>,
  _container: Container,
) {
  return entities.reduce((acc, name) => {
    // mock repos with mockedClasses
    const cName = `${name}Mock`;
    const mockedObject =
      cName in MockedClasses ? new MockedClasses[cName]() : {};

    // create mocked fn based on interface
    const fnMocked = mock<any>(mockedObject);
    _container.rebind(TYPES.UserRepository).toConstantValue(fnMocked);

    // TODO: mock each method (with simple return)
    // Reflect.ownKeys(Object.getPrototypeOf(mockedObject)).forEach(
    //   async (method) => {
    //     if (method !== 'constructor') {
    //       fnMocked[method]?.mockReturnValue(await mockedObject[method]());
    //     }
    //   },
    // );

    return {
      ...acc,
      [`mocked_${name}`]: fnMocked,
    };
  }, {});
}
