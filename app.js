// const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
require("dotenv").config();

// main().catch((err) => console.log(err));

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 8,
  review: "Not bad",
});

// fruit.save();

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", peopleSchema);

const person = new Person({
  name: "John",
  age: 37,
});

// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "Perfect fruit",
// });

// const orange = new Fruit({
//   name: "Orange",
//   rating: 7,
//   review: "Kinda Sour",
// });

// const banana = new Fruit({
//   name: "Banana",
//   rating: 7,
//   review: "Not a big fan",
// });

// Fruit.insertMany([kiwi, orange, banana])
//   .then((result) => {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Fruit.find()
  .then((fruits) => {
    mongoose.connection.close();
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
    // console.log(fruits);
  })
  .catch((err) => {
    console.log(err);
  });

// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://samueladelowo92:sirmuhell@clustertest.xk26yvm.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
