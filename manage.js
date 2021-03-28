const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const Employees = require("./public/employees.js");
const Roles = require("./public/roles.js");
const Department = require("./public/departments.js");

const connection = mysql.connectAt({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "manage_my_employees",
});

// connection.connect();
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });
//   connection.end();

connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);

    begin();
  });

function begin() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "chooseAction",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "View All Employees By Department",
          "View All Employees By Manager",
          "Add Employee",
          "Remove Employee",
          "Update Employee Role",
          "Update Employee Manager",
        ],
      },
    ])
    .then((response) => {
      switch (response.chooseAction) {
        case "View All Employees":
          selectAllEmployees();
          break;
        case "View All Employees By Department":
          selectAllEmployeesDept();
          break;
        case "View All Employees By Manager":
          // selectAllEmployeesManagers();
          break;
        case "Add Employees":
          insertEmployee();
          break;
        case "Remove Employee":
          deleteEmployee();
          break;
        case "Update Employee Role":
          updateEmplRole();
          break;
        case "Update Employee Manager":
          // updateEmplManager();
        default:
            connection.end();
      }
    });
}

function selectAllEmployees(){
    connection.query("SELECT * FROM employees", (err, response) => {
        console.table(response);
        begin();
    })
}

