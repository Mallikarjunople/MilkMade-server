const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    cartItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        quantity: { type: Number, default: 1 },
        unit: String,
        value: String,
      },
    ],
    total_cost: {
      type: Number,
      default: 0,
    },
  },

  { timestamps: true }
);

// Need to specify db for some unknown reason
const myDB = mongoose.connection.useDb("milkwaledb");
module.exports = myDB.model("cart", cartSchema);
