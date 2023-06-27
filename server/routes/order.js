const express = require("express");
const router = express.Router();
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middleware/isAuthenticated");

const {
  createOrder,
  schedule,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controller/order");
router.route("/schedule").get(schedule);
router.route("/new").post(isAuthenticatedUser, createOrder);
router.route("/").get(getAllOrders);
router.route("/:id").put(updateOrder).delete(deleteOrder);
module.exports = router;
