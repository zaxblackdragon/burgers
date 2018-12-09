var connection = require("./connection.js");

var showInConsole = function(results) {
    console.log(results);
};
var orm = {
  select: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};
   
   
//    select: function(whatToSelect, tableInput) {
//     var queryString = "SELECT ?? FROM ??";
//     connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
    /*
    dont fully understand this and what happens here?   Translates from object orientation to table orientation
    
  --  INSRTRUCTIONS --
In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

selectAll()
insertOne()
updateOne()

*/

// Export the ORM object in module.exports.
module.exports = orm;