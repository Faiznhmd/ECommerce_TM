import asyncHandler from '../middleware/expresshandler.js';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

const AuthUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

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
//register
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userexist = await User.findOne({ email });

  if (userexist) {
    res.status(400);
    throw new Error('User Already exist');
  }

  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expiresIn: new Date(0),
  });
  res.status(200).json({ message: 'Logout Successfully' });
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
