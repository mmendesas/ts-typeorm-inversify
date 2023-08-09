import * as AllModules from '@/modules';
import {
  createTestingModule,
  rebindToMockedEntities,
} from './create-testing-module';

import { TYPES } from '@/utils/types';

export const setupTestContainer = () => {
  const modules = Object.values(AllModules);

  // identify types
  const repositories: string[] = [];
  const services: string[] = [];

  Object.keys(TYPES).forEach((name) => {
    if (name.endsWith('Repository')) repositories.push(name);
    // else if (name.endsWith('Service')) services.push(name);
  });

  const requiredTypes = [...repositories, ...services];

  const mockedContainer = createTestingModule(...modules);
  const mockedEntities = rebindToMockedEntities(requiredTypes, mockedContainer);

  return { mockedContainer, mockedEntities };
};
