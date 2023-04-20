const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

// const dataObj = new mongoose.Schema({
//   unit: { type: String, required: true },
//   value: { type: Number, required: true },
// });

const productSchema = new mongoose.Schema(
  {
    pName: {
      type: String,
      required: true,
    },
    pDescription: {
      type: String,
      required: true,
    },
    pPrice: {
      type: Number,
      required: true,
    },
    pSold: {
      type: Number,
      default: 0,
    },
    pQuantity: {
      type: Number,
      default: 0,
    },
    pCategory: {
      type: ObjectId,
      ref: "categories",
    },
    pImages: {
      type: Array,
      required: true,
    },
    pOffer: {
      type: String,
      default: null,
    },
    pVariant: {
      type:Array
    },
    pSubpacks: [
      {
        name: String,
        credits: Number,
        offer: Number,
        createdAt: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    pStatus: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Need to specify db for some unknown reason
const myDB = mongoose.connection.useDb("milkwaledb");
const productModel = myDB.model("products", productSchema);
module.exports = productModel;
