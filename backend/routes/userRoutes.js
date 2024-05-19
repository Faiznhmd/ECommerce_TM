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

router.route('/').post(registerUser).get(GetUser);
router.post('/logout', logoutUser);
router.post('/login', AuthUser);
router.route('/profile').get(GetUserProfile).put(UpdateUserProfile);
router.route('/:id').delete(DeleteUser).get(GetUserById).put(UpdateUser);
export default router;
