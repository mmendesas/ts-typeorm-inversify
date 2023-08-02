import { HttpServerConfig } from '@/lib/http-server-config';
import { SetupIOC } from './lib/setup-ioc';
import { DBService } from './lib/db-service';

export class App {
  async setup() {
    // setup container
    const ioc = new SetupIOC();
    const container = ioc.init();

    // init db
    const db = container.get(DBService);
    await db.connect();

    // create server
    const httpServer = new HttpServerConfig(container);
    httpServer.configure();
    httpServer.start();
  }
}
