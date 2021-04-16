const express = require("express");
const products = express.Router();
const cors = require("cors");

const Product = require("../Schemas/Product");

products.use(cors());

process.env.SECRET_KEY = "secret";

products.post("/addProduct", function(req,res){


    const data = {
        Name: req.body.name,
        Price: req.body.price,
        MadeBy: req.body.madeBy,
        Weight: req.body.weight,
        Description: req.body.description,
        Supplier: req.body.supplier,
    }
    console.log("Data: ", data);
    Product.create(data)
    .then((user) => {
      res.json({ status:"Added" });
    })
    .catch((err) => {
      res.send("error: " + err);
    });
     
  
  })

  products.post("/getProduct", function(req,res){

    
    Product.find({
    })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        console.log("error: ", daerrorta);
      });
     
  
  })

  products.post("/deleteProduct", function(req,res){

    const data = {
      delId : req.body.id
    }

    Product.deleteOne({_id:data.delId})
    .then((user) => {
      res.json({ status:"Deleted!" });
    })
    .catch((err) => {
      res.send("error: " + err);
    });
     
  
  })


 products.post("/updateProduct", function (req, res) {

    const filter = {_id: req.body.id} 

    const updateDoc = {
      $set:{
        Name: req.body.name,
        Price: req.body.price,
        MadeBy: req.body.madeBy,
        Weight: req.body.weight,
        Description: req.body.description,
        Supplier: req.body.supplier,
      }
    }
 

     Product.updateOne(filter,updateDoc)
         .then((user) => {
           res.json("Updated!");
         })
   
  
  });




module.exports = products;