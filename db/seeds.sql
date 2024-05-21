INSERT INTO
    department (name)
VALUES ("Management"),
    ("Human Resources"),
    ("Security"),
    ("Software"),
    ("Sales");

INSERT INTO
    role (title, salary, department_id)
VALUES (
        "Chief Executive Officer",
        500000.00,
        1
    ),
    (
        "Business Administrator",
        200000.00,
        1
    ),
    ("IT Manager", 175000.00, 1),
    ("HR Specialist", 87500.00, 2),
    ("HR Analyst", 70000.00, 2),
    (
        "Secured Space Specialist",
        45000.00,
        3
    ),
    ("Security Guard", 35000.00, 3),
    (
        "Senior Software Developer",
        185000.00,
        4
    ),
    (
        "Junior Developer",
        72500.00,
        4
    ),
    (
        "Executive Sales Representative",
        80000.00,
        5
    ),
    (
        "Sales Associate",
        55000.00,
        5
    );

INSERT INTO
    employee (
        first_name,
        last_name,
        role_id,
        manager_id
    )
VALUES ("John", "Doe", 7, 3),
    ("Mark", "Homes", 1, 1),
    ("Alina", "Bruts", 2, 1),
    ("Laura", "Grets", 4, 2),
    ("Jerry", "Scary", 7, 3),
    ("Den", "Den", 3, 4);