import inquirer from 'inquirer';
// Import and require mysql2
import mysql from 'mysql2'

const PORT = process.env.PORT || 3001;
// const app = express();

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
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

function viewDepartment() {
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

employeeTracker();