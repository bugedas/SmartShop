
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const AuctionSchema = new Schema({

  Start_date: {
    type: Date
  },
  End_data: {
    type: Date
  },
  State: {
    type: String,
    enum: ['neprasidėjes','prasidėjęs','pasibaigęs']
  },
  Winner:{
      type: String
  },
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

module.exports = Auction = mongoose.model("auctions",  AuctionSchema );