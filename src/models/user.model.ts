import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});

export const UserModel =
  mongoose.models['User'] || mongoose.model('User', UserSchema);
