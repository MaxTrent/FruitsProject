// const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect("mongodb://localhost/27017/fruitsDB");

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://samueladelowo92:sirmuhell@clustertest.xk26yvm.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
