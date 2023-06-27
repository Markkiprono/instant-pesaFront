const mongoose = require("mongoose");
const mongoDb =
  "mongodb+srv://instantPesa:Securex@cluster0.qkkcyvg.mongodb.net/test";
const connectDB = async () => {
  try {
    await mongoose.connect(mongoDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await mongoose.set("strictQuery", true);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
