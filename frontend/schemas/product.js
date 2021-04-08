const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
   pavadinimas: {
       type: String
   },
   kaina: {
       type: Number
   },
   kilmes_salis:{
       type: String
   },
   svoris:{
       type: Number
   },
   aprasymas:{
       type:String
   },
   tiekejas:{
       type:String
   }


});

module.exports = Product = mongoose.model("products",  ProductSchema );
