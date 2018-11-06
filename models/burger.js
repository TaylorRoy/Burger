var orm = require("../config/orm");

var burger = {
  selectAll: function (cb) {
    orm.selectAll(function (res) {
      cb(res);
    });
  },
  addBurger: function(name, devoured, cb) {
    orm.insertOne(name, devoured, function(res) {
      cb(res);
    });
  },
  updateOne: function(devoured, id, cb) {
    orm.updateOne(devoured, id, function(res) {
      cb(res);
    });
  },
  deleteOne: function(id, cb){
    orm.deleteOne(id, function(res){
      cb(res);
    })
  }
}

module.exports = burger;