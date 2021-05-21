var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
const mongoose = require("mongoose");
var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mongoURI = "mongodb://localhost:27017/SmartShop";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

var Products = require("./routes/Products");
app.use("/products", Products);

var Auctions = require("./routes/Auction");
app.use("/auctions", Auctions);

var Orders = require("./routes/Orders");
app.use("/orders", Orders);

app.listen(port, function () {
  console.log("Server is running on port: " + port);
});
