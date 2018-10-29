var express = require("express");
var mysql = require("mysql");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

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

app.get("/", function(req, res) {
    connection.query("SELECT * FROM burger;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.render("index", { toEat: data });
    });
  });

app.listen(PORT, function () {
    console.log("listening on port " + PORT);
})