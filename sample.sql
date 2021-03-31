-- view all departments, all roles, all employees
SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;

-- add to departments, roles, employees
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES (?, ?, ?, ?);

INSERT INTO roles (title, salary, dept_id)
VALUES (?, ?, ?);

INSERT INTO departments (department_name)
VALUES (?);

-- update employee roles
-- UPDATE roles INNER JOIN employees ON roles.role_id = employees.role_id SET roles (title, salary, dept_id)
-- VALUES (?, ?, ?);

-- delete departments, roles, employees
-- SELECT dept_id = ? FROM departments;
DELETE FROM departments WHERE dept_id = ?;

