const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: process.env.PORT || 8889,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return
    } else {
        console.log("connected as id " + connection.threadId);
    }
});

module.exports = connection;