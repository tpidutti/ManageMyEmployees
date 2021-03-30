const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");
const Employees = require("public/Employee");

class Roles extends Employees {
  constructor(title, salary, department_id) {
    super(id, first_name, last_name, role_id, manager_id);
    this.title = title;
    this.salary = salary;
    this.department_id = department_id;
  }
  updateEmplRole() {
    inquirer.prompt({
      type: "",
      name: "",
      message: "",
    })
    .then((response) => {
      connection.query(
        "UPDATE employees SET title = ?, salary = ?, department_id = ? WHERE id = Employees.id;");
        console.table(response);
        
        begin();

    });
  };
};

module.exports = Roles;
