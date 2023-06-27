const express = require("express");
const router = express.Router();
const {
  createToken,
  postStk,
  userResponse,
  userCallback,
  viewTransactions,
} = require("../controller/token");
router.get("/", viewTransactions);
router.post("/", createToken, postStk);
router.post("/call_back", userCallback);
router.post("/userResponse", createToken, userResponse);
module.exports = router;
