var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql3.freesqldatabase.com",
  user: "sql3469084",
  password: "e4K4ybAlen"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database!");
});

module.exports = {
  connection: con
}
