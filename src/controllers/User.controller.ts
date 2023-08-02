import { IUserService } from '@/services/User.service';
import { UserRequestDTO } from '@/utils/types';

export class UserController {
  public constructor(public _service: IUserService) {}

  async createUser(user: UserRequestDTO) {
    return this._service.createUser(user);
  }
}
