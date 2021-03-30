const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");
const Employees = require("public/Employees");

class Department extends Employees {
  constructor(department_id, department_name) {
    super(id, first_name, last_name, role_id, manager_id);
    this.department_id = department_id;
    this.department_name = department_name;
  }
  selectAllEmployeesDept() {
    inquirer.prompt({
      type: "list",
      name: "select_all_employees_by_dept",
      message: "Which department do you want to view employees from?",
    })
    .then((response) => {
      connection.query("SELECT * FROM employees WHERE department_name;"); console.table(response);
       
      begin();

    });
  };
};

module.exports = Department;
