const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "manage_my_employees_DB",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});


connection.query = util.promisify(connection.query);

module.exports = connection;