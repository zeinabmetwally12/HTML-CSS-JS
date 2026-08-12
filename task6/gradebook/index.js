const addStudent = require('./modules/addStudent');
const listStudents = require('./modules/listStudents');
const filterPassed = require('./modules/filterPassed');

addStudent(1, 'Zeinab', [85, 90, 78]);
addStudent(2, 'Salma', [50, 45, 60]);
addStudent(3, 'Ahmed', [92, 95, 98]);
addStudent(4, 'Mohammed', [55, 58, 59]);

listStudents();
filterPassed();