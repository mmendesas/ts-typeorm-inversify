import {
  controller,
  request,
  response,
  httpGet,
  httpPost,
  httpPut,
  httpDelete,
  interfaces,
} from 'inversify-express-utils';

import { Request, Response } from 'express';

import { UserService } from '@/services/User.service';
import { inject } from 'inversify';
import { IUser, TYPES } from '@/utils/types';

@controller('/users')
export class UserController implements interfaces.Controller {
  constructor(@inject(TYPES.UserService) private _userService: UserService) {}

  @httpGet('/')
  async getUsers(): Promise<IUser[]> {
    return this._userService.getUsers();
  }

  @httpGet('/:id')
  async getUser(@request() req: Request): Promise<IUser> {
    return this._userService.getUser(req.params.id);
  }

  @httpPost('/')
  async newUser(@request() req: Request) {
    const { name, email, password } = req.body;

    return this._userService.newUser({
      name,
      email,
      password,
    });
  }

  @httpPut('/:id')
  async updateUser(@request() req: Request): Promise<IUser> {
    return this._userService.updateUser(req.params.id, req.body);
  }

  @httpDelete('/:id')
  async delete(@request() req: Request, @response() res: Response) {
    await this._userService.delete(req.params.id);
    return res.status(200).json({
      data: {
        message: 'Item deleted',
      },
    });
  }
}
