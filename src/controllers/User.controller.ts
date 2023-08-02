import { controller, httpGet, httpPost } from 'inversify-express-utils';

import { UserService } from '@/services/User.service';
import { UserRequestDTO } from '@/utils/types';

@controller('/users')
export class UserController {
  public constructor(public _service: UserService) {}

  @httpPost('/')
  async createUser(user: UserRequestDTO) {
    return this._service.createUser(user);
  }

  @httpGet('/')
  async getAll() {
    return this._service.getAll();
  }
}
