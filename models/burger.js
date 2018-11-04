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
  }
},
update: function(objColVals, condition, cb) {
  orm.update("burger", objColVals, condition, function(res) {
    cb(res);
  });


// create: function(cols, vals, cb) {
//   orm.create("cats", cols, vals, function(res) {
//     cb(res);
//   });
// },
// orm.selectAllUndevoured("burger", "devoured", 0, function(result){
//     console.log(result);
//   });

//   //add burger with undevoured value 0
//   orm.insertOne("guacamole burger", 0);

//   //delete burger from db
//   orm.deleteOne("burger", "burger_name", "bacon burger");
module.exports = burger;