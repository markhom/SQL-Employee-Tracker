import inquirer from 'inquirer';
// Import and require mysql2
import mysql from 'mysql2'
import { table } from 'table';

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        port: 3001,
        user: 'root',
        password: '',
        database: 'employee_tracker_db'
    },
    console.log(`Connected to the employee_tracker_db database.`)
);

//Starting prompt function

function employeeTracker() {
    inquirer
        .prompt({
            type: "list",
            choices: [
                "View departments",
                "View roles",
                "View employees",
                "Add department",
                "Add role",
                "Add employee",
                "Update employee role",
                "Exit"
            ],
            message: "What would you like to do?",
            name: "option"
        })
        .then(function (result) {
            console.log("You entered: " + result.option);

            switch (result.option) {
                case "View departments":
                    viewDepartment();
                    break;
                case "View roles":
                    viewRoles();
                    break;
                case "View employees":
                    viewEmployees();
                    break;
                case "Add department":
                    addDepartment();
                    break;
                case "Add role":
                    addRole();
                    break;
                case "Add employee":
                    addEmployee();
                    break;
                case "Update employee role":
                    updateEmployee();
                    break;
                default:
                    quit();
            };
        });
};

//Choice functions

function addDepartment() {
    inquirer.prompt({
        type: "input",
        messsage: "What is the name of the department?",
        name: "departmentName"
    }).then(function (answer) {
        connection.query("INSERT INTO department (name) VALUES (?)"), [answer.departmentName], function (err, res) {
            if (err) throw err;
            console.table(res)
            employeeTracker();
        }
    })
}

function addRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "What's the name of the role?",
            name: "roleName"
        },
        {
            type: "input",
            message: "What is the salary for this role?",
            name: "salary"
        },
        {
            type: "input",
            message: "What is the department id number?",
            name: "departmentId"
        }
    ])
    .then(function(answer) {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.salary, answer.departmentId], function(err, res) {
            if(err) throw err;
            console.table(res);
            employeeTracker();
        });
    });
};

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "What's the first name of the employee?",
            name: "firstNameInput"
        },
        {
            type: "input",
            message: "What's the last name of the employee?",
            name: "lastNameInput"
        },
        {
            type: "input",
            message: "What is the employee's role id number?",
            name: roleId
        },
        {
            type: "input",
            message: "What is the manager id number?",
            name: managerId
        }
    ]).then(function(answer) {

      
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.eeFirstName, answer.eeLastName, answer.roleID, answer.managerID], function(err, res) {
          if (err) throw err;
          console.table(res);
          employeeTracker();
        });
});
}

employeeTracker();