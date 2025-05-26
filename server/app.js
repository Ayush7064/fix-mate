const express = require("express");
const app= express();

app.get("/",(req,res)=>{
    res.send("hello from root route");
});


const port=8080;
app.listen(port,()=>{
    console.log(`app is listning to the port ${port}`);
});
