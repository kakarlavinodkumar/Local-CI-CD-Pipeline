var mysql = require('mysql');

var con = mysql.createConnection({
  host: "svc-9af7218e-ddac-44e0-953c-764082401852-ddl.aws-virginia-3.svc.singlestore.com",
  user: "admin",
  password: "Lakshmi1$"
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
