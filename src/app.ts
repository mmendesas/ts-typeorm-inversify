import { createServer } from '@config/express';
import http from 'http';

const port = process.env.PORT || 3001;

export class App {
  async setup() {
    const expressApp = createServer();
    const server = http.createServer(expressApp);

    server.listen(port, () => {
      console.log(`[server] Listenning on http://localhost:${port}`);
    });
  }
}
