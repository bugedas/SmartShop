
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aggrOrderSchema = new Schema({
  _id: {
    type: String
  },
  Count : {
      type : Number
  }
  
});

module.exports = aggrOrder = mongoose.model("agrrorders",  aggrOrderSchema  );