var connection = require("./connections");

console.log("hit orm");

orm = {
    //can select on devoured 1(eaten) or 0(not eaten)
    selectAll: function (tableName, colName, colValue, cb) {
        var queryString = ("SELECT * FROM ?? WHERE ?? = ?");
        connection.query(queryString, [tableName, colName, colValue], function (error, result) {
            if (error) throw error;
            // console.log("Result ", result);
            cb(result);
        })
    },
    // insert a burger into datebase
    insertOne: function (burger_name, devoured) {
        var queryString = ("INSERT INTO burger(burger_name, devoured) VALUES(?, ?)");
        connection.query(queryString, [burger_name, devoured], function (error, result) {
            if (error) throw error;
            // console.log("Item added");
            // console.log("added ", result);
        })
    },
    deleteOne: function (tableName, colName, name) {
        var queryString = ("DELETE FROM ?? WHERE ?? = ?");
        connection.query(queryString, [tableName, colName, name], function (error, result) {
            if (error) throw error;
            // console.log("Item deleted");
            // console.log("Deleted ", result)
        })
    }
}
// selectAll()
// insertOne()
// updateOne()

module.exports = orm;