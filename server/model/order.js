const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  allDay: {
    type: Boolean,
    required: true,
    default: true,
  },
  email: {
    type: String,
    required: true,
  },
  place: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date().toLocaleDateString(),
  },
});
module.exports = mongoose.model("Booking", bookingSchema);
