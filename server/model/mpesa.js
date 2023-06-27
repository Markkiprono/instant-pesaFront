const mongoose = require("mongoose");

const mpesaSchema = mongoose.Schema({
  phone: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Mpesa", mpesaSchema);
