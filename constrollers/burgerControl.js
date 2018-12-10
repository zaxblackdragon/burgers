const express = require("express");
const router = express.Router();
const burger = require("../models/burgers.js");

router.get("/", function (req,res) {
    burger.all(function(data) {
        var hbsObject = {
        burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
router.post("/api/burgers", function(req, res) {
    burger.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update(
      {
        sleepy: req.body.sleepy
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );