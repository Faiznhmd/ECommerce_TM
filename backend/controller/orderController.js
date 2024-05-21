import asyncHandler from '../middleware/expresshandler.js';
import Order from '../models/orderModel.js';

//create new order
const addOrderItems = asyncHandler(async (req, res) => {
  res.send('add order items');
});

//get logged in user orders

const getMyOrders = asyncHandler(async (req, res) => {
  res.send('get my orders');
});

//get order by id
const getOrderByID = asyncHandler(async (req, res) => {
  res.send('get order by ID');
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
