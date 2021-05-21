const express = require("express");
const orders = express.Router();
const cors = require("cors");

const Order = require("../Schemas/Order");


orders.use(cors());
process.env.SECRET_KEY = "secret";

orders.post("/addOrder", function(req,res){


    const data = {
        State: "laukiama apmokėjimo",
        Date: Date(),
        Price: req.body.price,
        Product_Id: req.body.product_id,
        Order_Id: req.body.order_id,
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

orders.post("/updateOrder", function (req, res) {

    const filter = {order_id: req.body.order_id} 

    const updateDoc = {
      $set:{
        State: req.body.state,
        Date: Date(),
        Price: req.body.price        
      }
    } 

     Order.updateOne(filter,updateDoc)
         .then((user) => {
           res.json("Updated!");
         })    
  });

module.exports = orders;