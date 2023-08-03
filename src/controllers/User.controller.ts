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
  public constructor(public _service: UserService) {}

  @httpGet('/')
  async index() {
    return this._service.getAll();
  }

  @httpPost('/')
  async createUser(@request() req: Request) {
    const { name, email, password } = req.body;

    return this._service.createUser({
      id: 'sdf',
      name,
      email,
      password,
      role: 'user',
    });
  }
}
