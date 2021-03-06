const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = require("./db");

begin();

function begin() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "chooseAction",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "View All Departments",
          "View All Roles",
          "Add Employee",
          "Add Department",
          "Add Role",
          "Remove Employee",
          "Remove Department",
          "Remove Roles",
          "Update Employee Role",
          "Done",
        ],
      },
    ])
    .then((response) => {
      switch (response.chooseAction) {
        case "View All Employees":
          selectAllEmployees();
          break;
        case "View All Departments":
          selectAllDept();
          break;
        case "View All Roles":
          selectAllRoles();
          break;
        case "Add Employee":
          insertEmployee();
          break;
        case "Add Department":
          insertDept();
          break;
        case "Add Role":
          insertRole();
          break;
        case "Remove Employee":
          deleteEmployee();
          break;
        case "Remove Department":
          deleteDept();
          break;
        case "Remove Role":
          deleteRole();
          break;
        case "Update Employee Role":
          updateEmplRole();
          break;
        default:
          connection.end();
      }
    });
}

function selectAllEmployees() {
  connection.query("SELECT * FROM employees;", (err, response) => {
    console.log(err);
    console.table(response);

    begin();
  });
}

function selectAllDept() {
  connection.query("SELECT * FROM departments;", (err, response) => {
    console.log(err);
    console.table(response);

    begin();
  });
}

function selectAllRoles() {
  connection.query("SELECT * FROM roles;", (err, response) => {
    console.log(err);
    console.table(response);

    begin();
  });
}

function insertEmployee() {
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
        name: "role_id",
        choices: [
          { name: "Charge Nurse", value: 1 },
          { name: "CNA", value: 2 },
          { name: "Billing", values: 3 },
          { name: "Doctor", values: 4 },
          { name: "Leagal Team Lead", values: 5 },
        ],
      },
    ])
    .then((response) => {
      connection.query(
        "INSERT INTO employees SET ?",
        response,
        (err, results) => {
          if (err) throw err;
          console.table(results);

          begin();
        }
      );
    });
}

function insertDept() {
  inquirer
    .prompt({
      type: "list",
      name: "department_name",
      message: "Which department do you want to add to the database?",
      choices: ["Nursing", "Legal", "Finance", "Medical"],
    })
    .then((response) => {
      connection.query(
        "INSERT INTO departments SET ?",
        response,
        (err, results) => {
          if (err) throw err;
          console.table(results);

          begin();
        }
      );
    });
}

function insertRole() {
  connection.query(
    "SELECT * FROM departments",
    (err, results) => {
      if (err) throw err;
      const departments = [...results.map(dept => ({value: dept.dept_id, name: dept.department_name}))]
      inquirer
        .prompt([
          {
            type: "list",
            name: "title",
            choices: [
              "Charge Nurse",
              "CNA",
              "Billing",
              "Doctor",
              "Leagal Team Lead",
              "Staff Nurse",
            ],
          },
          {
            type: "number",
            name: "salary",
            message: "Enter the salary for this role.",
          },
          {
            type: "list",
            name: "dept_id",
            choices: departments,
            message: "Choose the deparment that the role belongs to.",
          }
        ])
        .then((response) => {
          connection.query("INSERT INTO roles SET ?", response, (err, results) => {
            if (err) throw err;
            console.table(results);
            begin();
          });
        });
    }
  );
}

function deleteEmployee() {
  inquirer
    .prompt({
      type: "number",
      name: "empl_id",
      message:
        "What is the id number of the employee that you want to remove from the database?",
    })
    .then((response) => {
      connection.query("DELETE FROM employees WHERE empl_id = ?", response, (err, results)=> {
        if (err) throw err;
        console.table(results);
        begin();

      });
    });
}

function deleteDept() {
  inquirer
    .prompt({
      type: "number",
      name: "dept_id",
      message:
        "What is the id number of the department that you want to remove from the database?",
    })
    .then((response) => {
      connection.query("DELETE FROM departments WHERE dept_id = ?", response, (err, results)=> {
        if (err) throw err;
        console.table(results);
        begin();

      });
    });
}

function deleteRole() {
  inquirer
    .prompt({
      type: "number",
      name: "role_id",
      message:
        "What is the id number of the role that you want to remove from the database?",
    })
    .then((response) => {
      connection.query("DELETE FROM roles WHERE role_id = ?", response, (err, results)=> {
        if (err) throw err;
        console.table(results);
        begin();

      });
    });
}

function updateEmplRole() {
  inquirer
    .prompt({
      type: "input",
      name: "update_empl_role",
      message: "Which empl_id do you want a role change for?",
    })
    .then((response) => {
      connection.query(
        "UPDATE employees SET title = ?, salary = ?, dept_id = ? WHERE empl_id = ?", response, (err, results) => {
          if (err) throw err;
          console.table(response);
    
          begin();

        });
    });
}
