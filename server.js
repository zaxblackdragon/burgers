const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes go here:


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });