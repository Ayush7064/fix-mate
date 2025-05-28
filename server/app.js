const express = require("express");
const app= express();
const mongoose = require('mongoose');
const dummyServiceProviders= require("./init/service.data");




mongoose.connect('mongodb://127.0.0.1:27017/fixMate')
  .then(() => console.log('Databse Connected!'));





app.get("/",(req,res)=>{
    res.send("hello from root route");
});


const port=8080;
app.listen(port,()=>{
    console.log(`app is listning to the port ${port}`);
});
