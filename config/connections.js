var mysql = require("mysql");


var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
    hots: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db"
})

connection.connect(function (error, result) {
    if (error) throw error;
    console.log("connected as ID:" + connection.threadId);
})

module.exports = connection;