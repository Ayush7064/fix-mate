const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ServiceProvider = require("./models/servicer");

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());


// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/fixMate")
  .then(() => console.log("✅ Database Connected!"));

// Root Route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from the root route" });
});

// Service Providers Route
app.get("/providers", async (req, res) => {
  const providers = await ServiceProvider.find({});
  res.json({ data: providers });

});
// Route to handle provider creation
app.post("/create-providers", (req, res) => {
  const data = req.body;
  console.log("✅ Received Data:", data);

});

// Server Listening
const port = 8080;
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
