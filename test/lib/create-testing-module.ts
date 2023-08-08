import { Container, ContainerModule } from 'inversify';

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
