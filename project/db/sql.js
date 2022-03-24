var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Lakshmi1$",
  port: 3306
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database!");
});

con.on('error', function(err) {
  console.log("[mysql error]",err);
});

module.exports = {
  connection: con
}
