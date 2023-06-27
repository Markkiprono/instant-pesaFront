const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const crypto = require("crypto");
const JwtSecret = "dhfnldkjgfhkdkhdfjnhnkjhvdkpifndgpigjghigp9jhmfe";
const JwtExpire = "3d";
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    trim: true,
    maxlength: [80, "Name can not be more than 80 characters"],
    minlength: [3, "Name can not be less than 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    trim: true,
    validate: [validator.isEmail, "Please add a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: [6, "Password can not be less than 6 characters"],
  },

  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetPasswordToken: String,
  resetPasswordTime: Date,
});
//static signup method
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});
//static login method
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, JwtSecret, {
    expiresIn: JwtExpire,
  });
};
//compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//forgot password
userSchema.methods.getResetToken = function () {
  // Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  //hashing and adding reset Passwordtoken to useschema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordTime = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
