const express = require("express");
const app= express();
const mongoose = require('mongoose');
const dummyServiceProviders= require("./service.data");
const serviceProvider= require("../models/servicer");
const dummyUser= require("./user.data");
const User= require("../models/user");
const ServiceProvider = require("../models/servicer");



mongoose.connect('mongodb://127.0.0.1:27017/fixMate')
  .then(() => console.log('Databse Connected!'));

app.get("/insert-dummy-data", async (req, res) => {
  try {
    await serviceProvider.insertMany(dummyServiceProviders);
    res.status(200).json({ message: "Dummy data inserted successfully!" });
  } catch (error) {
    console.error("Insert error:", error);
    res.status(500).json({ error: "Failed to insert dummy data" });
  }
});
app.get("/insert-dummy-user", async (req, res) => {
  try {
    const user = new User(dummyUser);
    await user.save();
    console.log("User created");

    res.status(201).json({ message: "Dummy user created successfully!" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create dummy user" });
  }
});

async function deleteService(){
    const res= await ServiceProvider.insertMany(dummyServiceProviders);
    console.log("deleted!");
}

deleteService();


const port=8080;
app.listen(port,()=>{
    console.log(`app is listning to the port ${port}`);
});


