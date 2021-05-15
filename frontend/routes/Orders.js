const express = require("express");
const orders = express.Router();
const cors = require("cors");

const Order = require("../Schemas/Order");


orders.use(cors());
process.env.SECRET_KEY = "secret";

orders.post("/addOrder", function(req,res){


    const data = {
        Date: Date(),
        Price: req.body.price,
        Product_Id: req.body.product_id,
    }
    console.log("Data: ", data);
    Order.create(data)
    .then((user) => {
      res.json({ status:"Added" });
    })
    .catch((err) => {
      res.send("error: " + err);
    });
     
  
  })

module.exports = orders;