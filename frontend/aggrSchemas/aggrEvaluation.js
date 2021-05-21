const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const aggrEvaluationSchema = new Schema({
  _id: {
    type: String
  },
  Rating: {
    type: String
  },
  Count : {
      type : Number
  }
  
});

module.exports = aggrEvaluation = mongoose.model("agrrevaluations",  aggrEvaluationSchema  );