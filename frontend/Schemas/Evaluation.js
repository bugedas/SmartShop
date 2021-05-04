
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productEvaluationSchema = new Schema({
  Rating: {
    type: Number
  },
  Comment: {
    type: String
  },
  Date: {
    type: Date
  },
  Product_Id:{
      type: String
  }
  
});

module.exports = productEvaluation = mongoose.model("productevaluations",  productEvaluationSchema );