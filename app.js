const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/nodeapitest";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());

const alienRouter = require("./router");
app.use("/tests", alienRouter);

app.listen(4000, () => {
  console.log("Server started");
});
