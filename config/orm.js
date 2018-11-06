var connection = require("./connections");

orm = {
    //select all from database
    selectAll: function (cb) {
        var queryString = ("SELECT * FROM burger");
        connection.query(queryString, function (error, result) {
            if (error) throw error;
            cb(result);
        })
    },
    // insert a burger into datebase
    insertOne: function (burger_name, devoured, cb) {
        var queryString = ("INSERT INTO burger(burger_name, devoured) VALUES(?, ?)");
        connection.query(queryString, [burger_name, devoured], function (error, result) {
            if (error) throw error;
            cb(result);
        })
    },
    //Delete burger from database
    deleteOne: function (id, cb) {
        var queryString = ("DELETE FROM burger WHERE id = ?");
        connection.query(queryString, [id], function (error, result) {
            if (error) throw error;
            cb(result);
        })
    },

    updateOne: function(devoured, id, cb) {
        var queryString = ("UPDATE burger SET devoured = ? WHERE id = ?");
        connection.query( queryString, [devoured.devoured, id], function(error, result) {
            if (error) throw error;
            console.log("updateOne result",result)
            cb(result);
        })
    }
}

module.exports = orm;