const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Flexible schema
const DataSchema = new mongoose.Schema({}, { strict: false });
const Data = mongoose.model("Data", DataSchema);

// Root endpoint
app.get("/", (req, res) => {
  res.send(`Welcome to the Node.js app! The current time is: ${new Date()}`);
});

// POST /data
app.post("/data", async (req, res) => {
  await Data.create(req.body);
  res.status(201).json({ status: "Data inserted" });
});

// GET /data
app.get("/data", async (req, res) => {
  const data = await Data.find({}, { _id: 0 });
  res.status(200).json(data);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
