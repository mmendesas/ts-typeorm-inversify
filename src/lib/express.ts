import express, { Request, Response, Application } from 'express';
import cors from 'cors';

const createServer = (): Application => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(express.json());

  app.disable('x-powered-by');

  app.get('/healthcheck', (req: Request, res: Response) => {
    res.json({ message: false });
  });

  return app;
};

export { createServer };
