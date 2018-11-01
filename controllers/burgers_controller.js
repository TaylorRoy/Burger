var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Create the  for the app, and export the  at the end of your file.
// Create the router for the app, and export the router at the end of your file.


// router.get("/todo", function(req, res) {
//     connection.query("SELECT * FROM burger;", function(err, data) {
//       burg
//       if (err) {
//         return res.status(500).end();
//       }

//       res.render("index", { burger: data });
//     });
//   });

  router.get("/todo", function(req, res) {
    burger.selectAll(function(data) {
      
      res.render("index", {burger: data});
    });
  });

// // Delete a todo
// router.delete("/todos/:id", function(req, res) {
//     connection.query("DELETE FROM burger WHERE id = ?", [req.params.id], function(err, result) {
//       if (err) {
//         // If an error occurred, send a generic server failure
//         return res.status(500).end();
//       }
//       else if (result.affectedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();

//     });
//   });


// // Update a todo
// router.put("/todos/:id", function(req, res) {
//     connection.query("UPDATE burger SET devoured = ? WHERE id = ?", [req.body.plan, req.params.id], function(err, result) {
//       if (err) {
//         // If an error occurred, send a generic server failure
//         return res.status(500).end();
//       }
//       else if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       console.log("id",id);
//       res.status(200).end();
//       res.render("index", { burger: data });
//     });
//   });

  module.exports = router;