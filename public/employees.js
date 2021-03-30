const inquirer = require("inquirer");
const mysql = require("mysql");
// const cTable = require("console.table");

class Employees {
  constructor(id, first_name, last_name, role_id, manager_id) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.role_id = role_id;
    this.manager_id = manager_id;
  };

  insertEmployee() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "first_name",
          message:
            "What is the first name of the employee to be added to the database?",
        },
        {
          type: "input",
          name: "last_name",
          message:
            "What is the last name of the employee to be added to the database?",
        },
        {
          type: "list",
          name: "role",
          choices: ["Charge Nurse", "CNA", "Billing", "Doctor", "Leagal Team Lead"]
        },
      ])
      .then((response) => {
        const answer =
          "INSERT INTO employees SET ?"
      connection.query(
          answer,
          [
            response.id,
            response.first_name,
            response.last_name,
            response.role_id,
            response.manager_id,
          ],
          function (err, response) {
            console.log("Added new employee", response.id);
      
            begin();
          }
        );
      });
  };

  deleteEmployee() {
    inquirer
      .prompt({
        type: "number",
        name: "employee_id",
        message:
          "What is the id number of the employee that you want to remove from the database?",
      })
      .then((response) => {
        connection.query("DELETE FROM employees WHERE id = ?;");
        console.table(response);
        begin();
      });
  };


selectAllEmployees() {
  inquirer
  .prompt({
    type: "confirm",
    name: "select_all_employees",
    message: "Do you want to view all employees?",
  })
  .then((response) => {
    connection.query("SELECT * FROM employees;", (err, response) => {
        console.table(response);

        begin();
    });

  });
};

};

module.exports = Employees;