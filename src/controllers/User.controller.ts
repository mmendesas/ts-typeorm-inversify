import {
  controller,
  request,
  response,
  httpGet,
  httpPost,
  httpPut,
  httpDelete,
} from 'inversify-express-utils';

import { Request, Response } from 'express';

import { UserService } from '@/services/User.service';

@controller('/users')
export class UserController {
  public constructor(public _userService: UserService) {}

  @httpGet('/')
  async index() {
    return this._userService.getAll();
  }

  @httpGet('/:id')
  async findById(@request() req: Request) {
    return this._userService.findById(req.params.id);
  }

  @httpPost('/')
  async createUser(@request() req: Request) {
    const { name, email, password } = req.body;

    return this._userService.createUser({
      name,
      email,
      password,
    });
  }

  @httpPut('/:id')
  async updateOne(@request() req: Request) {
    const { name } = req.body;

    return this._userService.updateOne(req.params.id, { name });
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
