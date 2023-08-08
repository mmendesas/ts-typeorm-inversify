import {
  Severity,
  getModelForClass,
  modelOptions,
  prop,
} from '@typegoose/typegoose';

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class User {
  @prop()
  name: string | undefined;

  @prop({ unique: true, required: true })
  email: string | undefined;

  @prop({ default: 'user' })
  role: string | undefined;

  @prop({ type: String, required: true, minlength: 6, maxlength: 32 })
  password: string | undefined;
}

export const UserModel = getModelForClass(User);
