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
  },
  Order_Id:{
    type: String
  },
  State:{
    type: String,
    enum: ['laukiama atsiėmimo','nepatvirtintas','laukiama apmokėjimo','atšauktas']
  },
  
});

module.exports = order = mongoose.model("order",  orderSchema );