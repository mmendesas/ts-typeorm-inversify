import {
  controller,
  request,
  httpGet,
  httpPost,
} from 'inversify-express-utils';
import { Request } from 'express';

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
}
