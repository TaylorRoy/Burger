var connection = require("./connections");

console.log("hit orm");

orm = {
    //can select on devoured 1(eaten) or 0(not eaten)
    selectAll: function (cb) {
        var queryString = ("SELECT * FROM burger");
        connection.query(queryString, function (error, result) {
            if (error) throw error;
            // console.log("Result ", result);
            cb(result);
        })
    },
    // selectDevoured: function (tableName, colName, colValue, cb) {
    //     var queryString = ("SELECT * FROM ?? WHERE ?? = ?");
    //     connection.query(queryString, [tableName, colName, colValue], function (error, result) {
    //         if (error) throw error;
    //         // console.log("Result ", result);
    //         cb(result);
    //     })
    // },
    // insert a burger into datebase
    insertOne: function (burger_name, devoured, cb) {
        var queryString = ("INSERT INTO burger(burger_name, devoured) VALUES(?, ?)");
        connection.query(queryString, [burger_name, devoured], function (error, result) {
            if (error) throw error;
             console.log("Item added");
             console.log("added ", result);
            cb(result);
        })
    },
    deleteOne: function (tableName, colName, name) {
        var queryString = ("DELETE FROM ?? WHERE (?? = ?)");
        connection.query(queryString, [tableName, colName, name], function (error, result) {
            if (error) throw error;
            // console.log("Item deleted");
            // console.log("Deleted ", result)
        })
    },

    updateOne: function(devoured, id, cb) {
        console.log(devoured, id);
        var queryString = ("UPDATE burger SET devoured = ? WHERE id = ?");
        connection.query( queryString, [devoured.devoured, id], function(error, result) {
            if (error) throw error;
            console.log("updateOne result",result)
            cb(result);
        })
    }
}

// UPDATE `burger_db`.`burger` SET `devoured` = '1' WHERE (`id` = '4');
// selectAll()
// insertOne()
// updateOne()

module.exports = orm;