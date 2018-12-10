const express = require("express");
const PORT = process.env.PORT || 3000;
// const fs = require("fs");
const app = express();

const orm = require("./config/orm.js");
const showInConsole = function(results) {
  console.log(results);
};

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes go here:



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });