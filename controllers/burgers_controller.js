var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//gets undeovoured(value 0)
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    res.render("index", { burger: data });
  });
});
// //gets devoured(value 1)
// router.get("/", function (req, res) {
//   burger.selectDevoured(function (data) {
//     res.render("index", { burger: data });

//
//adds burgers to undevoured list
router.post("/api/burger", function (req, res) {
  console.log("body", req.body);
  // console.log("res",res)
  burger.addBurger(req.body.burger_name, 0,
    function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function (req, res) {
  var id = req.params.id;

  console.log("id is here", id);
  console.log("devoured", req.body.devoured);
  // console.log("put response",res);
  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    id, function (result) {
      console.log("put result", result);
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});


module.exports = router;


