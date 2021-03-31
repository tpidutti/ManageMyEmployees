DROP DATABASE IF EXISTS manage_my_employees_DB;

CREATE DATABASE manage_my_employees_DB;

USE manage_my_employees_DB;

CREATE TABLE employees (
    empl_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (empl_id)
    -- FOREIGN KEY (role_id) REFERENCES roles(role_id)
);

CREATE TABLE roles (
    role_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    dept_id INT NOT NULL,
    PRIMARY KEY (role_id)
    -- FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

CREATE TABLE departments (
    dept_id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30),
    PRIMARY KEY (dept_id)
);