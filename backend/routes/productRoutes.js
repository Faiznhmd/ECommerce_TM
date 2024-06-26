import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  createProduct,
  getProducts,
  getProductsById,
  updateProduct,
} from '../controller/Productcontroller.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductsById).put(protect, admin, updateProduct);

export default router;
