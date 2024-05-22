# SQL Employee Tracker

## Description
This command-line application allows a business owner to view and manage the departments, roles, and employees in their company, making it easier to organize and plan the business. The application uses Node.js, Inquirer, and MySQL to interact with the user and manage the employee database.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)
- [Repository](#repository)

## Installation
1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/yourusername/sql-employee-tracker.git
2. Navigate to the project directory.
   ```bash
   cd sql-employee-tracker
3. Install the required dependencies
   ```bash
   npm install inquirer
4. Set up your MySQL database and update the database credentials in 'server.js'.

## Usage
1. Start the application
   ```bash 
   npm run start
2. Follow the prompts to view and manage the departments, roles, and employees in your company.

## Features
- View all departments
    - Presents a formatted table showing department names and department ids.
- View all roles
    - Presents job title, role id, the department that role belongs to, and the salary for that role.
- View all employees
    - Presents employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.
- Add a department
    - Prompts to enter the name of the department and adds it to the database.
- Add a role
    - Prompts to enter the name, salary, and department for the role and adds it to the database.
- Add an employee
    - Prompts to enter the employee’s first name, last name, role, and manager, and adds the employee to the database.
- Update an employee role
    - Prompts to select an employee to update and their new role and updates this information in the database.

## Walkthrough Video
A walkthrough video demonstrating the functionality of the application is available [here](https://drive.google.com/file/d/180nCSvX-7JjwJdFiFkPD_WqTLvc_Ec32/view). The video shows how to invoke the application from the command line, and demonstrates the functional menu with all the options outlined in the acceptance criteria.

## License 
This project is licensed under the MIT License.

## Repository
[My Repsitory](https://github.com/markhom/SQL-Employee-Tracker)