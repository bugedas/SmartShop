
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
  Name: {
    type: String
  },
  Price: {
    type: Number
  },
  Made_by: {
    type: String

  },
  Weight: {
    type: Number

  },
  Description: {
    type: String

  },
  Suplier: {
    type: String

  },
});

module.exports = Product = mongoose.model("products",  ProductSchema );