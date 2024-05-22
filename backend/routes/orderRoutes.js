import express from 'express';
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getAllOrder,
  getOrderByID,
  updateOrderToPaid,
  updateOrderToDeleivered,
} from '../controller/orderController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems).get(protect, admin, getAllOrder);

router.route('/mine').get(protect, getMyOrders);

router.route('/:id').get(protect, getOrderByID);

router.route('/:id/pay').put(protect, updateOrderToPaid);

router.route('/:id/deliver').put(protect, admin, updateOrderToDeleivered);

export default router;
