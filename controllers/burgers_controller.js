var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//gets undeovoured(value 0)
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    res.render("index", { burger: data });
  });
});

//adds burgers to undevoured list
router.post("/api/burger", function (req, res) {
  burger.addBurger(req.body.burger_name, 0,
    function (result) {
      res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function (req, res) {
  var id = req.params.id;

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    id, function (result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete("/api/burger/:id", function(req,res){
  var id = req.params.id;
  burger.deleteOne(
    id, function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  )
})


module.exports = router;


