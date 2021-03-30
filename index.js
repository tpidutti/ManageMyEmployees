const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = require("./db");
const cTable = require("console.table");
const Employees = require("./public/employees.js");
const Roles = require("./public/roles.js");
const Department = require("./public/departments.js");

begin();

async function begin() {
  await inquirer
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
          "Done"
        ],
      },
    ])
    .then((response) => {
      switch (response.chooseAction) {
        case "View All Employees":
          Employees.selectAllEmployees();
          break;
        case "View All Employees By Department":
          Department.selectAllEmployeesDept();
          break;
        case "View All Employees By Manager":
          selectAllEmployeesManagers();
          break;
        case "Add Employees":
          Employees.insertEmployee();
          break;
        case "Remove Employee":
          Employees.deleteEmployee();
          break;
        case "Update Employee Role":
          Roles.updateEmplRole();
          break;
        case "Update Employee Manager":
          updateEmplManager();
        default:
            connection.end();
      };
    });
};





