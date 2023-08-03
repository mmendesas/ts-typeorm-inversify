import { injectable } from 'inversify';
import mongoose from 'mongoose';

import { UserSchema } from '@/models/user.model';

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
    return this._db?.model('User', UserSchema);
  }
}
