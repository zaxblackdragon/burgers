var express = require("express");
var PORT = process.env.PORT || 3000;
// const fs = require("fs");
var app = express();

var orm = require("./config/orm.js");
var showInConsole = function(results) {
  console.log(results);
};

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes go here:
orm.select("burgers", showInConsole);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });