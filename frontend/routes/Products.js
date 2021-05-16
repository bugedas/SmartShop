const express = require("express");
const products = express.Router();
const cors = require("cors");

const Product = require("../Schemas/Product");
const Order = require("../Schemas/Order");
const productEvaluation = require("../Schemas/Evaluation");
const aggrEvaluation = require("../aggrSchemas/aggrEvaluation");
const aggrOrder = require("../aggrSchemas/aggrOrder");


products.use(cors());
process.env.SECRET_KEY = "secret";

products.post("/addProduct", function(req,res){


    const data = {
        Name: req.body.name,
        Price: req.body.price,
        Made_by: req.body.madeBy,
        Weight: req.body.weight,
        Description: req.body.description,
        Suplier: req.body.supplier,
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


  
  products.post("/getProductById", function(req,res){

    Product.findOne({
      _id : req.body.id
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
 products.post("/addProductEvaluation", function(req,res){


    const data = {
        Rating: req.body.rating,
        Comment: req.body.comment,
        Date: Date(),
        Product_Id: req.body.id
    }
    console.log("Data: ", data);
    productEvaluation.create(data)
    .then((user) => {
      res.json({ status:"Added" });
    })
    .catch((err) => {
      res.send("error: " + err);
    });
     
  
  })


  products.post("/getProductEvalById", function(req,res){

    productEvaluation.find({
      Product_Id: req.body.id
    })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        console.log("error: ", daerrorta);
      });
     
  
  })


  products.post("/RecommendedProducts", function(req,res){


    Product.aggregate([{$project:{_id:{$toString:"$_id"},Name : "$Name",Price : "$Price",Made_by : "$Made_by",Weight : "$Weight",Description : "$Description",Suplier:"$Suplier"}},
    {$lookup:{from: "agrrevaluations", localField: "_id",foreignField:"_id",as:"evaluation"}},
    {$lookup:{from: "agrrorders", localField: "_id",foreignField:"_id",as:"order"}}])
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });

    
    aggrEvaluation.deleteMany()
    .then(() => {
      productEvaluation.aggregate([{$group: {_id:"$Product_Id", Rating: {$avg:"$Rating"},Count : {$sum :1} }}])
      .then((_id,Rating,Count) => {
        aggrEvaluation.create(_id,Rating,Count)
      })
      .catch((error) => {
        console.log("error: ", daerrorta);
      });
    }) 
   

     aggrOrder.deleteMany()
    .then(() => {
      Order.aggregate([{$group: {_id:"$Product_Id",Count : {$sum :1} }}])
      .then((_id,Count) => {
        aggrOrder.create(_id,Count)
      })
      .catch((error) => {
        console.log("error: ", daerrorta);
      });
    }) 
     
  
  })




module.exports = products;