import { HttpServerConfig } from '@/lib/http-server-config';
import { SetupIOC } from './lib/setup-ioc';

export class App {
  async setup() {
    // setup container
    const ioc = new SetupIOC();
    const container = ioc.init();

    // create server
    const httpServer = new HttpServerConfig(container);
    httpServer.configure();
    httpServer.start();
  }
}
