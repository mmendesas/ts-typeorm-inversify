import cors from 'cors';
import express, { Application, NextFunction } from 'express';
import httpStatus from 'http-status';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';

const port = process.env.PORT || 3001;

export class HttpServerConfig {
  private _container: Container;
  private _server: Application | undefined;

  constructor(container: Container) {
    this._container = container;
  }

  public configure(): void {
    const server = new InversifyExpressServer(this._container)
      .setConfig((app) => {
        this._configureMiddlewares(app);
      })
      .setErrorConfig((app) => {
        this._configureErrorMiddlewares(app);
      })
      .build();

    this._server = server;
  }

  public start() {
    this._server?.listen(port, () => {
      console.log(`\n>> [ONLINE] listening on HTTP port ${port}`);
    });
  }

  _configureMiddlewares(expressApp: Application) {
    // default json setup
    expressApp.use(express.urlencoded({ extended: true }));
    expressApp.use(express.json());

    expressApp.use(cors());

    expressApp.disable('x-powered-by');

    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      expressApp.use(require('morgan')('dev'));
    }

    expressApp.get(
      '/healthcheck',
      (req: express.Request, res: express.Response) => {
        res.status(200).json({ status: 'ok' });
      },
    );
  }
  _configureErrorMiddlewares(expressApp: Application) {
    // handle 404
    expressApp.use((req: express.Request, res: express.Response) => {
      res.status(httpStatus.NOT_FOUND).json('not found');
    });

    // handle everything else (TODO)
    expressApp.use(errorHandler);
  }
}

function errorHandler(
  err: any,
  req: express.Request,
  res: express.Response,
  next: NextFunction,
) {
  err.status = err.status || 'error';
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });

  next();
}
