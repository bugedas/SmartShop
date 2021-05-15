const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const orderSchema = new Schema({
  Price: {
    type: Number
  },
  Date: {
    type: Date
  },
  Product_Id:{
      type: String
  }
  
});

module.exports = order = mongoose.model("order",  orderSchema );