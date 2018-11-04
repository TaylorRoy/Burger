// import orm.js
var orm = require("../config/orm");


// create the code that will call the ORM functions using burger specific input for the ORM. Export at the end of the file.
//select burgers not eaten

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burger", "devoured", 0, function (res) {
      cb(res);
    });
  },
  selectDevoured: function (cb) {
    orm.selectAll("burger", "devoured", 1, function (res) {
      cb(res);
    });
  },
  addBurger: function(name, devoured, cb) {
    console.log("name",name);
    console.log("devoured", devoured);
    orm.insertOne(name, devoured, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne(objColVals, condition, function(res) {
      cb(res);
    });
  }
}

module.exports = burger;