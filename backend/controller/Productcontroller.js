import asyncHandler from '../middleware/expresshandler.js';
import Product from '../models/productModel.js';

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json({ data: products });
});

const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json({ data: product });
  }
  res.status(404);
  throw new Error('Resource Not Found');
});

export { getProducts, getProductsById };
