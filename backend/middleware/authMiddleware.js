import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from './expresshandler.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select('-password');
      next();
    } catch (error) {
      throw new Error('Not Authorized ,token failed');
    }
  } else {
    res.status(404);
    throw new Error('Not Authorized,no token');
  }
});

//Admin middleware

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(404);
    throw new Error('Not Authorized as an admin');
  }
};
export { protect, admin };
