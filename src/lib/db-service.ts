import { injectable } from 'inversify';
import mongoose from 'mongoose';

import { UserModel } from '@/models/User.model';

@injectable()
export class DBService {
  private _uri: string;
  private _db: typeof mongoose | undefined;

  constructor() {
    this._uri = process.env.DB_URI || '';
  }

  async connect() {
    this._db = await mongoose.connect(this._uri);
    console.log('>> connected to DB');
  }

  get user() {
    return UserModel;
  }
}
