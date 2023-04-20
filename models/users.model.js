const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userRole: {
      type: Number,
      default: 0,
      // By default 0 for customer signup
      // 1 for admin signup
      required: true,
    },
    phoneNumber: {
      type: Number,
    },
    userImage: {
      type: String,
      default: "user.png",
    },
    verified: {
      type: String,
      default: false,
    },
    secretKey: {
      type: String,
      default: null,
    },
    wishlist: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
      },
    ],
    history: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

// Need to specify db for some unknown reason
const myDB = mongoose.connection.useDb("milkwaledb");
const userModel = myDB.model("users", userSchema);
module.exports = userModel;
