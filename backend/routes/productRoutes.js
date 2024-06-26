import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  createProduct,
  getProducts,
  getProductsById,
  updateProduct,
  DeleteProduct,
  createProductReviews,
  getTopProducts,
} from '../controller/Productcontroller.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.get('/top', getTopProducts);
router
  .route('/:id')
  .get(getProductsById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, DeleteProduct);
router.route(':/id/reviews').post(protect, createProductReviews);

export default router;
