import asyncHandler from '../middleware/expresshandler.js';
import User from '../models/userModel.js';

const AuthUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('Invalild Email or Password');
  }
});

const registerUser = asyncHandler(async (req, res) => {
  res.send('Register User');
});

const logoutUser = asyncHandler(async (req, res) => {
  res.send('Logout User');
});

const GetUserProfile = asyncHandler(async (req, res) => {
  res.send('Get  User Profile');
});

const UpdateUserProfile = asyncHandler(async (req, res) => {
  res.send('Update  User Profile');
});

const GetUser = asyncHandler(async (req, res) => {
  res.send('Get User');
});

const GetUserById = asyncHandler(async (req, res) => {
  res.send('Get User by id');
});

const DeleteUser = asyncHandler(async (req, res) => {
  res.send('Delete User');
});

const UpdateUser = asyncHandler(async (req, res) => {
  res.send('Update User');
});

export {
  AuthUser,
  registerUser,
  logoutUser,
  GetUserProfile,
  UpdateUserProfile,
  GetUser,
  GetUserById,
  DeleteUser,
  UpdateUser,
};
