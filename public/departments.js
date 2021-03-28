const Employees = require("public/Employees");

class Department extends Employees {
    constructor(department_id, department_name){
        super(id, first_name, last_name, role_id, manager_id);
        this department_id = department_id;
        this.department_name = department_name;
    }
    selectAllEmployeesDept() {
    connection.query("SELECT * FROM employees WHERE department_name;") 
    }
}

module.exports = Department;