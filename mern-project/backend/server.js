const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Database creation established sucessfully!");
});

const exerciseRoute = require("./routes/exercise");
const userRoute = require("./routes/user");
console.log(exerciseRoute);
console.log(userRoute);
app.use("./exercise", exerciseRoute);
app.use("./user", userRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Serve is running on port: ${port}`);
});
