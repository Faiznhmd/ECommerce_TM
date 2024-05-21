import asyncHandler from '../middleware/expresshandler.js';
import Order from '../models/orderModel.js';

//create new order
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No Order items');
  } else {
    const order = new Order({
      orderItems: orderItems.map((x) => ({
        ...x,
        product: x._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createOrder = await order.save();
    res.status(201).json(createOrder);
  }
});

//get logged in user orders

const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json(orders);
});

//get order by id
const getOrderByID = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error('Order not Found');
  }
});

//update order to paid

const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send('Update order to paid');
});

//update order to deleivered

const updateOrderToDeleivered = asyncHandler(async (req, res) => {
  res.send('Update order to deleivered');
});

//get all orders
const getAllOrder = asyncHandler(async (req, res) => {
  res.send('get order');
});

export {
  addOrderItems,
  getMyOrders,
  getAllOrder,
  getOrderByID,
  updateOrderToPaid,
  updateOrderToDeleivered,
};
