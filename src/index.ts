// import 'tsconfig-paths/register';
import 'dotenv/config';
import 'reflect-metadata';

import { App } from './app';

console.clear();

import '@/controllers/User.controller';

(async () => {
  try {
    new App().setup();
  } catch (err) {
    console.error('[server] Something went wrong', err);
  }
})();
