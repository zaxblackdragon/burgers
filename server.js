const express = require("express");
const PORT = process.env.PORT || 3000;
// const fs = require("fs");
const app = express();

//const orm = require("./config/orm.js");
// const showInConsole = function(results) {
//   console.log(results);
// };

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars")
// Routes go here:

const routes = require("./constrollers/burgerControl.js");

app.use(routes);


app.listen(PORT, function() {
    console.log("YAY!!! App listening on PORT " + PORT);
  });