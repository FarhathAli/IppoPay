const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/register");

mongoose
  .connect("mongodb://0.0.0.0:27017/Project")
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
  });

// Set up the server
const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRoute);

// Start the server
app.listen(4000, () => {
    console.log('Server started on port 4000');
});