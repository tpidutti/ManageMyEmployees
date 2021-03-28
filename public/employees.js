class Employees {
    constructor (id, first_name, last_name, role_id, manager_id) {
        this.id = id;
        this.first_name = first_name;
        this last_name = last_name;
        this.role_id = role_id;
        this.manager_id = manager_id;
    }
    insertEmployee() {
connection.query("INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES (?,?,?,?,?);")
    }

    deleteEmployee() {
connection.query("DELETE FROM employees WHERE id = ?;")
    }
}