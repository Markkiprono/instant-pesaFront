const Order = require("../model/order");
const asyncWrapper = require("../middleware/async");
const errorHandlerMiddleware = require("../utils/error-handler");

//create new order
const createOrder = asyncWrapper(async (req, res, next) => {
  const { start, end, mode, amount, place, user, title, email } = req.body;

  const order = await Order.create({
    start,
    end,
    mode,
    allDay: true,
    place,
    amount,
    user,
    title,
    email,
  });
  res.status(201).json({ success: true, order });
});

//get all bookings(admin)

const getAllOrders = asyncWrapper(async (req, res, next) => {
  const orders = await Order.find();

  res.status(200).json(orders);
});

//update order status (admin)
const updateOrder = asyncWrapper(async (req, res, next) => {
  const { id: orderID } = req.params;
  const order = await Order.findById(orderID);
  if (!order) {
    return next(new errorHandlerMiddleware(`No such Booking `, 404));
  }
  if (order.status === "Completed") {
    return next(
      new errorHandlerMiddleware(`You have already Completed this Class`, 400)
    );
  }
  order.status = req.body.status;

  await order.save();
  res.status(200).json({ success: true, order });
});
const schedule = async (req, res, next) => {
  try {
    const booked = await Order.find({ status: "pending" });
    res.status(200).json(booked);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//delete order (admin)
const deleteOrder = asyncWrapper(async (req, res, next) => {
  const { id: orderID } = req.params;
  const order = await Order.findById(orderID);
  if (!order) {
    return next(new errorHandlerMiddleware(`No such Booking `, 404));
  }
  await order.remove();
  res.status(200).json({ success: true });
});

module.exports = {
  createOrder,
  getAllOrders,
  updateOrder,
  deleteOrder,
  schedule,
};
