import express from 'express';
const router = express.Router();
import {
  AuthUser,
  registerUser,
  logoutUser,
  GetUserProfile,
  UpdateUserProfile,
  GetUser,
  GetUserById,
  DeleteUser,
  UpdateUser,
} from '../controller/UserController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(protect, admin, GetUser);
router.post('/auth', AuthUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .get(protect, GetUserProfile)
  .put(protect, UpdateUserProfile);
router
  .route('/:id')
  .delete(protect, admin, DeleteUser)
  .get(protect, admin, GetUserById)
  .put(protect, admin, UpdateUser);
export default router;
