const express = require("express");
const app = express();
const port = 22;
const cors = require("cors");
const connectDB = require("./db/config");
const userRoute = require("./routes/user");
const orderRoute = require("./routes/order");
const CreateRoute = require("./routes/token");

const errorHandlerMiddleware = require("./errors/error");
const cookieParser = require("cookie-parser");
connectDB();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true);

  next();
});
app.use(cors());
app.use(errorHandlerMiddleware);

//Routes
app.use("/token", CreateRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/order", orderRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
