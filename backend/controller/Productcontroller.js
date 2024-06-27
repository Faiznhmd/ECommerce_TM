import asyncHandler from '../middleware/asyncHandlers.js';
import Product from '../models/productModel.js';

//get product
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json({ data: products });
});

//get product by ID
const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json({ data: product });
  }
  res.status(404);
  throw new Error('Resource Not Found');
});

// create a product

const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/phone.jpg',
    brand: 'Smaple Brand',
    category: 'Sample Category',
    countInStock: 0,
    numsReviews: 0,
    description: 'Sample description',
  });
  const createProduct = await product.save();
  res.status(201).json(createProduct);
});

//update a product

const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Resource Not Found');
  }
});

//DELETE  A PRODUCT

const DeleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await Product.deleteOne({ _id: product._id });
    res.status(200).json({ message: 'Product deleted' });
  } else {
    res.status(404);
    throw new Error('Resource Not Found');
  }
});
export {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  DeleteProduct,
};
