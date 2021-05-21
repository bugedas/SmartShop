const express = require("express");
const auctions = express.Router();
const cors = require("cors");

const Product = require("../Schemas/Product");

const Auction = require("../Schemas/Auction");
var crypto = require("crypto");

auctions.use(cors());
process.env.SECRET_KEY = "secret";

auctions.post("/addAuction", function(req,res){

    var id = crypto.randomBytes(20).toString('hex');


    const Auctiondata={
        State: "neprasidėjes",
        Name: req.body.name,
        StartPrice: req.body.price,
        Price: req.body.price,
        Made_by: req.body.madeBy,
        Weight: req.body.weight,
        Description: req.body.description,
        Suplier: req.body.supplier,
    }
    console.log("Data: ", Auctiondata);
    Auction.create(Auctiondata)
    .then((user) => {
      res.json({ status:"Added" });
    })
    .catch((err) => {
      res.send("error: " + err);
    }); 
  
  })

  auctions.post("/getAuctions", function(req,res){

    
    Auction.find({
    })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        console.log("error: ", daerrorta);
      });
     
  
  })

  auctions.post("/getAuctionById", function(req,res){

    Auction.findOne({
      _id : req.body.id
    })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        console.log("error: ", daerrorta);
      });
    })
    
    auctions.post("/deleteAuction", function(req,res){

        const data = {
          delId : req.body.id
        }
    
        Auction.deleteOne({_id:data.delId})
        .then((user) => {
          res.json({ status:"Deleted!" });
        })
        .catch((err) => {
          res.send("error: " + err);
        });
         
      
      })

      auctions.post("/updateAuction", function (req, res) {

        const filter = {_id: req.body.id} 
    
        const updateDoc = {
          $set:{
            StartPrice: req.body.startPrice,
            Name: req.body.name,
            Price: req.body.price,
            MadeBy: req.body.madeBy,
            Weight: req.body.weight,
            Description: req.body.description,
            Suplier: req.body.supplier,
            State: req.body.state,
          }
        }
     
    
         Auction.updateOne(filter,updateDoc)
             .then((user) => {
               res.json("Updated!");
             })
       
      
      });
module.exports = auctions;