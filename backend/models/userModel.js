import mongoose from 'mongoose';

const user = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  { timeStamps: true }
);

const User = mongoose.model('User', user);
export default User;
