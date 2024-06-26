import asyncHandler from '../middleware/asyncHandlers.js';
import Order from '../models/orderModel.js';

//create new order
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    itemsPrice,
    paymentMethod,
    shippingAddress,
    shippingPrice,
    taxPrice,
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
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.params.id,
      status: req.body.status,
      update_times: req.body.update_times,
      email_address: req.body.payer.email_address,
    };
    const updatedOrder = await order.save();
    res.status(200).json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order Not Found');
  }
});

//update order to deleivered

const updateOrderToDeleivered = asyncHandler(async (req, res) => {
  res.send('Update order to deleivered');
});

//get all orders(admin)
const getAllOrder = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name');
  res.status(200).json(orders);
});

export {
  addOrderItems,
  getMyOrders,
  getAllOrder,
  getOrderByID,
  updateOrderToPaid,
  updateOrderToDeleivered,
};
