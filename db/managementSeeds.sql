USE manage_my_employees_DB;


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Joe", "Jackson", 8320, 395), ("Nancy", "Newman", 1937, 287);

INSERT INTO roles (title, salary, dept_id)
VALUES ("Charge Nurse", 100000, 8305), ("CNA", 50000, 6519), ("Billing", 60000, 8401), ("Legal Team Leader", 150000, 5920), ("Doctor", 250000, 2714);

INSERT INTO departments (department_name)
VALUES ("Nursing"), ("Legal"), ("Finance"), ("Medical");


